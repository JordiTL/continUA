'use strict';

/**
 * @ngdoc function
 * @name continuaApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the continuaApp
 */
angular.module('continuaApp')
  .controller('LoginCtrl', ['$rootScope', '$log', 'broadcastService', '$location', 'GooglePlus', 'userCredentials', 'dataService', function($rootScope, $log, sharedService, $location, GooglePlus, userCredentials, dataService) {

    var self = this;

    self.login = function() {
      self.authExternalProvider();
    };

    self.hideNavBar = function() {
      sharedService.hideNavBar();
    };

    self.authExternalProvider = function() {
      GooglePlus.login().then(function(authResult) {
        console.log(authResult);

        if (authResult.status.google_logged_in) {
          GooglePlus.getUser().then(function(user) {
            console.log(user);
            userCredentials.setUser(user);

            dataService.userExists(user.id, function(exists, existentUser) {
              if (!exists) {
                dataService.createUser(user.id, user.picture, function(data) {
                    var createdUser = data;
                    var userUrl = createdUser._links['self'].href;
                    var userUrlSplited = userUrl.split('/');
                    var id = userUrlSplited[userUrlSplited.length - 1];

                    $log.info('New user internal id: ' + id);
                    userCredentials.setUserId(id);
                  },
                  function() {
                    $log.error('Cannot create user');
                  })
              } else {
                var userUrl = existentUser._links['self'].href;
                var userUrlSplited = userUrl.split('/');
                var id = userUrlSplited[userUrlSplited.length - 1];

                userCredentials.setUserId(id);
                $log.info('Existent user internal id: ' + id);
              }
            });

            sharedService.notifyLogin();
            $location.path('/main');
          });
        }

      }, function(err) {
        console.log(err);
      });
    };
  }]);
