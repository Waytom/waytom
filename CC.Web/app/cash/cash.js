(function () {
    'use strict';
    var controllerId = 'cash';
    angular.module('app').controller(controllerId, ['common', cash]);

    function cash(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;

        vm.title = 'cash';

        activate();

        function activate() {
            common.activateController([], controllerId)
            .then(function () { log('Activated Cash View'); });
        }
    }
})();