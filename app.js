angular.module("happyApp", [])

  .controller("happyController", function ($scope){

    $scope.allHappy = [];


    $scope.newHappy = {
      status : '',
      date   : ''
    }

    $scope.addHappy = function () {
      $scope.date = new Date ();

      $scope.allHappy.push({
        status : $scope.emoticonSelected,
        date   : $scope.date
      })

      $scope.emoticonSelected = "";

    };

    console.log($scope.allHappy);

    $scope.getAverage = function () {
      var averageArray = $scope.allHappy.map(function (string){
        if (string == 'happy') {
          return 1;
        } else if (string == 'ok') {
          return 0;
        } else { return -1};
      })

      var total = 0;

      total = averageArray.reduce (function (a,b) {
        return a + b;
      })

      var avgerage = total/averageArray.length;

        if (avgerage >= 0.5) {
          return 'Happy';
        } else if ( avgerage >= 0) {
          return 'Ok';
        } else { return 'Sad'};

    }

});