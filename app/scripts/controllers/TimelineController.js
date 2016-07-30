'use strict';
angular.module('workshopApp').controller('TimelineController', ['$scope','$firebaseArray',function ($scope,$firebaseArray) {


	// $add()
	// $save()
	// $remove()
	// $loaded()
	// $getRecord()

	var ref = firebase.database().ref().child('timeline').child('angularday');
    var listaFirebase = $firebaseArray(ref);

    init();


    function init()
    {
    	$scope.edicionEvento = false;
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

    $scope.guardar = function(titulo,contenido,color)
    {
    	var recordKey = $scope.eventoElegido.$id;
    	var editarEvento = $scope.listaTimeline.$getRecord(recordKey);


    	editarEvento.title = titulo;
    	editarEvento.content = contenido;
    	editarEvento.badgeClass = color;
    	// $scope.listaTimeline.$save(editarEvento)

    	$scope.listaTimeline.$save(editarEvento).then(function(snapshot){
    		console.log('Evento guardado: '+snapshot);
    	});
    }

    $scope.borrar = function()
    {
    	$scope.listaTimeline.$remove($scope.eventoElegido);
    	limpiarDatos();
    }


    $scope.editarEvento = function(evento)
    {
    	$scope.edicionEvento = true;
    	$scope.titulo = evento.title;
    	$scope.contenido = evento.content;
    	$scope.color = evento.badgeClass;

    	$scope.eventoElegido = evento; //Guardo la instacia al editar evento

    	console.log(evento);
    }

    $scope.cancelarEdicion = function()
    {
    	limpiarDatos();
    }

    function limpiarDatos()
    {
    	$scope.edicionEvento = false;
    	$scope.eventoElegido = null;
    	$scope.titulo = '';
    	$scope.contenido = '';
    	$scope.color = '';
    }


    
}]);
