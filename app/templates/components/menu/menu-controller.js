goog.module('<%= definedAppName %>.components.menu.MenuController');

/**
 * Component template controller.
 * @param {!angular.Scope} $rootScope
 * @param {!angular.Scope} $scope
 * @param {!angular.JQLite} $element
 * @param {!angular.$q} $q AngularJS $http service.
 * @ngInject @constructor @final @struct
 */
exports = function($rootScope, $scope, $element, $q) {
  /** @private {!angular.Scope} */
  this.ngRootScope_ = $rootScope;

  /** @private {!angular.Scope} */
  this.ngScope_ = $scope;

  /** @private {!angular.JQLite} */
  this.ngElement_ = $element;

  /** @private {!angular.$q} */
  this.ngQ_ = $q;

  console.log('menu component setup!');
};
