angular.module('happyapp', [])
  .controller('HappyController', HappyController)


function HappyController($scope){
  $scope.allEmotion = [];

  $scope.addNewEmotion = function (){
    $scope.allEmotion.push($scope.dailyemotion);
    console.log ($scope.allEmotion);
    $scope.dailyemotion = '';
  }
}


