angular.module('SiteApp', ['ngRoute', 'RouteControllers']);
 
angular.module('SiteApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });
});
