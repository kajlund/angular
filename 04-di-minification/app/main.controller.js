(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    // ---------------------------------------------------------

    MainController.$inject = ['$scope'];
    function MainController (a) {
        /**
         * You bind controllers to views via a $scope object.
         * Angular provides us with the $scope object via dependency injection.
         * The controller params here are declared as they might look after
         * minification. Everything still works because if the $inject property.
         */
        a.name = 'LuKa';
        a.likes = ['Programming', 'Running'];
    }
})();