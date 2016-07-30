'use strict';
angular.module('workshopApp').controller('HomeController', ['$firebaseObject','$scope', function ($firebaseObject,$scope) {
    var ref = firebase.database().ref(); //Creo una referencia apuntando a una direccion en la base datos de firebase, en este caso estoy apuntando al root de la BD
	
    var objFirebase = $firebaseObject(ref); // Le paso la referencia adonde esta apunto para crear un objeto


    objFirebase.$value = 'Hola Mundo'; //Creo un primer valor de prueba
    objFirebase.$save();

    var refTutorial = firebase.database().ref().child('tutorial');
    var objFirebaseTutorial = $firebaseObject(refTutorial);
    objFirebaseTutorial.$value = {
    	'config' : {
    		'fecha' : '2016-07-30',
    		'asistentes' : '100',
    		'hora' : '16:00'
    	}
    };
    objFirebaseTutorial.$save();



    $scope.config = objFirebaseTutorial;


}]);
