angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
		$scope.myInterval = 4000;
		$scope.noWrapSlides = false;
		$scope.active = 0;
  
	      // My slides
      	$scope.slides = [
	        {
	          image: "img/muk4.png",
	          text: "Test Text",
	          id: 0
	        },
	        {
	          image: "img/muk1.jpg",
	          text: "",
	          id: 1
	        },
	        {
	          image: "img/muk1.jpg",
	          // text: "c",
	          id: 2
	        },
      	];
    });
