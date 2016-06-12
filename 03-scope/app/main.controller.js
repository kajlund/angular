(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    // ---------------------------------------------------------

    function MainController ($scope) {
        /**
         * You bind controllers to views via a $scope object
         */
        $scope.name = 'LuKa';
        $scope.likes = ['Programming', 'Running'];
    }
})();