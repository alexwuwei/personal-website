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
      summary: 'Seattle City Crime Mapping',
      description: 'Using Google Maps and Socrata/City of Seattle API\'s, SirenFinder dynamically displays recent crime data for the Seattle area. This project also leverages jQuery and HandlebarsJS for dynamic rendering, and uses mobile-first design principles to serve a uniform device-agnostic user experience.',
      image: 'http://lorempixel.com/400/220/nature/'
    },{
      name: 'Story Blocks',
      summary: 'News & Articles with a 3D UI',
      description: 'Using AngularJS and MongoDB for data persistence, Story Blocks connects to different API\'s and displays relevant news and articles through a unique 3D interface. This project leverages SASS/SCSS for a streamlined design.',
      image: 'http://lorempixel.com/400/220/nature/'
    },{
      name: 'Snap Gig',
      summary: 'REST backend for freelance platform',
      description: 'This is a custom, fully RESTful backend for a freelance collaboration platform targeted at both freelancers and business owners. Using custom authorization and social sharing middleware, users can post gigs, work submissions, and manage deadlines. Amazon AWS / S3 is leveraged as a persistence layer for relevant data.',
      image: 'http://lorempixel.com/400/220/nature/'
    }];


  }
