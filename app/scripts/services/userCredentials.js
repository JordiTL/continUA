'use strict';

angular.module('continuaApp').factory('userCredentials', function() {
  var sharedService = {};

  sharedService.user = {};
  sharedService.userId = {};

  sharedService.setUser = function(user) {
    this.user = user;
  };

  sharedService.getUser = function() {
    return this.user;
  };

  sharedService.getUserId = function() {
    return this.userId;
  };

  sharedService.setUserId = function(userId) {
    this.userId = userId;
  };

  return sharedService;
});
