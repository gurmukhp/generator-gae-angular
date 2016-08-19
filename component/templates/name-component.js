goog.provide('<%= definedAppName %>.components.<%= componentName %>.<%= capitalizedComponentName %>Component');

goog.require('<%= definedAppName %>.components.<%= componentName %>.<%= capitalizedComponentName %>Controller');


/** @type {!angular.Component} */
<%= definedAppName %>.components.<%= componentName %>.<%= capitalizedComponentName %>Component =
    {
      templateUrl:
          'components/<%= componentName %>/<%= componentName %>-template.html',
      controller:
          <%= definedAppName %>.components.<%= componentName %>.<%= capitalizedComponentName %>Controller
    };
