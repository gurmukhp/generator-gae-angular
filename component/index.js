'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var Generator = yeoman.generators.Base.extend({
  initializing: function() { this.pkg = require('../package.json'); },

  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Angular Component Generator'));

    var prompts = [
      {
        type: 'input',
        name: 'definedAppName',
        message: 'What is the app name?',
        default: 'default'
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the name of the component you want to add?',
        default: 'default'
      }
    ];

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    this.prompt(prompts, function(props) {
      this.definedAppName = props.definedAppName;
      this.componentName = props.componentName;
      this.capitalizedComponentName = capitalizeFirstLetter(this.componentName);
      done();
    }.bind(this));
  },

  writing: function() {
    var componentDirectory = 'dev/components/' + this.componentName;

    // Set up directory structure
    this.mkdir(componentDirectory);

    // Process templates
    this.template(
        'name.js', componentDirectory + '/' + this.componentName + '.js');

    this.template(
        'name-component.js',
        componentDirectory + '/' + this.componentName + '-component.js');

    this.template(
        'name-controller.js',
        componentDirectory + '/' + this.componentName + '-controller.js');

    this.template(
        'name-template.html',
        componentDirectory + '/' + this.componentName + '-template.html');

  } /*,

   install: function() { this.installDependencies({bower: false}); },

   end: function() { this.spawnCommand('gulp'); }*/
});

module.exports = Generator;
