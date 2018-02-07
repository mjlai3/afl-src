'use strict';

angular.module('app.controllers').controller('PlayersController', ['$scope', 'server', '$q', function($scope, server, $q) {

	$scope.players = [];
	
	var playersPromise = server.get('../data/players.json');

    $q.all([playersPromise])
    	.then(function(results) {
    		var players = results[0].data.players;
    		$scope.players = players;
    		console.log($scope.players);
    	})
    	.catch(function() {
    		console.log('Error fetching data.');
    	});

    var games = [
	        { "round": 1, "kicks": 7, "handballs": 5, "marks": 7, "tackles": 3, "score": 0.1 },
	        { "round": 2, "kicks": 12, "handballs": 8, "marks": 5, "tackles": 1, "score": 3.0 },
	        { "round": 3, "kicks": 5, "handballs": 12, "marks": 3, "tackles": 2, "score": 2.2 },
	        { "round": 5, "kicks": 13, "handballs": 9, "marks": 5, "tackles": 3, "score": 4.1 },
	        { "round": 7, "kicks": 8, "handballs": 4, "marks": 4, "tackles": 4, "score": 4.0 },
	        { "round": 8, "kicks": 12, "handballs": 10, "marks": 3, "tackles": 1, "score": 2.1 },
	        { "round": 9, "kicks": 19, "handballs": 11, "marks": 4, "tackles": 0, "score": 1.0 },
	        { "round": 11, "kicks": 20, "handballs": 9, "marks": 7, "tackles": 0, "score": 0.4 },
	        { "round": 13, "kicks": 9, "handballs": 8, "marks": 3, "tackles": 3, "score": 0.1 },
	        { "round": 14, "kicks": 8, "handballs": 2, "marks": 4, "tackles": 5, "score": 2.2 },
	        { "round": 15, "kicks": 12, "handballs": 5, "marks": 7, "tackles": 7, "score": 1.4 },
	        { "round": 16, "kicks": 14, "handballs": 7, "marks": 8, "tackles": 5, "score": 4.3 },
	        { "round": 17, "kicks": 2, "handballs": 12, "marks": 3, "tackles": 3, "score": 2.1 },
	        { "round": 18, "kicks": 7, "handballs": 14, "marks": 0, "tackles": 2, "score": 3.1 },
	        { "round": 19, "kicks": 22, "handballs": 10, "marks": 5, "tackles": 3, "score": 1.3 },
	        { "round": 20, "kicks": 14, "handballs": 12, "marks": 8, "tackles": 1, "score": 1.6 }
	    ];

 //    var foo = function(arr) {
	// 	arr.forEach(function(el) {
	// 		var key = el.id;
	// 		obj[key] = obj[key] || { count: 0, total: 0, avg: 0 };
	// 		obj[key].count++;
	// 		obj[key].total += el.val;
	// 		obj[key].avg = obj[key].total / obj[key].count;
	// 	});
	// }

	var obj = {};

	games.forEach(function(game) {
		for (var stat in game) {
			if (obj.hasOwnProperty(stat)) {
				obj[stat].push(game[stat]);
			} else {
				obj[stat] = [game[stat]];
			}
		}
	});

	console.log(obj);

	var calcs = {};

	for (var stat in obj) {
		console.log(obj[stat]);
	}

}]);