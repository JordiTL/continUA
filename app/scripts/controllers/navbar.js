'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('NavBarCtrl', ['$rootScope', '$log', 'broadcastService', function($rootScope, $log, sharedService) {
    var self = this;

    self.appName = "ContinUA";
    self.searchText = "";

    self.showNavBar = true;
    self.showSearchBar = false;

    var broadcastEvent = function(eventName) {
      $log.debug('Broadcasting \'' + eventName + '\'...');
      $rootScope.$broadcast(eventName);
    };

    self.toggle = function() {
      broadcastEvent('SideBarLeft.toggle');
    };

    self.showSearch = function(search) {
      self.showSearchBar = true;
    };

    self.search = function(event) {
      sharedService.search(self.searchText);
    };

    self.back = function() {
      self.showSearchBar = false;
    };

    $rootScope.$on('NavBar.show', function(event) {
      self.showNavBar = true;
    });

    $rootScope.$on('NavBar.hide', function(event) {
      self.showNavBar = false;
    });


  }]);
