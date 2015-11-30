angular.module('HappyApp', [])
.controller('happinessController', happinessController)

function happinessController($scope){

  $scope.allFaces = [
    {feeling: "img/happy.png", day: 1},
    {feeling: "img/neutral.png", day: 2},
    {feeling: "img/sad.png", day: 3}
  ]

  var dataLength = $scope.allFaces.length + 1;

  $scope.newFace = {feeling: "", day: ""};

  $scope.addNewFace = function(){
    $scope.allFaces.push({feeling: $scope.newFace.feeling, day: dataLength++});
    $scope.newFace = ''
  }

}