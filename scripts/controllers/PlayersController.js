'use strict';

angular.module('app.controllers').controller('PlayersController', ['$scope', 'server', 'calculator', '$q', function($scope, server, calculator, $q) {

	$scope.players = [];
	
	var playersPromise = server.get('../data/players.json');

    $q.all([playersPromise])
    	.then(function(results) {
    		var players = results[0].data.players;
    		players.forEach(function(player) {
				player.calculations = calculator.getCalculations(player.games);
    		});
    		$scope.players = players;
    		console.log($scope.players);
    	})
    	.catch(function(error) {
    		console.log('Error: ' + error);
    	});
}]);