goog.provide('<%= definedAppName %>.components.<%= componentName %>.<%= capitalizedComponentName %>Controller');

/**
 * Component template controller.
 * @param {!angular.Scope} $rootScope
 * @param {!angular.Scope} $scope
 * @param {!angular.JQLite} $element
 * @param {!angular.$q} $q AngularJS $http service.
 * @ngInject @constructor @final @struct
 */
<%= definedAppName %>.components.<%= componentName %>.<%= capitalizedComponentName %>Controller =
    function($rootScope, $scope, $element, $q) {
  /** @private {!angular.Scope} */
  this.ngRootScope_ = $rootScope;

  /** @private {!angular.Scope} */
  this.ngScope_ = $scope;

  /** @private {!angular.JQLite} */
  this.ngElement_ = $element;

  /** @private {!angular.$q} */
  this.ngQ_ = $q;

  console.log('<%= componentName %> component setup!');
};
