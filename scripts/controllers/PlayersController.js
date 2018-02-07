'use strict';

angular.module('app.controllers').controller('PlayersController', ['$scope', 'server', '$q', function($scope, server, $q) {

	$scope.players = [];
	
	var foo = server.get('../data/players.json');
    $q.all([foo])
    	.then(function(results) {
    		var players = results[0].data.players;
    		$scope.players = players;
    		console.log($scope.players);
    	})
    	.catch(function() {
    		console.log('Error fetching data.');
    	});
}]);