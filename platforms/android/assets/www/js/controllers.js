angular.module('starter.controllers', [])

  .controller("loginController", function($scope,$cordovaOauth,$location) {

    $scope.loginFacebook = function() {
        $cordovaOauth.facebook("1774071816158459", ["email"]).then(function(result) {
            // results

           localStorage.setItem("loginExitoso", result.access_token);
           $location.path("/bienvenido");
        }, function(error) {
            // error
            console.log(error);
        });



    };

    $scope.loginGoogle = function() {
        $cordovaOauth.google("163786844550-jcueev9uhk21jndrfbqoedlrk9dhkg6u.apps.googleusercontent.com", ["email"]).then(function(result) {
            // results

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



// .controller('AppCtrl', function ($scope, $ionicModal,  $cordovaOauth, $localStorage, $location) {
//         $scope.login = function() {
//             $cordovaOauth.facebook("APPID", ["email", "read_stream", "user_website", "user_location", "user_relationships"]).then(function(result) {
//                 $localStorage.accessToken = result.access_token;
//                  alert("facebook login correctly");
//                 $location.path("/profile");
//             }, function(error) {
//                 alert(error);
//                 console.log(error);
//             });
//         };