'use strict';

angular.module('continuaApp').service('dataService', function($http) {
  delete $http.defaults.headers.common['X-Requested-With'];
  this.findAllActivities = function(callbackFunc, errorCallbackFunc) {
    $http({
      method: 'GET',
      url: 'http://continua-jtorregrosa.rhcloud.com/activity',
      params: 'size=100'
    }).success(function(data) {
      // With the data succesfully returned, call our callback
      callbackFunc(data);
    }).error(function() {
      errorCallbackFunc();
    });
  };

  this.findAllFavorites = function(userId, callbackFunc, errorCallbackFunc) {
    $http({
      method: 'GET',
      url: 'http://continua-jtorregrosa.rhcloud.com/user/' + userId + '/favorites',
      params: 'size=100'
    }).success(function(data) {
      // With the data succesfully returned, call our callback
      callbackFunc(data);
    }).error(function() {
      errorCallbackFunc();
    });
  };

  this.findActivity = function(id, callbackFunc, errorCallbackFunc) {
    $http({
      method: 'GET',
      url: 'http://continua-jtorregrosa.rhcloud.com/activity/' + id
    }).success(function(data) {
      // With the data succesfully returned, call our callback
      callbackFunc(data);
    }).error(function() {
      errorCallbackFunc();
    });
  };

  this.markAsFavorite = function(userId, activityId, callbackFunc, errorCallbackFunc) {
    $http({
        method: 'POST',
        url: 'http://continua-jtorregrosa.rhcloud.com/activity/' + activityId + '/favorites',
        headers: {
          'Content-Type': 'text/uri-list'
        },
        data: 'http://continua-jtorregrosa.rhcloud.com/user/' + userId
      })
      .success(function(data) {
        callbackFunc(data);
      }).error(function() {
        errorCallbackFunc();
      });
  };

  this.unmarkAsFavorite = function(userId, activityId, callbackFunc, errorCallbackFunc) {
    $http({
        method: 'DELETE',
        url: 'http://continua-jtorregrosa.rhcloud.com/activity/' + activityId + '/favorites/' + userId
      })
      .success(function(data) {
        callbackFunc(data);
      }).error(function() {
        errorCallbackFunc();
      });
  };

  this.isFavorited = function(userId, activityId, callbackFunc, errorCallbackFunc) {
    $http({
        method: 'GET',
        url: 'http://continua-jtorregrosa.rhcloud.com/activity/' + activityId + '/favorites/' + userId
      })
      .success(function(data) {
        callbackFunc(data);
      }).error(function() {
        errorCallbackFunc();
      });
  };

  this.createComment = function(userId, activityId, content, category, intensity, callbackFunc, errorCallbackFunc){
    $http({
        method: 'POST',
        url: 'http://continua-jtorregrosa.rhcloud.com/comment',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          content : content,
          category: category,
          intensity: intensity,
          author: 'http://continua-jtorregrosa.rhcloud.com/author/' + userId,
          activity: 'http://continua-jtorregrosa.rhcloud.com/activity/' + activityId
        }
      })
      .success(function(data) {
        callbackFunc(data);
      }).error(function() {
        errorCallbackFunc();
      });
  };

  this.createUser = function(userId, userImage, callbackFunc, errorCallbackFunc){
    $http({
        method: 'POST',
        url: 'http://continua-jtorregrosa.rhcloud.com/user',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          email: userId,
          image: userImage
        }
      })
      .success(function(data) {
        callbackFunc(data);
      }).error(function() {
        errorCallbackFunc();
      });
  };

  this.analyzeText = function(text, callbackFunc, errorCallbackFunc){
    $http({
        method: 'POST',
        url: 'http://sentiment-jtorregrosa.rhcloud.com/sentiment',
        headers: {
          'Content-Type': 'text/plain'
        },
        data: text
      })
      .success(function(data) {
        console.log(data);
        var categoryStr = data.scoreCategories[0].name;
        var intensity = data.scoreCategories[0].value;
        callbackFunc(categoryStr, intensity);
      }).error(function() {
        errorCallbackFunc();
      });
  };

  this.userExists = function(userId, callbackFunc) {
    $http({
        method: 'GET',
        url: 'http://continua-jtorregrosa.rhcloud.com/user/',
        params: 'size=10000'
      })
      .success(function(data) {
        // This can't be done again, bullshit here.
        var users = data._embedded.user;

        var found = false;
        var user = null;
        for(var i = 0; i < users.length; i++){
          if(users[i].email === userId){
            found = true;
            user = users[i];
            break;
          }
        }

        callbackFunc(found, user);
      });
  };

  this.findActivitySentiment = function(id, callbackFunc, errorCallbackFunc) {
    $http({
      method: 'GET',
      url: 'http://continua-jtorregrosa.rhcloud.com/activity/' + id + '/comments'
    }).success(function(data) {
      var comments = data._embedded.comment;

      var scores = [0.0,0.0,0.0];

      for(var i = 0; i < comments.length; i++){
        scores[comments[i].category] = scores[comments[i].category] + comments[i].intensity;
      }

      if(scores[0] > scores[1] && scores[0] + scores[2]){
        callbackFunc(0);
      }else if(scores[1] > scores[0] && scores[1] + scores[2]){
        callbackFunc(1);
      }else{
        callbackFunc(2);
      }

    }).error(function() {
      errorCallbackFunc();
    });
  };

  this.findActivityComments = function(id, callbackFunc, errorCallbackFunc) {
    $http({
      method: 'GET',
      url: 'http://continua-jtorregrosa.rhcloud.com/activity/' + id + '/comments'
    }).success(function(data) {
      // With the data succesfully returned, call our callback
      callbackFunc(data);
    }).error(function() {
      errorCallbackFunc();
    });
  };

  this.findCommentUser = function(id, callbackFunc, errorCallbackFunc,comment) {
    $http({
      method: 'GET',
      url: 'http://continua-jtorregrosa.rhcloud.com/comment/'+id+'/author'
    }).success(function(data) {
      // With the data succesfully returned, call our callback
      callbackFunc(data,comment);
    }).error(function() {
      errorCallbackFunc();
    });
  };

});
