(function () {
    'use strict';

    var serviceId = 'tasksService';
    angular.module('app').factory(serviceId, ['$http', 'authSettings', tasksService]);

    function tasksService($http, authSettings) {

        var serviceBase = authSettings.apiServiceBaseUri;
        var tasksServiceFactory = {};

        var _getTasks = function () {

            return $http.get(serviceBase + 'api/tasks').then(function (results) {
                return results;
            });
        };

        tasksServiceFactory.getTasks = _getTasks;

        return ordersServiceFactory;
    }
})();