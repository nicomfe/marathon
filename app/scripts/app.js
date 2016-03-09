'use strict';

/**
 * @ngdoc overview
 * @name marathonApp
 * @description
 * # marathonApp
 *
 * Main module of the application.
 */
angular
  .module('marathonApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
