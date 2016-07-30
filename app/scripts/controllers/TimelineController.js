'use strict';
angular.module('workshopApp').controller('TimelineController', ['$scope','$firebaseArray',function ($scope,$firebaseArray) {
	$scope.events = [{
	    badgeClass: 'info',
	    badgeIconClass: 'glyphicon-check',
	    title: 'First heading',
	    content: 'Some awesome content.'
	  }, {
	    badgeClass: 'warning',
	    badgeIconClass: 'glyphicon-credit-card',
	    title: 'Second heading',
	    content: 'More awesome content.'
	  }];
    
}]);
