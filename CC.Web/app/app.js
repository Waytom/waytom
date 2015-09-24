(function () {
    'use strict';
    
    var app = angular.module('app', [
        // Angular modules 
        'ngAnimate',        // animations
        'ngRoute',          // routing
        'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)

        // Custom modules 
        'common',           // common functions, logger, spinner
        'common.bootstrap', // bootstrap dialog wrapper functions

        // 3rd Party Modules
        'ui.bootstrap',      // ui-bootstrap (ex: carousel, pagination, dialog)

        'LocalStorageModule'
    ]);

    var serviceBase = 'http://localhost:61979/';
    app.constant('authSettings', {
        apiServiceBaseUri: serviceBase,
        clientId: 'authApp'
    });
    
    // Handle routing errors and success events
    app.run(['authService', '$route', function (authService, $route) {
        // Include $route to kick start the router.
        authService.fillAuthData();
        }]);        
})();