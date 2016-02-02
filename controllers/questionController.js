var questionApp = angular.module('my.questionctrl',[]);

myApp.controller('QuestionCtrl',['$scope','$http',function($scope, $http){
  console.log('appQuestion.js is working');

  var refresh = function(){
    $http.get('/questionlist').success(function(response){
        console.log("Received TOKENS DATA requested!");
        $scope.questionlist = response;
        $scope.question = "";
      });
    }
    refresh();

    $scope.addQuestion = function(){

      console.log($scope.question);
      $http.post('/questionlist', $scope.question).success(function(response){
        //Added to the data
        refresh();
      });
    }


}]);
