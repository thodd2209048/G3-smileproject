var app = angular.module('searchInputApp', []);
app.controller('myCtrl', function ($scope, $http) {
  $scope.searchInput = '';
  $scope.getLocation = function () {
    const YOUR_API_KEY = '';
    var address = encodeURIComponent($scope.searchInput);
    console.log(address);
    // var request = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + YOUR_API_KEY;
    fetch('ton-that-thuyet.json')
      .then((response) => response.json())
      .then((data) => {
        var currentPosition = {
          lat: data.results[0].geometry.location.lat,
          lng: data.results[0].geometry.location.lng,
        };
        console.log(currentPosition);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  var currentPosition;
  // $http.get(request).then(function (response, currentPosition) {
  //   var location = response.data.results[0].geometry.location;
  //   currentPosition = { lat: location.lat, lng: location.lng };
  //   console.log(currentPosition);
  // });
});
