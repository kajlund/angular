(function () {
    'use strict';
    
    angular
        .module('app', []);
    
    /**
     * Fetch module by using the module getter (single argument).
     * then call module controller method to create a new controller.
     */
    angular
        .module('app')
        .controller('MainController', MainController);
    
    // ----------------------------------------------------------------------

    MainController.$inject = ['$log']; // Inject dependencies to handle minification
    function MainController ($log) {
    
    }
})();