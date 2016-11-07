angular.module('starter.controllers', [])

  .controller("loginController", function($scope,$cordovaOauth,$location) {

    $scope.loginFacebook = function() {
      alert("loginFB");
        $cordovaOauth.facebook("1192144237491550", ["email"]).then(function(result) {
            // results
            alert(JSON.stringify(result));
           localStorage.setItem("loginExitoso", result.access_token);
           $location.path("/bienvenido");
        }, function(error) {
            // error
            console.log(error);
        });



    };

    $scope.loginGoogle = function() {
      alert("loginGoogle");
        $cordovaOauth.google("313606700685-1l3ftm7ps2bhn38q1d7vvqq8o695lldn.apps.googleusercontent.com", ["email"]).then(function(result) {
            // results
            //alert(result);
          alert(JSON.stringify(result));
           localStorage.setItem("loginExitoso", result.access_token);
           $location.path("/bienvenido");
        }, function(error) {
            // error
            console.log(error);
        });



    };

 

  })
  .controller("bienvenidoController", function($scope) {

    $scope.login = function() {
      alet();
    };

 

  });
