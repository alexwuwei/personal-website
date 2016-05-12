angular.module('ProjectModule', [])
  .controller('ProjectController', [ProjectController]);

  /////////////////////////////
  // defines controller
  ////////////////////////////

  function ProjectController() {
    this.projects[{
      name: 'SirenFinder',
      summary: 'some summary',
      description: 'some description'
    },{
      name: 'SirenFinder',
      summary: 'some summary',
      description: 'some description'
    },{
      name: 'SirenFinder',
      summary: 'some summary',
      description: 'some description'
    }];


  }
