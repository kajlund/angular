(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    // ---------------------------------------------------------

    MainController.$inject = [];
    function MainController () {
        /**
         * You can replace the injected $scope object by attaching view model
         * properties directly on the instantiated controller instance when you
         * use the controllerAs syntax.
         */
        this.name = 'LuKa';
    }
})();