angular.module('ProjectModule', [])
  .controller('ProjectController', [ProjectController]);

  /////////////////////////////
  // defines controller
  ////////////////////////////

  function ProjectController() {
    this.projects[{
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
