goog.module('<%= definedAppName %>.components.<%= componentName %>.<%= capitalizedComponentName %>Component');

const <%= capitalizedComponentName %> = goog.require('<%= definedAppName %>.components.<%= componentName %>.<%= capitalizedComponentName %>Controller');


/** @type {!angular.Component} */
exports = {
  templateUrl:
      'components/<%= componentName %>/<%= componentName %>-template.html',
  controller: <%= capitalizedComponentName %>Controller
};
