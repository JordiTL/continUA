'use strict';

angular.module('continuaApp').factory('broadcastService', function($rootScope) {
  var sharedService = {};

  sharedService.message = '';

  sharedService.search = function(msg) {
    this.message = msg;
    this.broadcastItem("Search");
  };

  sharedService.showNavBar = function() {
    sharedService.broadcastItem('NavBar.show');
  };

  sharedService.hideNavBar = function() {
    sharedService.broadcastItem('NavBar.hide');
  };

  sharedService.broadcastItem = function(event) {
    $rootScope.$broadcast(event);
  };

  return sharedService;
});
