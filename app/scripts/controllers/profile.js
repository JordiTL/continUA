'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:Profile
 * @description
 * # AboutCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('ProfileCtrl', ['$rootScope', '$log', function($rootScope, $log) {
    var self = this;
    self.model = {};
    self.model.email = "svetlanaliunco@gmail.com";
    self.model.name = "Svetlana Liunco";
    self.model.gender = "Mujer";
    self.model.fecha = new Date(1990, 4, 10);

  }]);
