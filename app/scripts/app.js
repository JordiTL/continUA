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
    'ngMaterial'
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
      })
      .when('/details/:activityID', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl',
        controllerAs: 'details'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
