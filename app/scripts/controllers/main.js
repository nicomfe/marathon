(function(){
	'use strict';

	/**
	 * @ngdoc function
	 * @name marathonApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the marathonApp
	 */
	angular.module('marathonApp').controller('MainCtrl', function ($scope) {
	    jQuery(document).ready(function() {
	      /* Pop Video Box */
	      jQuery('.playVideoButton').fancybox({
	        'padding': 0,
	        'width': '100%',
	        'height': '100%',
	        'type': 'iframe'
	        });
	    });
	});

})();