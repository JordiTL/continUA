'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('MainCtrl', ['$rootScope', '$log', 'broadcastService', '$location', function($rootScope, $log, sharedService, $location) {

    var self = this;
    var yoga = {};
    yoga.id = 1;
    yoga.title = "Yoga";
    yoga.image = "http://www.belgranoathletic.club/wp-content/uploads/2014/07/yoga.jpg";
    var fencing = {};
    fencing.id=2;
    fencing.title = "Esgrima";
    fencing.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Final_Trophee_Monal_2012_n08.jpg/300px-Final_Trophee_Monal_2012_n08.jpg";
    var soccer = {};
    soccer.id = 3;
    soccer.title = "Soccer";
    soccer.image = "http://2.bp.blogspot.com/-_4kGDSw--9s/VpVQg35h4SI/AAAAAAAAdiY/J4b99_wcHC0/s1600/Screen%2BShot%2B2016-01-12%2Bat%2B2.12.36%2BPM.png";
    self.activities = [];
    self.activities.push(yoga);
    self.activities.push(fencing);
    self.activities.push(soccer);
    self.filter = '';

    self.showNavBar = function() {
      sharedService.showNavBar();
    };

    self.showDetailView = function(activityID) {
      //console.log(activityID);
      $location.path('/details/' + activityID);
    };

    $rootScope.$on('Search', function() {
      self.filter = sharedService.message;
    });
  }]);
