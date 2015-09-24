(function () {
    'use strict';

    var serviceId = 'authInterceptorService';
    angular.module('app').factory(serviceId, ['common', '$location', 'localStorageService', authInterceptorService]);

    function authInterceptorService(common, $location, localStorageService) {
        var $q = common.$q;
        var authInterceptorServiceFactory = {};

        var _request = function (config) {

            config.headers = config.headers || {};

            var authData = localStorageService.get('authorizationData');

            if (authData) {
                config.headers.Authorization = 'Bearer ' + authData.token;
            }

            return config;

        }

        var _responseError = function (rejection) {
            if (rejection.status === 401) {
                $location.path('/login');
            }
            return $q.reject(rejection);
        }

        authInterceptorServiceFactory.request = _request;
        authInterceptorServiceFactory.responseError = _responseError;

        return authInterceptorServiceFactory;
    }
})();