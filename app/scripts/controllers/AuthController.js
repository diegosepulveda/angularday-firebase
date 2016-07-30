'use strict';
angular.module('workshopApp').controller('AuthController', ['$scope','$firebaseAuth', '$firebaseObject' , function ($scope,$firebaseAuth,$firebaseObject) {
    
	var objAutenticacion = $firebaseAuth();
	
	$scope.loginUsuario = function(usuario,pass)
	{
		objAutenticacion.$signInWithEmailAndPassword(usuario, pass).then(function(firebaseUser) {
		  console.log("Logeado como:", firebaseUser.uid);
		  console.log("Usuario:", firebaseUser);

		}).catch(function(error) {
		  console.error("Authentication failed:", error);
		});
	}



	$scope.logOut = function()
	{
		objAutenticacion.$signOut();
	}

	$scope.crearUsuario = function(usuario,pass)
	{
		objAutenticacion.$createUserWithEmailAndPassword(usuario,pass).then(function(firebaseUser) {
		    console.log("User " + firebaseUser.uid + " created successfully!");
		  }).catch(function(error) {
		    console.error("Error: ", error);
		  });
	}



	objAutenticacion.$onAuthStateChanged(function(firebaseUser) {
	  if (firebaseUser) {
	    console.log("Logeado como:", firebaseUser);
	    $scope.firebaseUser = firebaseUser;
	  } else {
	    console.log("Log out"+$scope.firebaseUser);
	  }
	});

}]);
