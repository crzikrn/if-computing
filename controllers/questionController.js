var questionApp = angular.module('my.questionctrl',[]);

myApp.controller('QuestionCtrl',['$scope','$http',function($scope, $http){
  console.log('appQuestion.js is working');

  var refresh = function(){
    $http.get('/questionlist').success(function(response){
        console.log(response);
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

    $scope.deleteQuestion = function(id){
      $http.delete('/questionlist/' + id).success(function(response){
        console.log(id);
        console.log('Successfully deleted' + response);
        refresh();
      });
    }

}]);
