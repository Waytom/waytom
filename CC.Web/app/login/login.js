(function () {
    'use strict';
    var controllerId = 'login';
    angular.module('app').controller(controllerId, ['common', '$location', 'authService', login]);

    function login(common, $location, authService) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.loginData = {
            userName: "",
            password: ""
        };
        vm.message = "";
        vm.title = 'login';

        activate();
  
        vm.login = function () {

            authService.login(vm.loginData).then(function (response) {

                $location.path('/video');

            },
             function (err) {
                 vm.message = err.error_description;
             });
        };

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated login View'); });
        }
    }
})();
