(function () {
    'use strict';

    var controllerId = 'topnav';
    angular.module('app').controller(controllerId,
        ['$route', '$location', 'routes', 'authService', topnav]);

    function topnav($route, $location, routes, authService) {
        var vm = this;

        vm.authentication = authService.authentication;

        vm.isCurrent = isCurrent;
       
        vm.logOut = function (r) {
            if (r == 3) {
                return authService.logOut();
            }
        }

        activate();

        function activate() { getNavRoutes(); }

        function getNavRoutes() {
            vm.navRoutes = routes.filter(function (r) {
                return r.config.settings.nav && r.config.settings.topnav;
            }).sort(function (r1, r2) {
                return r1.config.settings.nav - r2.config.settings.nav;
            });
        }

        function isCurrent(route) {
            if (!route.config.title || !$route.current || !$route.current.title) {
                return '';
            }
            var menuName = route.config.title;
            return $route.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
        }
    };
})();
