var myApp = angular.module('if-computing',[]);

myApp.controller('tokenCtrl',['$scope','$http',function($scope, $http){
  console.log('app.js is working');

  var refresh = function(){
    $http.get('/tokenlist').success(function(response){
      console.log("Received TOKENS DATA requested!");
      $scope.tokenslist = response;
      $scope.token = "";
    });
  }
  refresh();

}]);
