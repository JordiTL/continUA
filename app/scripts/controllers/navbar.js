'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('NavBarCtrl', ['$rootScope', '$log', function($rootScope, $log) {
    var self = this;

    self.appName = "ContinUA";

    self.showNavBar = true;

    var broadcastEvent = function(eventName) {
      $log.debug('Broadcasting \'' + eventName + '\'...');
      $rootScope.$broadcast(eventName);
    };

    self.toggle = function() {
      broadcastEvent('SideBarLeft.toggle');
    };

    $rootScope.$on('NavBar.show', function(event) {
      self.showNavBar = true;
    });

    $rootScope.$on('NavBar.hide', function(event) {
      self.showNavBar = false;
    });


  }]);
