'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('SideBarCtrl', ['$rootScope', '$mdSidenav', '$log', '$location', 'userCredentials',function($rootScope, $mdSidenav, $log, $location, userCredentials) {
    var self = this;

    self.model = {};
    self.model.email = "";
    self.model.profilePhoto = "";

    $log.info('user: ' + JSON.stringify(userCredentials.getUser()));
    $rootScope.$on('SideBarLeft.toggle', function(event) {
      $log.debug('Event \'' + event + '\' receipt');
      self.toggle();
    });

    $rootScope.$on('SideBarLeft.userlogin', function(event) {
      self.model = {};
      self.model.email = userCredentials.getUser().name;
      self.model.profilePhoto = userCredentials.getUser().picture;
    });

    self.close = function() {
      $mdSidenav('left').close()
        .then(function() {
          $log.debug("close LEFT is done");
        });
    };

    self.open = function() {
      $mdSidenav('left').close()
        .then(function() {
          $log.debug("open LEFT is done");
        });
    };

    self.toggle = function() {
      $mdSidenav('left').toggle()
        .then(function() {
          $log.debug("toggle LEFT is done");
        });
    };

    self.community = function() {
      self.close();
      $location.path("/community");
    };

    self.home = function() {
      self.close();
      $location.path("/main");
    };

    self.exit = function() {
      self.close();
      $location.path("/");
    };

    self.profile = function() {
      self.close();
      $location.path("/profile");
    };
  }]);
