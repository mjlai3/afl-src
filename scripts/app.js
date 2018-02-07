"use strict";

angular.module("players", ["app.services"])

angular.module("app.services", []);

angular.module("app.services").factory('server', ['$http', function($http) {

    return {
        /**
         * Performs a get request to the specified location.
         * 
         * @public 
         * @param {string} url The path to obtain data from.
         * @returns {Promise} returns a promise.
         */
        get: function(url) {
            return $http({
                method: 'GET',
                url: url
            });
        }
    };

}]);

angular.module('players').controller('PlayersController', ['$scope', 'server', '$q', function($scope, server, $q) {
	
	var foo = server.get('../data/players.json');
	console.log(foo);
    $q.all([foo])
    	.then(function() {
    		console.log(results);
    	})
    	.catch(function() {

    	});
}]);