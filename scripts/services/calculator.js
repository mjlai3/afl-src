'use strict';

angular.module('app.services').factory('calculator', ['$http', function($http) {

    return {
        /**
         * Calculates the sum of an array.
         * 
         * @public 
         * @param {Array.<number>} array The array of numbers to be summed.
         * @returns {number} Returns the sum.
         */
        getSum: function(array) {
            var sum = 0;
            array.forEach(function(value) {
                sum += value;
            });
            return sum;
        },

        /**
         * Calculates the average of an array.
         * 
         * @public 
         * @param {Array.<number>} array The array of numbers to be averaged.
         * @returns {number} Returns the average.
         */
        getAverage: function(array) {
            return this.getSum(array) / array.length;
        },

        /**
         * Calculates the largest number of an array.
         * 
         * @public 
         * @param {Array.<number>} array The array of numbers to test.
         * @returns {number} Returns the largest number.
         */
        getMax: function(array) {
            return array.reduce(function(a, b) {
                return Math.max(a, b);
            });
        }
    };

}]);