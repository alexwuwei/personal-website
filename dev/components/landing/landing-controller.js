angular.module('LandingModule', [])
.controller('LandingController', [LandingController])
.directive('landingRender', function() {
  return {
    restrict: 'E',
    templateUrl: './landing-view.html'
  }
})
