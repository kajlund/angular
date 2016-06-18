(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    // ---------------------------------------------------------

    MainController.$inject = ['$log'];
    function MainController ($log) {
        /**
         * The ng-repeat is Angular's way of doing a forEach on an iterable.
         * 
         *
         */
        this.things = [1, 2, 3, 4, 5];

        this.movies = [{
            title: 'The Shawshank Redemption',
            year: '1994',
            popular: true
        }, {
            title: 'Inception',
            year: '2010',
            popular: false
        }, {
            title: 'The Matrix',
            year: '1999',
            popular: true
        }, {
            title: 'Saving Private Ryan',
            year: '1998',
            popular: true
        }];

        this.things.forEach(function (thing, index) {
            $log.debug(thing, index);
        });

    }
})();