'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('CommentsCtrl', ['$rootScope','$routeParams', '$mdToast', '$log', '$mdDialog', 'dataService','userCredentials', function($rootScope, $routeParams, $mdToast, $log, $mdDialog, dataService, userCredentials) {
    var self = this;
    self.activityId = $routeParams.activityID;

    self.model = {};
    self.model.main = {};
    self.model.main.title = "Comentarios de los usuarios";
    self.model.main.favorited = false;
    self.model.main.briefDescription = "¿Qué es el yoga? Esta suele ser la primera pregunta que se hace la gente que quiere empezar a practicar el yoga para conseguir todos los beneficios del yoga. El yoga es una disciplina, más que un deporte, porque no trata solo de cultivar el cuerpo, sino también la mente, y el alma. El yoga nació en la India y es una práctica de meditación muy común en el hinduismo.";
    self.model.main.image = "http://www.belgranoathletic.club/wp-content/uploads/2014/07/yoga.jpg";
    self.commentsList = [];
    /*self.commentsList = [
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
    ];*/

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

    var loadMainCard = function(title, favorited, desc, image) {
      self.model.main.title = title;
      self.model.main.favorited = favorited;
      self.model.main.briefDescription = desc;
      self.model.main.image = image;
    };


    self.loadData = function(id) {
      console.log('loaded ' + id);
      dataService.findActivity(id,
        function(data) {
          console.log(data);
          var entity = JSON.parse(data.json);
          console.log(entity.imageUrl);
          loadMainCard(entity.type, false, entity.description, 'images/' + entity.imageUrl);
        },
        function() {
          $log.error("Cannot locate activity");
        }
      );
    };

    self.loadDataComments = function(id) {
      dataService.findActivityComments(id,
        function(data) {
          var comments = data._embedded.comment;
          comments.forEach(function(a) {
            var linkSplitted = a._links['self'].href.split('/');
            var id = linkSplitted[linkSplitted.length - 1];

            var comment = {
              id: id,
              content: a.content,
              createdAt: a.createdAt,
              userEmail: '',
              userImage: ''
            };
            self.commentsList.push(comment);
            // Hack realizado para actualizar el comentario de forma asincrona
            // y asi que se muestre la imagen del usuario del comentario.
            dataService.findCommentUser(id,function(data,comment){
              console.log(data);
              console.log('comment dentro: ' + comment)
              comment.userEmail = data.content.email;
              comment.userImage = data.content.image;
            },function(){},comment);

          });
        },
        function() {
          $log.error("Cannot locate comments");
        }
      );
    };

    self.showPrompt = function(ev) {
      console.log('asd');
      console.log($mdDialog);
      var confirm = $mdDialog.prompt()
          .title('¿Qué opinas de esta actividad?')
          .textContent('Comunica al resto de la comunidad tu opinión sobre esta actividad.')
          .placeholder('Comentario')
          .ariaLabel('Comentario')
          .clickOutsideToClose(true)
          .targetEvent(ev)
          .ok('Enviar!')
          .cancel('Cancelar');
      $mdDialog.show(confirm).then(function(result) {
        var userId = userCredentials.getUserId();
        var activityId = self.activityId;
        var content = result;

        dataService.analyzeText(content, function(categoryStr, intensity){
          var category = 0;

          if(categoryStr === 'positive'){
            category = 1;
          }else if(categoryStr === 'negative'){
            category = 2;
          }
          dataService.createComment(userId, activityId, content, category, intensity, function(){
            self.commentsList = [];
            self.loadDataComments(self.activityId);
          }, function(){

          });
        }, function(){

        });
      }, function() {
        //Se cancela la introducción de comentarioYAR

      });
    };

  }]);
