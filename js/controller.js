angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
    })
    .controller('TreatmentsController', function($scope) {

    	$scope.nails = nails;
    	$scope.waxing = waxing;
    	$scope.eyes = eyes;
    	$scope.facials = facials;
    	$scope.massage = massage;
		$scope.threading = threading;

    });
