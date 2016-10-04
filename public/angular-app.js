angular.module('angularSPA', ['ngRoute', 'ngMaterial', 'ngCookies']);

AngularAppConfiguration.$inject = ['$routeProvider', '$locationProvider'];
angular.module('angularSPA').config(AngularAppConfiguration);

function AngularAppConfiguration($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/app/views/main.html',
            controller: 'mainController',
            controllerAs: 'vm',
            authRequired: true, 
            title: "Nodular Material"
        })
        .when('/login', {
            templateUrl: '/app/views/login.html',
            controller: 'loginController',
            controllerAs: 'vm', 
            title: "Log In"
        });

    //Remove the need for the '#' in the URL.
    $locationProvider.html5Mode(true);
}