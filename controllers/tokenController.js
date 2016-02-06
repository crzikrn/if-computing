var myApp = angular.module('my.tokenctrl',[]);

myApp.controller('TokenCtrl',['$scope','$http',function($scope, $http){
  console.log('appToken.js has started');

  $scope.edit = false;

  $scope.addEmptyScenario = function(){
    $http.post('/emptyScene').success(function(response){
      console.log('added new empty scene');
      refresh();
    })
  }

  var refresh = function(){
    $http.get('/set').success(function(response){
      console.log("Received TOKENS DATA requested!");
      //console.log(response);
      $scope.set = response;
      $scope.game = "";
    });
  }
  refresh();

  $scope.addScenario = function(){

    console.log('this is '+ $scope.game.token);
    //make question array
    var oneQuestion = $scope.game.question.text
    console.log($scope.game.question.text)
    var questions = [];
    questions.push({text: oneQuestion});
    $scope.game.question = questions;

    //make tokens as seperate
    var array = ($scope.game.token).split(/[ ,;]+/);
    var tokens = [];
    //push tokens as objects as name keys
    array.forEach(function(token){
      tokens.push({name: token})
    });
    $scope.game.token = tokens;
    console.log($scope.game);
    $http.post('/set', $scope.game).success(function(response){
      console.log(response);
      refresh();
    })
  }

  $scope.deleteScenario = function(id){
    $http.delete('/set/' + id).success(function(response){
      console.log('Successfully deleted Scenario of: ' + response);
      refresh();
    });
  }

  $scope.editScenario = function(id){
    $scope.edit = true;
    $http.get('/set/' + id).success(function(response){
      console.log('You are editing: ' + id);
      $scope.game = response;
      console.log(response.question);
    });
  }

  $scope.updateScenario = function(id){
    $http.put('set/' + $scope.game._id, $scope.game).success(function(response){
      refresh();
      $scope.edit = false;
    });
  }

  // $scope.addToken = function(){
  //
  //   console.log($scope.token);
  //   $http.post('/tokenlist', $scope.token).success(function(response){
  //     //Added to the data
  //     refresh();
  //   });
  // }
  //
  // $scope.deleteToken = function(id){
  //   $http.delete('/tokenlist/' + id).success(function(response){
  //     console.log(id);
  //     console.log('Successfully deleted' + response);
  //     refresh();
  //   });
  // }
  //
  // $scope.editToken = function(id){
  //   $http.get('/tokenlist/' + id).success(function(response){
  //     console.log("Editing: " + id);
  //     console.log(response);
  //     $scope.token = response;
  //   });
  // }
  //
  // $scope.updateToken = function(){
  //   console.log($scope.token._id);
  //   $http.put('/tokenlist/' + $scope.token._id, $scope.token).success(function(response){
  //     refresh();
  //   });
  // }
  //
  // $scope.clearToken = function(){
  //   $scope.token = "";
  // }

}]);
