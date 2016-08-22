goog.module('<%= definedAppName %>.components.menu.MenuComponent');

const MenuController = goog.require('<%= definedAppName %>.components.menu.MenuController');


/** @type {!angular.Component} */
exports = {
  templateUrl: 'components/menu/menu-template.html',
  controller: MenuController
};
