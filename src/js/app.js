angular.module('lldtApp',
  [
    'lldtApp.services',
    'lldtApp.controllers',
    'lldtApp.directives',
    'lldtApp.filters',
    'ui.router',
    'ngRoute',
    'ui.bootstrap'
  ]
)

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('lldt', {
      url: '',
      abstract: true,
      views: {
        '@': {
          templateUrl: 'partials/lldt.html'
        },
        'nav@lldt': {
          templateUrl: 'partials/nav.html'
        }
      }
    })
    .state('lldt.home', {
      url: '/home',
      views: {
        content: {
          templateUrl: 'partials/home.html',
          controller: 'HomeController'
        }
      }
    })
    .state('lldt.doc', {
      url: '/doc',
      views: {
        content: {
          templateUrl: 'partials/doc.html',
          controller: 'DocController'
        }
      }
    })
    .state('lldt.format', {
      url: '/format',
      views: {
        content: {
          templateUrl: 'partials/format.html',
          controller: 'FormatController'
        }
      }
    });
    
  $urlRouterProvider.otherwise('/home');
}]);
