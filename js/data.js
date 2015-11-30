app.controller('HappinessController', HappinessController);

function HappinessController($scope){
  $scope.rating = ['sad','mild','happy'];
  $scope.displayRating ={
    sad: ':-(',
    mild: ':-|',
    happy: ':-)'
  }
  $scope.score = {
    sad: 1,
    mild: 2,
    happy: 3
  }

  $scope.newRating = { rating: 'mild'}

  $scope.all = [];
  $scope.average = 0;

  $scope.add = function(){
    var newDay = {
      day: $scope.all.length + 1,
      rating: $scope.newRating.rating
    }
    console.log('ori' +this.average)
    $scope.average = ($scope.average*(newDay.day-1) + $scope.score[newDay.rating])/ newDay.day
    console.log('ori' +this.average)
    $scope.all.push({day: $scope.all.length+1, rating: $scope.newRating.rating})
  }
}