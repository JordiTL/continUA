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

    self.authExternalProvider = function(provider) {
      console.log("Login con " + provider);
    };

  }]);
