'use strict';

/**
 * @ngdoc function
 * @name marathonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the marathonApp
 */
angular.module('marathonApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
