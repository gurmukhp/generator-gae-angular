goog.provide('<%= definedAppName %>.app');

/**
 * Loads <%= definedAppName %> app with dependencies.
 */
<%= definedAppName %>.app.module =
    angular.module('<%= definedAppName %>.app', ['ngRoute', 'ngAnimate']);

<%= definedAppName %>.app.module.config(function(
    $routeProvider, $locationProvider, $compileProvider) {
  $routeProvider.when('/page1', {templateUrl: 'partials/page1.html'})
      .when('/page2', {templateUrl: 'partials/page2.html'})
      .when('/page3', {templateUrl: 'partials/page3.html'});

  $locationProvider.html5Mode(true);

  // Speeds up Angular by not adding ng-scope attributes to DOM elements.
  $compileProvider.debugInfoEnabled(false);
});
