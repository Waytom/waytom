(function () {
    'use strict';
    var controllerId = 'catalog';
    angular.module('app').controller(controllerId, ['common', catalog]);

    function catalog(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;

        vm.title = 'catalog';

        activate();

        function activate() {
            common.activateController([], controllerId)
            .then(function () { log('Activated catalog View'); });
        }
    }
})();