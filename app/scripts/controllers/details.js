'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('DetailsCtrl', ['$rootScope', '$routeParams', '$mdToast', '$log', 'dataService', '$location','userCredentials', function($rootScope, $routeParams, $mdToast, $log, dataService, $location, userCredentials) {

    var self = this;
    self.activityId = $routeParams.activityID;

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

    self.model.calls = [];

    self.model.calls[0] = {};

    self.model.calls[0].groups = [];

    self.model.calls[0].groups[0] = {};
    self.model.calls[0].groups[0].title = "Group 1";
    self.model.calls[0].groups[0].time = "20:00 - 21:00";
    self.model.calls[0].groups[0].lessons = [];
    self.model.calls[0].groups[0].lessons[0] = {
      title: "L",
      active: false
    };
    self.model.calls[0].groups[0].lessons[1] = {
      title: "M",
      active: true
    };
    self.model.calls[0].groups[0].lessons[2] = {
      title: "X",
      active: false
    };
    self.model.calls[0].groups[0].lessons[3] = {
      title: "J",
      active: true
    };
    self.model.calls[0].groups[0].lessons[4] = {
      title: "V",
      active: true
    };
    self.model.calls[0].groups[0].lessons[5] = {
      title: "S",
      active: false
    };
    self.model.calls[0].groups[0].lessons[6] = {
      title: "D",
      active: false
    };

    self.model.activeCall = 0;

    self.model.calls[0].groups[1] = {};
    self.model.calls[0].groups[1].title = "Group 2";
    self.model.calls[0].groups[1].time = "16:00 - 17:00";
    self.model.calls[0].groups[1].lessons = [];
    self.model.calls[0].groups[1].lessons[0] = {
      title: "L",
      active: true
    };
    self.model.calls[0].groups[1].lessons[1] = {
      title: "M",
      active: false
    };
    self.model.calls[0].groups[1].lessons[2] = {
      title: "X",
      active: true
    };
    self.model.calls[0].groups[1].lessons[3] = {
      title: "J",
      active: false
    };
    self.model.calls[0].groups[1].lessons[4] = {
      title: "V",
      active: true
    };
    self.model.calls[0].groups[1].lessons[5] = {
      title: "S",
      active: false
    };
    self.model.calls[0].groups[1].lessons[6] = {
      title: "D",
      active: true
    };

    self.model.providers = [{
      image: "http://www.cc-carrefour-petrer.com/wp-content/uploads/2015/09/Sprinter_600.jpg",
      link: "www.google.es"
    }, {
      image: "http://www.sprinter.es/images/landing3/cole_3.jpg",
      link: "www.google.es"
    }];

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
      self.markAsFavorite(self.model.main.favorited);
    };

    self.shareAction = function() {

    };

    self.commentAction = function() {
      $location.path('/details/'+self.activityId+'/comments');
    };

    self.registerAction = function() {
      $location.path("/register");
    };

    self.loadMenuEntries = function() {
      $log.info('Loading main menu entries');
      var menuEntries = [];
      menuEntries[0] = {
        'label': 'Inscripción',
        'icon': 'help',
        'callback': function() {
          $location.path("/register");
        }
      };
      menuEntries[1] = {
        'label': 'Compartir',
        'icon': 'share_arrow',
        'callback': function() {
          $log.info('Compartir called');
        }
      };
      menuEntries[2] = {
        'label': '¿Quiénes somos?',
        'icon': 'people',
        'callback': function() {
          $location.path("/about");
        }
      };

      $rootScope.$broadcast("TopMenu.changeEntries", menuEntries);
    };

    var loadMainCard = function(title, favorited, desc, image) {
      self.model.main.title = title;
      self.model.main.favorited = favorited;
      self.model.main.briefDescription = desc;
      self.model.main.image = image;
    };

    var loadGoals = function(goals) {
      self.model.goals = goals;
    };



    var loadGroups = function(call, groups) {
      $log.info(groups);
      for (var i = 0; i < groups.length; i++) {
        call.groups[i] = {};

        call.groups[i].title = groups[i].level;

        call.groups[i].time = groups[i].time;
        call.groups[i].lessons = [];

        var days = ["L", "M", "X", "J", "V", "S", "D"];
        var splittedDays = groups[i].days.split(' ');
        for (var j = 0; j < days.length; j++) {

          if ($.inArray(days[j], splittedDays) !== -1) {
            call.groups[i].lessons[j] = {
              title: days[j],
              active: true
            };
          } else {
            call.groups[i].lessons[j] = {
              title: days[j],
              active: false
            };
          }
        }
      }
    };

    var loadCalls = function(calls) {
      self.model.calls = [];
      for (var i = 0; i < calls.length; i++) {
        self.model.calls[i] = {};
        self.model.calls[i].beginsOn = calls[i].beginsOn;
        self.model.calls[i].endsOn = calls[i].endsOn;
        self.model.calls[i].regBeginsOn = calls[i].regBeginsOn;
        self.model.calls[i].regEndsOn = calls[i].regEndsOn;
        self.model.calls[i].groups = [];
        self.model.calls[i].index = i;
        self.model.calls[i].price = calls[i].price;


        loadGroups(self.model.calls[i], calls[i].groups);

      }

    };

    var loadScores = function(scores) {
      self.model.scores = scores;

      for (var i = 0; i < self.model.scores.length; i++) {
        self.model.scores[i].value = self.model.scores[i].value * 100;
      }
    };

    var loadKeywords = function(keywords) {
      self.model.keywords = keywords;
    };

    self.markAsFavorite = function(flag) {
      if (flag) {
          dataService.markAsFavorite(userCredentials.getUserId(), self.activityId, function(){}, function(){});
      } else {
          dataService.unmarkAsFavorite(userCredentials.getUserId(), self.activityId, function(){}, function(){});
      }
    }

    self.loadData = function(id) {
      dataService.findActivity(id,
        function(data) {
          var entity = JSON.parse(data.json);
          loadMainCard(entity.type, false, entity.description, 'images/' + entity.imageUrl);
          loadGoals(entity.goals);
          loadCalls(entity.calls);
          loadScores(entity.scores);
          loadKeywords(entity.keywords);
        },
        function() {
          $log.error("Cannot locate activity");
        }
      );

      dataService.isFavorited(userCredentials.getUserId(), id, function(data) {
          self.model.main.favorited = true;
        },
        function() {
          self.model.main.favorited = false;
        }
      );
    };
  }]).directive('backImg', function() {
    return function(scope, element, attrs) {
      attrs.$observe('backImg', function(value) {
        element.css({
          'background-image': 'url(' + value + ')',
          'background-size': 'cover'
        });
      });
    };
  });
