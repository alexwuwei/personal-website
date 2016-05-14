angular.module('ProjectModule', [])
  .controller('ProjectController', [ProjectController])
  .directive('projectRender', function() {
    return {
      restrict: 'E',
      templateUrl: './projects-view.html'
    }
  });

  /////////////////////////////
  // defines controller
  ////////////////////////////

  function ProjectController() {
    this.projects = [{
      name: 'SirenFinder',
      summary: 'some summary',
      description: 'some description',
      image: 'img/'
    },{
      name: 'SirenFinder',
      summary: 'some summary',
      description: 'some description',
      image: 'img/'
    },{
      name: 'SirenFinder',
      summary: 'some summary',
      description: 'some description',
      image: 'img/'
    }];


  }
