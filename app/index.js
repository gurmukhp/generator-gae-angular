'use strict';
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var Generator = yeoman.generators.Base.extend({
  initializing: function() { this.pkg = require('../package.json'); },

  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the App Engine Angular Generator!'));

    var prompts = [{
      type: 'input',
      name: 'definedAppName',
      message: 'What is the app name?',
      default: 'default'
    }];

    this.prompt(prompts, function(props) {
      this.definedAppName = props.definedAppName;
      done();
    }.bind(this));
  },

  configuring: function() {
    this.src.copy('editorconfig', '.editorconfig');
    this.src.copy('.csscomb.json', '.csscomb.json');
    this.src.copy('babelrc.json', '.babelrc');
    this.src.copy('gitignore', '.gitignore');
  },

  writing: function() {
    // Set up directory structure
    this.mkdir('dev');
    this.mkdir('dev/components');
    this.mkdir('dev/partials');
    this.mkdir('dev/scss');
    this.mkdir('public');
    this.mkdir('public/static');

    // Process templates
    this.template('_gulpfile.babel.js', 'gulpfile.babel.js');
    this.template('_app.js', 'dev/app.js');
    this.template('index.html', 'dev/index.html');
    this.template('app.yaml', 'app.yaml');

    // Copy non-template files
    this.src.copy('app.scss', 'dev/app.scss');
    this.src.copy('package.json', 'package.json');
    this.src.copy('README.md', 'README.md');

    this.directory('scss', 'dev/scss');
    this.directory('partials', 'dev/partials');
    this.directory('components', 'dev/components');
  },

  install: function() { this.installDependencies({bower: false}); },

  end: function() { this.spawnCommand('gulp'); }
});

module.exports = Generator;
