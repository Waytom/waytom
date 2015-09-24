(function () {
    'use strict';
    var controllerId = 'news';
    angular.module('app').controller(controllerId, ['common', news]);

    function news(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;

        vm.title = 'news';

        activate();

        function activate() {
            common.activateController([], controllerId)
            .then(function () { log('Activated news View'); });
        }
    }
})();