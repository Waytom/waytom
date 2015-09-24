(function () {
    'use strict';
    var controllerId = 'profile';
    angular.module('app').controller(controllerId, ['common', profile]);

    function profile(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;

        vm.title = 'profile';

        activate();

        function activate() {
            common.activateController([], controllerId)
            .then(function () { log('Activated profile View'); });
        }
    }
})();