'use strict';
angular.module('workshopApp').controller('TimelineController', ['$scope','$firebaseArray',function ($scope,$firebaseArray) {


	// $add()
	// $save()
	// $remove()
	// $loaded()
	// $getRecordKey()

	var ref = firebase.database().ref().child('timeline').child('angularday');
    var listaFirebase = $firebaseArray(ref);

    init();


    function init()
    {
    	listaFirebase.$loaded(function(data){
    		console.log(data);
    	});

    	$scope.listaTimeline = listaFirebase;
    }



    $scope.crear = function(titulo,contenido,color)
    {
    	$scope.listaTimeline.$add({
    		badgeClass: color,
		    badgeIconClass: 'glyphicon-check',
		    title: titulo,
		    content: contenido
    	});
    }



    
}]);
