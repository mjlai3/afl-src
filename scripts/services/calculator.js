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
        },

        /**
         * Calculates the tals, averages and season bests
         * for handballs, kicks, marks, score and tackles.
         * 
         * @public 
         * @param {Array} array The array of games to generate calculations for.
         * @returns {Object} Returns an object with calculations of totals, averages and season bests.
         */
        getCalculations: function(games) {
            var obj = {};

            games.forEach(function(game) {
                for (var stat in game) {
                    if (stat !== 'round') {
                        if (obj.hasOwnProperty(stat)) {
                            obj[stat]['record'].push(game[stat]);
                        } else {
                            obj[stat] = {record: [game[stat]]};
                        }
                    }
                }
            });

            for (var stat in obj) {
                var array = obj[stat]['record'];
                obj[stat].average = this.getAverage(array);
                obj[stat].total = this.getSum(array);
                obj[stat].best = this.getMax(array);
            }

            console.log(obj);
            return obj;
        }
    };

}]);

    