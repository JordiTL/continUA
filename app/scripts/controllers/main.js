'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('MainCtrl',['$rootScope', '$log', function($rootScope, $log) {

    var self = this;
    self.loadTestMenuEntries = function() {
      $log.info('Loading main menu entries');
      var testMenuEntries = [];
      testMenuEntries[0] = {
        'label': 'Entry 0',
        'icon': 'get_app',
        'callback': function() {
          $log.info('Entry 0 called');
        }
      };
      testMenuEntries[1] = {
        'label': 'Entry 1',
        'icon': 'grade',
        'callback': function() {
          $log.info('Entry 1 called');
        }
      };
      testMenuEntries[2] = {
        'label': 'Entry 2',
        'icon': 'history',
        'callback': function() {
          $log.info('Entry 2 called');
        }
      };
      testMenuEntries[3] = {
        'label': 'Entry 3',
        'icon': 'help',
        'callback': function() {
          $log.info('Entry 3 called');
        }
      };

      $rootScope.$broadcast("TopMenu.changeEntries", testMenuEntries);
    };

    self.messages = [{

      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {

      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {

      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {

      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {

      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {

      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {

      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {

      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {

      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }];

  }]);
