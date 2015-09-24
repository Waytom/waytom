(function () {
    'use strict';
    var controllerId = 'signup';
    angular.module('app').controller(controllerId, ['common', '$location', 'authService', signup]);

    function signup(common, $location, authService) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        var $timeout = common.$timeout;

        var vm = this;
        vm.savedSuccessfully = false;
        vm.message = "";
        vm.registration = {
            userName: "",
            password: "",
            confirmPassword: ""
        };
        vm.title = 'signup';

        activate();

        vm.signUp = function () {

            authService.saveRegistration(vm.registration).then(function (response) {

                vm.savedSuccessfully = true;
                vm.message = "Пользователь успешно зарегистрирован, вы будите перенаправлены на страницу авторизации через 2 секунды...";
                startTimer();
            },
             function (response) {
                 var errors = [];
                 for (var key in response.data.modelState) {
                     for (var i = 0; i < response.data.modelState[key].length; i++) {
                         errors.push(response.data.modelState[key][i]);
                     }
                 }
                 vm.message = "Не удалось зарегистрировать пользователя: " + errors.join(' ');
             });
        };

        var startTimer = function () {
            var timer = $timeout(function () {
                $timeout.cancel(timer);
                $location.path('/login');
            }, 2000);
        }

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated signup View'); });
        }
    }
})();
