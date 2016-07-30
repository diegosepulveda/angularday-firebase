'use strict';

/**
 * @ngdoc overview
 * @name workshopApp
 * @description
 * # workshopApp
 *
 * Main module of the application.
 */
angular.module('workshopApp', ['angular-timeline','firebase','ui.router']).run(['$state',function($state){
	var config = {
    apiKey: "AIzaSyBovdIhXG4cmJHB4ELIejs8ZMZC7fOC32Y",
    authDomain: "timeline-f8a7e.firebaseapp.com",
    databaseURL: "https://timeline-f8a7e.firebaseio.com",
    storageBucket: "timeline-f8a7e.appspot.com",
  };
  firebase.initializeApp(config);

  $state.go('home');
}]);

angular.module('workshopApp').config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider){

   $urlRouterProvider.otherwise("/");


  $stateProvider.state('home', {
      url: '/',
      views: {
         'navbar': {
            templateUrl: 'views/navbar.html',
            controller: 'NavbarController'
         },
         'principal': {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
         }
      },
      params: {},
      data: {
         
      }
   });

	$stateProvider.state('quickstart', {
	      url: '/quickstart',
	      views: {
	         'navbar': {
	            templateUrl: 'views/navbar.html',
	            controller: 'NavbarController'
	         },
	         'principal': {
	            templateUrl: 'views/quickstart.html',
	            controller: 'QuickstartController'
	         }
	      },
	      params: {},
	      data: {
	         
	      }
   });
	$stateProvider.state('timeline', {
	      url: '/timeline',
	      views: {
	         'navbar': {
	            templateUrl: 'views/navbar.html',
	            controller: 'NavbarController'
	         },
	         'principal': {
	            templateUrl: 'views/timeline.html',
	            controller: 'TimelineController'
	         }
	      },
	      params: {},
	      data: {
	         
	      }
   });
	$stateProvider.state('autenticacion', {
	      url: '/autenticacion',
	      views: {
	         'navbar': {
	            templateUrl: 'views/navbar.html',
	            controller: 'NavbarController'
	         },
	         'principal': {
	            templateUrl: 'views/autenticacion.html',
	            controller: 'AuthController'
	         }
	      },
	      params: {},
	      data: {
	         
	      }
   });
}]);