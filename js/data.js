app.controller('HappinessController', HappinessController);

function HappinessController($scope){
  $scope.rating = ['sad','mild','happy'];

  // day: 1, rating: 'sad'
  // $scope.newRating = {}
  $scope.newRating = { rating: 'mild'}


  $scope.all = [];

  $scope.add = function(){
    // console.log(this.newRating)
    var newDay = {
      day: $scope.all.length + 1,
      rating: $scope.newRating.rating
    }
    $scope.all.push({day: $scope.all.length+1, rating: $scope.newRating.rating})
    // day: 1, rating: 'sad'
  }
}