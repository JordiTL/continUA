'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('CommentsCtrl', ['$rootScope','$routeParams', '$mdToast', '$log', function($rootScope, $routeParams, $mdToast, $log) {
    var self = this;
    self.activityID = $routeParams.activityID;

    self.model = {};
    self.model.main = {};
    self.model.main.title = "Comentarios de los usuarios";
    self.model.main.favorited = false;
    self.model.main.briefDescription = "¿Qué es el yoga? Esta suele ser la primera pregunta que se hace la gente que quiere empezar a practicar el yoga para conseguir todos los beneficios del yoga. El yoga es una disciplina, más que un deporte, porque no trata solo de cultivar el cuerpo, sino también la mente, y el alma. El yoga nació en la India y es una práctica de meditación muy común en el hinduismo.";
    self.model.main.image = "http://www.belgranoathletic.club/wp-content/uploads/2014/07/yoga.jpg";

    self.commentsList = [
      {
        name: 'Briant',
        title: 'Esta actividad es una mierda',
        content: 'por dios cambiar al monitor de MHVC que no vale nada. Solo nos enseña el ojete.'
      },
      {
        name: 'Mariano',
        title: 'Esta actividad mola muxo',
        content: 'Soy un marikita like Paco and George y el camarero me pone muxisimo.'
      },
      {
        name: 'Mariano',
        title: 'Esta actividad mola muxo',
        content: 'Soy un marikita like Paco and George y el camarero me pone muxisimo.'
      },
      {
        name: 'Mariano',
        title: 'Esta actividad mola muxo',
        content: 'Soy un marikita like Paco and George y el camarero me pone muxisimo.'
      }
    ]

    self.model.keywords = ["keyword1", "key2", "a long keyword", "This is other keyword", "keyword 3"];

    self.showToast = function(msg) {
      $mdToast.show(
        $mdToast.simple()
        .textContent(msg)
        .hideDelay(1000)
      );
    };

    self.favAction = function() {
      self.model.main.favorited = !self.model.main.favorited;

      if (self.model.main.favorited) {
        self.showToast("Actividad marcada como favorita");
      } else {
        self.showToast("Actividad desmarcada como favorita");
      }
    };

    self.shareAction = function() {

    };

    self.commentAction = function() {

    };

    self.loadMenuEntries = function() {
      $log.info('Loading main menu entries');
      var menuEntries = [];
      menuEntries[0] = {
        'label': 'Inscripción',
        'icon': 'help',
        'callback': function() {
          $log.info('Inscripción called');
        }
      };
      menuEntries[1] = {
        'label': 'Compartir',
        'icon': 'share_arrow',
        'callback': function() {
          $log.info('Compartir called');
        }
      };

      $rootScope.$broadcast("TopMenu.changeEntries", menuEntries);
    };

  }]);
