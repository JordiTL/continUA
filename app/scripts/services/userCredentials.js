'use strict';

angular.module('continuaApp').factory('userCredentials', function() {
  var sharedService = {};

  sharedService.user = {};

  sharedService.setUser = function(user) {
    this.user = user;
  };

  sharedService.getUser = function() {
    return this.user;
  };

  return sharedService;
});
