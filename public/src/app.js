(function() {
  var app = angular.module('MysiteApp', ['ngRoute', 'n3-line-chart']);

  // controllers
  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('MysiteController', function() {
    this.projects = projects;
  });

  app.controller('SkillsController', function() {
    this.skills = skills;
  });

  app.controller('PageController', function() {
    this.page = 1;

    this.selectPage = function(setPage) {
      this.page = setPage;
    };
    this.isSelected = function(checkPage) {
      return this.page === checkPage;
    };
  });

  // directives
  app.directive('projectPage', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/project.html'
    };
  });

  app.directive('projectsPanel', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/projects-panel.html'
    };
  });

  app.directive('landingPage', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/landing-page.html'
    };
  });

  app.directive('skillsPage', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/skills-page.html'
    };
  });

  app.directive('aboutPage', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/about-page.html'
    };
  });

  app.directive('midPage', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/mid-page.html'
    };
  });

  // data
  var projects = [
    {
      name: 'Mise An App',
      languages: 'HTML, CSS, Javascript, Ruby, Rails, SQL, scraper',
      description: 'A recipe app that allows you to easily save and edit all your favorite recipes found online.',
      image: '../images/mise.png',
      id: 1,
    },
    {
      name: 'Attrition',
      languages: 'Three.js, Node.js, Javascript, CSS, Socket.io, Grunt.',
      description: '3-D, browser based game modeled on the RISK board game.',
      image: '../images/attrition.png',
      id: 2,
    },
    {
      name: 'UnderCover Indie',
      languages: 'HTM, CSS, Javascript, Ruby, Rails, SQL.',
      description: 'A video game social site that lets you rate, review and discover new games. ',
      image: '../images/indie.png',
      id: 3,
    },
    {
      name: 'MyTube',
      languages: 'HTML, CSS, JQuery, Javascript, CSS3Renderer, Three.js, Youtube API',
      description: 'Utilizes a youtube API coupled with a webGL CSS3 Renderer.',
      image: '../images/youtube.png',
      id: 4,
    },
  ];

  var skills = [
    {
      name: 'Javascript JQuery',
      level: '80%',
    },
    {
      name: 'Ruby',
      level: '80%',
    },
    {
      name: 'Rails',
      level: '70%',
    },
    {
      name: 'HTML/CSS',
      level: '90%',
    },
    {
      name: 'Node.js',
      level: '50%',
    },
    {
      name: 'Three.js',
      level: '50%',
    },
    {
      name: 'SQL',
      level: '70%',
    },
    {
      name: 'MongoDB',
      level: '40%',
    },
    {
      name: 'Python',
      level: '40%',
    },
    {
      name: 'Socket.io',
      level: '50%',
    },
    {
      name: 'Angular',
      level: '70%',
    },
  ];

})();