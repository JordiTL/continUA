'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('DetailsCtrl', ['$rootScope','$routeParams', '$mdToast', '$log', function($rootScope, $routeParams, $mdToast, $log) {
    var self = this;
    var activityId = $routeParams.activityId;

    self.model = {};
    self.model.main = {};
    self.model.main.title = "Yoga";
    self.model.main.favorited = false;
    self.model.main.briefDescription = "¿Qué es el yoga? Esta suele ser la primera pregunta que se hace la gente que quiere empezar a practicar el yoga para conseguir todos los beneficios del yoga. El yoga es una disciplina, más que un deporte, porque no trata solo de cultivar el cuerpo, sino también la mente, y el alma. El yoga nació en la India y es una práctica de meditación muy común en el hinduismo.";
    self.model.main.image = "http://www.belgranoathletic.club/wp-content/uploads/2014/07/yoga.jpg";

    self.model.goals = [];
    self.model.goals[0] = "Alcanzar el equilibrio emocional";
    self.model.goals[1] = "Aumentar la capacidad de concentración";
    self.model.goals[2] = "Mejorar la musculatura del suelo pélvico";
    self.model.goals[3] = "Mejorar en el conocimiento de uno mismo";
    self.model.goals[4] = "Mejorar el control postural";
    self.model.goals[5] = "Reducir el estrés ";

    self.model.scores = [];
    self.model.scores[0] = {
      title: "Score 1",
      value: 30
    };
    self.model.scores[1] = {
      title: "Score 2",
      value: 60
    };
    self.model.scores[2] = {
      title: "Score 3",
      value: 10
    };
    self.model.scores[3] = {
      title: "Score 4",
      value: 90
    };
    self.model.scores[4] = {
      title: "Score 5",
      value: 30
    };

    self.model.keywords = ["keyword1", "key2", "a long keyword", "This is other keyword", "keyword 3"];


    self.model.groups = [];

    self.model.groups[0] = {};
    self.model.groups[0].title = "Group 1";
    self.model.groups[0].time = "20:00 - 21:00";
    self.model.groups[0].lessons = [];
    self.model.groups[0].lessons[0] = {
      title: "L",
      active: false
    };
    self.model.groups[0].lessons[1] = {
      title: "M",
      active: true
    };
    self.model.groups[0].lessons[2] = {
      title: "X",
      active: false
    };
    self.model.groups[0].lessons[3] = {
      title: "J",
      active: true
    };
    self.model.groups[0].lessons[4] = {
      title: "V",
      active: true
    };
    self.model.groups[0].lessons[5] = {
      title: "S",
      active: false
    };
    self.model.groups[0].lessons[6] = {
      title: "D",
      active: false
    };

    self.model.groups[1] = {};
    self.model.groups[1].title = "Group 2";
    self.model.groups[1].time = "16:00 - 17:00";
    self.model.groups[1].lessons = [];
    self.model.groups[1].lessons[0] = {
      title: "L",
      active: true
    };
    self.model.groups[1].lessons[1] = {
      title: "M",
      active: false
    };
    self.model.groups[1].lessons[2] = {
      title: "X",
      active: true
    };
    self.model.groups[1].lessons[3] = {
      title: "J",
      active: false
    };
    self.model.groups[1].lessons[4] = {
      title: "V",
      active: true
    };
    self.model.groups[1].lessons[5] = {
      title: "S",
      active: false
    };
    self.model.groups[1].lessons[6] = {
      title: "D",
      active: true
    };

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
