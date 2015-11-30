angular.module("happyApp",[])
  .controller("HappyController", HappyController)

function HappyController ($scope){

  $scope.allHappiness = [];

  $scope.addNewHappyness = function () {
    $scope.date = new Date();

    $scope.allHappiness.push({
      status: $scope.checkboxSelection,
      date:   $scope.date
    });

    $scope.checkboxSelection = '';
  };
}
