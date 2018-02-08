'use strict';

angular.module('app.directives')

.directive('statBox', function() {
	return {
		restrict: 'E',
		scope: {
			heading: '@',
			stats: '=',
			theme: '@',
			statType: '@'
		},
		templateUrl: '../views/statBox.html'
	}
});