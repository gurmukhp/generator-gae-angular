goog.module('<%= definedAppName %>.components.<%= componentName %>.module');

const <%= capitalizedComponentName %>Component = goog.require('<%= definedAppName %>.components.<%= componentName %>.<%= capitalizedComponentName %>Component');


/**
 * <%= definedAppName %> component.
 * @type {!angular.Module}
 */
exports =
    angular.module('<%= definedAppName %>.components.<%= componentName %>', []);

exports.component(
    '<%= componentName %>', <%= capitalizedComponentName %>Component);
