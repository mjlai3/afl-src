describe('PlayersController', function() {
	beforeEach(module('app'));

	var $scope;

	beforeEach(inject(function($controller){
		$scope = {};
		$controller('PlayersController', { $scope: $scope });
	}));

	describe('Execute command test', function() {		
		it('Execute a empty command', function() {
			console.log($scope.foo());
			expect(1).toEqual(1);
		});		
		it('Execute a empty 2', function() {
			expect(2).toEqual(2);
		});		
		it('Execute a empty 3', function() {
			expect(3).toEqual(3);
		});		
		it('Execute a empty 4', function() {
			expect(4).toEqual(4);
		});		
		it('Execute a empty 5', function() {
			expect(5).toEqual(5);
		});		
		it('Execute a empty 6', function() {
			expect(6).toEqual(6);
		});
	});

	describe('Execute command test', function() {		
		it('Execute a empty command', function() {
			expect(1).toEqual(1);
		});		
		it('Execute a empty 2', function() {
			expect(2).toEqual(2);
		});		
		it('Execute a empty 3', function() {
			expect(3).toEqual(3);
		});		
		it('Execute a empty 4', function() {
			expect(4).toEqual(4);
		});		
		it('Execute a empty 5', function() {
			expect(5).toEqual(5);
		});		
		it('Execute a empty 6', function() {
			expect(6).toEqual(6);
		});
	});
});