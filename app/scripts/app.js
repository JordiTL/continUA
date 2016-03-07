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
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
