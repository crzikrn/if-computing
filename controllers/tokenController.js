var myApp = angular.module('my.view1',[]);

myApp.controller('TokenCtrl',['$scope','$http',function($scope, $http){
  console.log('appToken.js is working');

  var refresh = function(){
    $http.get('/tokenlist').success(function(response){
      console.log("Received TOKENS DATA requested!");
      $scope.tokenlist = response;
      $scope.token = "";
    });
  }
  refresh();

  $scope.addToken = function(){

    console.log($scope.token);
    $http.post('/tokenlist', $scope.token).success(function(response){
      //Added to the data
      refresh();
    });
  }

  $scope.deleteToken = function(id){
    $http.delete('/tokenlist/' + id).success(function(response){
      console.log(id);
      console.log('Successfully deleted' + response);
      refresh();
    });
  }

  $scope.editToken = function(id){
    $http.get('/tokenlist/' + id).success(function(response){
      console.log("Editing: " + id);
      console.log(response);
      $scope.token = response;
    });
  }

  $scope.updateToken = function(){
    console.log($scope.token._id);
    $http.put('/tokenlist/' + $scope.token._id, $scope.token).success(function(response){
      refresh();
    });
  }

  $scope.clearToken = function(){
    $scope.token = "";
  }

}]);
