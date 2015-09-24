(function () {
    'use strict';
    var controllerId = 'home';
    angular.module('app').controller(controllerId, ['common', 'datacontext', home]);

    function home(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.news = {
            title: 'Waytom',
            description: 'Waytom is a SPA template for Angular developers.'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Home';

        activate();

        function activate() {
            var promises = [getMessageCount(), getPeople()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Home View'); });
        }

        function getMessageCount() {
            return datacontext.getMessageCount().then(function (data) {
                return vm.messageCount = data;
            });
        }

        function getPeople() {
            return datacontext.getPeople().then(function (data) {
                return vm.people = data;
            });
        }
    }
})();