(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    // ---------------------------------------------------------

    MainController.$inject = ['$log'];
    function MainController ($log) {
        /**
         *
         */

        this.movies = [{
            title: 'The Shawshank Redemption',
            year: '1994',
            popular: true,
            category: 'thriller'
        }, {
            title: 'Inception',
            year: '2010',
            popular: false,
            category: 'fantasy'
        }, {
            title: 'The Matrix',
            year: '1999',
            popular: true,
        }, {
            title: 'Saving Private Ryan',
            year: '1998',
            popular: true,
            category: 'action'
        }];
    }
})();