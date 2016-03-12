'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('LoginCtrl', ['$rootScope', '$log', 'broadcastService', '$location', 'GooglePlus','userCredentials', function($rootScope, $log, sharedService, $location, GooglePlus, userCredentials) {

    var self = this;

    self.login = function() {
      self.authExternalProvider();
    };

    self.hideNavBar = function() {
      sharedService.hideNavBar();
    };

    self.authExternalProvider = function() {
      GooglePlus.login().then(function(authResult) {
        console.log(authResult);

        if(authResult.status.google_logged_in){
          GooglePlus.getUser().then(function(user) {
            console.log(user);
            userCredentials.setUser(user);
            sharedService.notifyLogin();
            $location.path('/main');
          });
        }

      }, function(err) {
        console.log(err);
      });
    };
  }]);
