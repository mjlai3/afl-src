'use strict';

angular.module('app.controllers').controller('PlayersController', ['$scope', 'server', '$q', function($scope, server, $q) {
	
	var foo = server.get('../data/players.json');
    $q.all([foo])
    	.then(function(results) {
    		var players = results[0].data.players;
    		console.log(players);
    	})
    	.catch(function() {
    		console.log('Error fetching data.');
    	});
}]);