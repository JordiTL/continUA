'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:Profile
 * @description
 * # AboutCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('ProfileCtrl', ['$rootScope', '$log', 'userCredentials', '$location', function($rootScope, $log, userCredentials, $location) {
    var self = this;

    var user = userCredentials.getUser();

    if (Object.keys(user).length === 0 && JSON.stringify(user) === JSON.stringify({})) {
      $location.path("/");
    }

    self.model = {};
    self.model.email = "svetlanaliunco@gmail.com";
    self.model.name = user.name;
    self.model.gender = user.gender === "male" ? "Hombre" : "Mujer";
    self.model.fecha = new Date(1990, 4, 10);
    self.model.image = user.picture;

    self.loadMenuEntries = function() {
      $log.info('Loading main menu entries');
      var menuEntries = [];
      menuEntries[0] = {
        'label': '¿Quiénes somos?',
        'icon': 'people',
        'callback': function() {
          $location.path("/about");
        }
      };
      $rootScope.$broadcast("TopMenu.changeEntries", menuEntries);
    };

  }]);
