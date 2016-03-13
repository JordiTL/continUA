'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('MenuCtrl', ['$rootScope', '$log', function($rootScope, $log) {
    var self = this;

    self.model = {};
    self.model.showButton = true;
    self.model.menuEntries = [];


    self.loadEntries = function (menuEntries){
      this.model.menuEntries = menuEntries;
    };

    self.openMenu = function($mdOpenMenu, ev) {
      $log.debug('Open menu fired');
      $mdOpenMenu(ev);
    };

    self.showButton = function(show){
      this.model.showButton = show;
    };

    self.changeEntries = function(entries){
      this.model.menuEntries = entries;
    };

    self.showVerticalMenu = function() {
      return this.model.menuEntries === [];
    }

    /* -------------- EVENT HANDLING ---------------*/
    $rootScope.$on('TopMenu.showButton', function(event, show) {
      $log.debug('Event \'' + event + '\' receipt');
      self.showButton(show);
    });

    $rootScope.$on('TopMenu.changeEntries', function(event, entries) {
      $log.debug('Event \'' + event + '\' receipt');
      self.changeEntries(entries);
    });

  }]);
