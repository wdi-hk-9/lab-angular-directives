angular.module("happyApp", [])

  .controller("happyController", function ($scope){

    // var date = Date.now();

    $scope.allHappy = [

    ];

    $scope.newHappy = {
      status : '',
      date   : ''
    }

    $scope.addHappy = function () {

      $scope.allHappy.push({
        status : $scope.newHappy.status,
        date   : ''})

      $scope.newHappy.status = "";

    };


  });


