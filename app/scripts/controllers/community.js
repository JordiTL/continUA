'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:Community
 * @description
 * # AboutCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('CommunityCtrl', ['$rootScope', '$log', function($rootScope, $log) {
    var self = this;

    self.model = [];

    var yoga = {};
    yoga.id = 1;
    yoga.location = "Pabellón pista central";
    yoga.title = "Yoga";
    yoga.image = "http://www.belgranoathletic.club/wp-content/uploads/2014/07/yoga.jpg";
    yoga.date = new Date();
    yoga.people = 3;
    yoga.like = true;
    var fencing = {};
    fencing.id = 2;
    fencing.location = "Sala de esgrima";
    fencing.title = "Esgrima";
    fencing.date = new Date();
    fencing.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Final_Trophee_Monal_2012_n08.jpg/300px-Final_Trophee_Monal_2012_n08.jpg";
    fencing.people = 2;
    fencing.like = false;
    var soccer = {};
    soccer.id = 3;
    soccer.location = "Pista semicubierta futbol sala";
    soccer.title = "Futbol";
    soccer.date = new Date();
    soccer.image = "http://2.bp.blogspot.com/-_4kGDSw--9s/VpVQg35h4SI/AAAAAAAAdiY/J4b99_wcHC0/s1600/Screen%2BShot%2B2016-01-12%2Bat%2B2.12.36%2BPM.png";
    soccer.people = 13;
    soccer.like = true;
    self.model.push(yoga);
    self.model.push(fencing);
    self.model.push(soccer);

    self.addPeople = function(index) {
      if (self.model[index].like) {
        self.model[index].people++;
      } else {
        self.model[index].people--;
      }
    };


  }]);
