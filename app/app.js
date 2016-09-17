'use strict';

// Declare app level module which depends on views, and components
angular.module('libraryApp', ['ui.router', 'ngResource'])
  .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
    function($locationProvider, $stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home',
        {
          url: '/home',
          controller: 'homeController',
          templateUrl: 'views/home.html'
        })
        .state('search',
        {
          url: '/search?q',
          controller: 'searchCntrl',
          templateUrl: 'views/search.html'
        })
        .state('edit',
        {
          url: '/edit/{id}',
          controller: 'editController',
          templateUrl: 'views/edit.html'
        });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
}]);
