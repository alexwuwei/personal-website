angular.module('RouteModule',
[require('angular-route')])
.config(['$routeProvider', function(route) {
  route
    .when('/landing', {
      templateUrl:'./landing-view.html'
    })
    .when('/projects', {
      templateUrl:'./projects-view.html'
    })
    .when('/about', {
      templateUrl:'./about-view.html'
    })
    .when('/contact', {
      templateUrl:'./contact-view.html'
    })
}])
