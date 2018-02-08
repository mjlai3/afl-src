'use strict';

angular.module('app.controllers').controller('PlayersController', ['$scope', 'server', 'calculator', '$q', function($scope, server, calculator, $q) {

	$scope.players = [];
    
    $q.all([$scope.callServer('../data/players.json')])
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

    $scope.callServer = function(url) {
        return server.get(url);
    }

    $scope.getTeamClass = function(team) {
        return 'team--' + team.toLowerCase().replace(' ', '-');
    }
}]);