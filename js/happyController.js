angular.module("HappyApp")
  .controller("HappyController", HappyController);

function HappyController($scope) {
  // $scope.faces = [
  //   {face: "happy", src: "happy.png"},
  //   {face: "neutral", src: "neutral.png"},
  //   {face: "sad", src: "sad.png"}
  // ];

  $scope.allFaces = [
    {feeling: "img/happy.png",    day: 1},
    {feeling: "img/neutral.png",  day: 2},
    {feeling: "img/sad.png",      day: 3},
  ];


  $scope.newFace = { feeling: "", day: "" };

  var dayNumber = $scope.allFaces.length + 1;

  $scope.addNewFace = function() {
    $scope.allFaces.push({feeling: $scope.newFace.feeling, day: dayNumber++});
  };
}
