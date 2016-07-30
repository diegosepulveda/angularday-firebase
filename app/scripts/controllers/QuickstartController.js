'use strict';
angular.module('workshopApp').controller('QuickstartController', ['$scope','$firebaseArray',function ($scope,$firebaseArray) {
    
    var ref = firebase.database().ref().child('quickstart').child('lista');

    var listaFirebase = $firebaseArray(ref);

    listaFirebase.$add({
    	'nombre' : 'Elon Musk',
    	'edad' : '45',
    	'profesion' : 'inventor,fisico'
    });

    $scope.lista = listaFirebase;
}]);
