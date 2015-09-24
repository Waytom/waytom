(function () {
    'use strict';
    var controllerId = 'rules';
    angular.module('app').controller(controllerId, ['common', rules]);

    function rules(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;

        vm.title = 'rules';

        activate();

        function activate() {
            common.activateController([], controllerId)
            .then(function () { log('Activated rules View'); });
        }
    }
})();