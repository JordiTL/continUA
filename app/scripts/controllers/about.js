'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:Profile
 * @description
 * # AboutCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('AboutCtrl', ['$rootScope', '$log', function($rootScope, $log) {
    var self = this;

    self.model = [{
      name : "Ulises Serrano Martínez",
      description : "Grado Ingeniería Informática, esp. Ing. Software"
    },{
      name : "Francisco Agulló Antolín",
      description : "Ingeniería Informática Superior (Plan 2001)"
    },{
      name : "Jorge Torregrosa Lloret",
      description : "Grando Ingeniería Multimedia"
    }];

  }]);
