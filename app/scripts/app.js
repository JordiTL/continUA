'use strict';

/**
 * @ngdoc overview
 * @name continuaApp
 * @description
 * # continuaApp
 *
 * Main module of the application.
 */
angular
  .module('continuaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'googleplus'
  ]).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('continua').primaryPalette('indigo');
    $mdThemingProvider.setDefaultTheme('continua');
  })
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      }).when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      }).when('/details/:activityID', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl',
        controllerAs: 'details'
      }).when('/community', {
        templateUrl: 'views/community.html',
        controller: 'CommunityCtrl',
        controllerAs: 'community'
      }).when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      }).when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      }).otherwise({
        redirectTo: '/'
      });
  }]).config(['GooglePlusProvider', function(GooglePlusProvider) {
     GooglePlusProvider.init({
        clientId: '356972876334-p4v281t3gqnpf7hu4cnak47i4kbtfsba.apps.googleusercontent.com',
        apiKey: 'dP5fFl1nOPUK_9Vb-wlD0-3V'
     });
}]);
