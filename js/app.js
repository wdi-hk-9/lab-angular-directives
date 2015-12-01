angular.module('happyapp', [])
  .controller('HappyController', HappyController)


function HappyController($scope){
  $scope.allEmotion = [];

  $scope.getAvg = function(){
    var eArr =$scope.allEmotion.map(function(str){
      if (str =='Happy'){
        return 1;
      } else if (str == 'OK'){
        return 0;
      } else { return -1};
    })
    var total = 0;
    total = eArr.reduce(function(a,b){
      return a+b
    })
    var avg = total / eArr.length;
    if (avg>=0.5){
      return 'Happy';
    } else if ( avg >=0){
      return 'OK';
    } else {return 'Unhappy'};
  }

  $scope.addNewEmotion = function (){
    $scope.allEmotion.push($scope.dailyemotion);
    $scope.dailyemotion = '';
  }
}


