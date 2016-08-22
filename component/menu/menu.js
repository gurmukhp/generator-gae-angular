goog.module('<%= definedAppName %>.components.menu.module');

const MenuComponent = goog.require('<%= definedAppName %>.components.menu.MenuComponent');


/**
 * <%= definedAppName %> component.
 * @type {!angular.Module}
 */
exports = angular.module('<%= definedAppName %>.components.menu', []);

exports.component('menu', MenuComponent);
