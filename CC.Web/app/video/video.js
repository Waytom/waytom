(function () {
    'use strict';
    var controllerId = 'video';
    angular.module('app').controller(controllerId, ['common', video]);

    function video(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
       
        vm.title = 'video';

        activate();

        function activate() {
                common.activateController([], controllerId)
                .then(function () { log('Activated Video View'); });
        }
    }
})();