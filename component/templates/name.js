goog.provide('<%= definedAppName %>.components.<%= componentName %>.module');

goog.require('<%= definedAppName %>.components.<%= componentName %>.<%= capitalizedComponentName %>Component');


/**
 * <%= definedAppName %> component.
 * @type {!angular.Module}
 */
<%= definedAppName %>.components.<%= componentName %>.module =
    angular.module('<%= definedAppName %>.components.<%= componentName %>', []);

<%= definedAppName %>.components.<%= componentName %>.module.component(
    '<%= componentName %>',
    <%= definedAppName %>.components.<%= componentName %>.<%= capitalizedComponentName %>Component);
