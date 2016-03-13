'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:Community
 * @description
 * # AboutCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('MyActivitiesCtrl', ['$rootScope', '$log','userCredentials','dataService','$location', function($rootScope, $log, userCredentials, dataService, $location) {
    var self = this;

    self.model = [];

    self.loadFavorites = function(){
      dataService.findAllFavorites(userCredentials.getUserId(), function(data){
        var favs = data._embedded.activity;

        for(var i = 0; i < favs.length; i++){
          var entity = JSON.parse(favs[i].json);
          var entityUrl = favs[i]._links['self'].href;
          var splittedUrl = entityUrl.split('/');
          var id = splittedUrl[splittedUrl.length -1];

          var model = {
            id : id,
            title : entity.type,
            image : 'images/'+entity.imageUrl,
            year: entity.year
          };

          self.model.push(model);

        }
      }, function(){

      });
    }

    self.loadMenuEntries = function() {
      $log.info('Loading community menu entries');
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

    self.goToDetails = function(id){
      $location.path("/details/" + id);
    }
  }]);
