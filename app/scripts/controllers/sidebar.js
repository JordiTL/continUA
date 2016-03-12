'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('SideBarCtrl', ['$rootScope', '$mdSidenav', '$log', '$location', function($rootScope, $mdSidenav, $log, $location) {
    var self = this;

    self.model = {};
    self.model.email = 'svetlanaliunco@gmail.com';
    self.model.profilePhoto = 'images/profile_image_test.jpg';

    $rootScope.$on('SideBarLeft.toggle', function(event) {
      $log.debug('Event \'' + event + '\' receipt');
      self.toggle();
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
