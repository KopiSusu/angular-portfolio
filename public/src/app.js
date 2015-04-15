(function() {
  var app = angular.module('MysiteApp', ['ngRoute', 'n3-line-chart']);
  var page = 1;

  // controllers
  // app.controller('PanelController', function() {
  //   this.tab = 1;

  //   this.selectTab = function(setTab) {
  //     this.tab = setTab;
  //   };
  //   this.isSelected = function(checkTab) {
  //     return this.tab === checkTab;
  //   };
  // });

  app.controller('PanelController', function($scope, $timeout) {
    $scope.tab = 1;
    this.projects = projects
  
    var countUp = function() {
      if ($scope.tab >= 6) {
        $scope.tab = 1;
        $timeout(countUp, 4000);
      } else {
        $scope.tab += 1;
        $timeout(countUp, 4000);
      }
    }

    $timeout(countUp, 3500);
    

    this.selectTab = function(setTab) {
      $scope.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return $scope.tab === checkTab;
    };
  });

  app.controller('MysiteController', function() {
    this.projects = projects;
  });

  app.controller('SkillsController', function() {
    this.skills = skills;
  });

  app.controller('PageController', function() {

    this.selectPage = function(setPage) {
      page = setPage;
    };
    this.isSelected = function(checkPage) {
      return page === checkPage;
    };
  });

  app.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    $scope.gotoPortfolio = function() {
      var old = $location.hash();
      page = 2;
      setTimeout(function(){
        $location.hash('portfolio');
        $anchorScroll();
        $location.hash(old);
      }, 50);
    };
    $scope.gotoAbout = function() {
      var old = $location.hash();
      page = 1;
      setTimeout(function(){
        $location.hash('about');
        $anchorScroll();
        $location.hash(old);
      }, 50);
    };
    $scope.gotoSkills = function() {
      var old = $location.hash();
      $location.hash('skills');
      $anchorScroll();
      $location.hash(old);
    };
  }]);

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
      url: 'http://104.131.0.242:8080/',
      id: 1,
    },
    {
      name: 'Attrition',
      languages: 'Three.js, Node.js, Javascript, CSS, Socket.io, Grunt.',
      description: '3-D, browser based game modeled on the RISK board game.',
      image: '../images/attrition.png',
      url: 'http://104.131.86.28:3000/',
      id: 2,
    },
    {
      name: 'UnderCover Indie',
      languages: 'HTM, CSS, Javascript, Ruby, Rails, SQL.',
      description: 'A video game social site that lets you rate, review and discover new games. ',
      image: '../images/indie.png',
      url: 'http://104.131.90.102:8080/',
      id: 3,
    },
    {
      name: 'MyTube',
      languages: 'HTML, CSS, JQuery, Javascript, CSS3Renderer, Three.js, Youtube API',
      description: 'Utilizes a youtube API coupled with a webGL CSS3 Renderer.',
      image: '../images/youtube.png',
      url: 'http://kopisusu.github.io/mytube/',
      id: 4,
    },
    {
      name: 'WorldGDP',
      languages: 'Three.js, Canvas, HTML/CSS, Javascript, Tween.js',
      description: 'World GDP Mapped out on Three.js globe',
      image: '../images/GDP.png',
      url: 'http://kopisusu.github.io/World-GDP/',
      id: 5,
    },
    {
      name: 'Goblin Hunter',
      languages: 'Three.js, Canvas, HTML/CSS, Javascript',
      description: 'A webGL/Three.js based browser game. Catch as many goblins as you can',
      image: '../images/hunter.png',
      url: 'http://kopisusu.github.io/Hunter/',
      id: 6,
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
      level: '50%',
    },
  ];

})();