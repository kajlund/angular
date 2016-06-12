(function () {
    'use strict';

    /**
     * Fetch module by using the module getter (single argument).
     * then call module controller method to create a new controller.
     */
    angular
        .module('app')
        .controller('MainController', MainController);

    // ---------------------------------------------------------

    function MainController () {
    }
})();