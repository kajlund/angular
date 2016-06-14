(function () {
    'use strict';

    angular
        .module('app')
        .controller('AnotherController', AnotherController);

    // ---------------------------------------------------------

    AnotherController.$inject = [];
    function AnotherController () {
        /**
         * You can replace the injected $scope object by attaching view model
         * properties directly on the instantiated controller instance when you
         * use the controllerAs syntax.
         */
        this.name = 'Another';
    }
})();