import gulp from 'gulp';
import del from 'del';
import sass from 'gulp-sass';
import watch from 'gulp-watch';
import closureCompiler from 'gulp-closure-compiler';
import webserver from 'gulp-webserver';
import util from 'gulp-util';
import batch from 'gulp-batch';

/**
 * Prevents errors in streams from stopping the watch task.
 * @param {string} error Error message.
 */
function handleError(error) {
  util.log(util.colors.red(error.toString()));
  this.emit('end');
}

const EXTERNS = [
  'node_modules/google-closure-compiler/contrib/externs/angular-1.5.js',
  'node_modules/google-closure-compiler/contrib/externs/angular-1.5-http-promise_templated.js',
  'node_modules/google-closure-compiler/contrib/externs/angular-1.5-mocks.js',
  'node_modules/google-closure-compiler/contrib/externs/angular-1.5-q_templated.js'
];


/**
 * Compiles CSS.
 * @param {boolean} watch
 * @return {Gulp}
 */
function compileCss(watch) {
  if (watch === true) {
    util.log('CSS: Watched file changed.');
  }

  return gulp.src('./dev/app.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/static'))
      .on('end', function() { util.log('CSS: Compiled.'); });
}


/**
 * Compiles Javascript.
 * @param {boolean} watch
 * @param {boolean} advancedBuild Should compress using advanced optimisations
 *    or not.
 * @return {Gulp}
 */
function compileJs(watch, advancedBuild) {
  if (watch === true) {
    util.log('JS: Watched file changed.');
  }

  const state = (advancedBuild) ? 'Advanced' : 'Simple';
  const compilerFlags = {
    externs: EXTERNS,
    closure_entry_point: '<%= definedAppName %>.app',
    compilation_level: (advancedBuild) ? 'ADVANCED_OPTIMIZATIONS' :
                                         'WHITESPACE_ONLY',
    only_closure_dependencies: true,
    warning_level: 'VERBOSE',
    formatting: 'PRETTY_PRINT',
    export_local_property_definitions: true,
    generate_exports: true,
    angular_pass: true,
    output_wrapper: '(function(){%output%}).call(window);',
  };

  util.log('JS: Starting ' + state + ' Compilation');

  // If an advanced build wasn't run, run it to check for errors.
  if (!advancedBuild) {
    compileJs(false, true);
  }

  return gulp
      .src([
        './dev/**/*.js',
        'node_modules/google-closure-library/closure/goog/base.js'
      ])
      .pipe(closureCompiler({
        compilerPath: 'node_modules/google-closure-compiler/compiler.jar',
        fileName: (advancedBuild) ? 'app.min.js' : 'app.js',
        compilerFlags: compilerFlags
      }))
      .on('error', handleError)
      .pipe(gulp.dest('public/static'))
      .on('end', function() {
        util.log(util.colors.black.bgGreen('JS: Compiled ' + state));
      });
}


/**
 * Copies HTML.
 * @return {Gulp}
 */
function copyHtml() {
  return gulp.src('./dev/**/*.html')
      .pipe(gulp.dest('./public/static'))
      .on('end', function() {
        util.log(util.colors.black.bgGreen('HTML: Compiled'));
      });
}


/**
 * Copy libraries from node_modules.
 */
function copyLibraries() {
  gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular/angular.min.js.map',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/angular-route/angular-route.min.js.map',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-animate/angular-animate.min.js.map'
      ])
      .pipe(gulp.dest('./public/static/lib/'));
}

gulp.task('clean', () => { return del(['public/static']); });

gulp.task('compile:css', ['clean'], compileCss);
gulp.task('compile:js', ['clean'], compileJs);
gulp.task('copy:html', ['clean'], copyHtml);

gulp.task(
    'default', ['clean', 'compile:js', 'compile:css', 'copy:html'], () => {
      copyLibraries();

      watch('./dev/**/*.scss', () => { compileCss(true); });
      watch('./dev/**/*.js', batch(function(events, done) {
              compileJs(true, false);
              done();
            }));
      watch('./dev/**/*.html', copyHtml);

      return gulp.src('./public/static').pipe(webserver({
        livereload: false,
        directoryListing: false,
        open: false,
        path: '/',
        fallback: 'index.html'
      }));
    });
