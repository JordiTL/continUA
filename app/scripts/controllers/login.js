'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('LoginCtrl', ['$rootScope', '$log', function($rootScope, $log) {

    var self = this;

    self.showNavBar = function() {
      $rootScope.$broadcast('NavBar.show');
    };

    self.hideNavBar = function() {
      $rootScope.$broadcast('NavBar.hide');
    };

    self.authExternalProvider = function(provider) {
      console.log("Login con " + provider);
    };

  }]);
