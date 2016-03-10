'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('LoginCtrl', ['$rootScope', '$log', 'broadcastService', '$location', function($rootScope, $log, sharedService, $location) {

    var self = this;

    self.login = function() {
      $location.path('/main');
    };

    self.hideNavBar = function() {
      sharedService.hideNavBar();
    };

    self.authExternalProvider = function(provider) {
      console.log("Login con " + provider);
    };

  }]);
