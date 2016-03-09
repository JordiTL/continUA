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
    var yoga = {};
    yoga.title = "Yoga";
    yoga.image = "http://www.belgranoathletic.club/wp-content/uploads/2014/07/yoga.jpg";
    var fencing = {};
    fencing.title = "Esgrima";
    fencing.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Final_Trophee_Monal_2012_n08.jpg/300px-Final_Trophee_Monal_2012_n08.jpg";
    var soccer = {};
    soccer.title = "Esgrima";
    soccer.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Final_Trophee_Monal_2012_n08.jpg/300px-Final_Trophee_Monal_2012_n08.jpg";
    self.activities = [];
    self.activities.push(yoga);
    self.activities.push(fencing);
    self.activities.push(soccer);
    self.filter = '';
  }]);
