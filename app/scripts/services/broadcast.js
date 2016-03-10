'use strict';

angular.factory('broadcastService', function ($rootScope) {
    var sharedService = {};

    sharedService.message = '';

    sharedService.search = function (msg) {
        this.message = msg;
        this.broadcastItem("Search");
    };

    sharedService.broadcastItem = function (event) {
        $rootScope.$broadcast(event);
    };

    return sharedService;
});
