var locations = [
  {
    title: 'Dr. Vu Anh Ngoc',
    address: '35 D. Tay Mo, Tay Mo, Nam Tu Liem',
    phone: '+91 44 4204 2040',
    city: 'Ha Noi 10000',
    lat: 21.001578,
    lng: 105.750768,
  },
  {
    title: 'Dr. Nguyen Thanh Tam',
    address: '10 P. Dong Me, Me Tri, Nam Tu Liem',
    phone: '+91 80 4343 3331',
    city: 'Ha Noi 10000',
    lat: 21.010741,
    lng: 105.777816,
  },
  {
    title: 'Dr. Vu Hong An',
    address: 'P. Pham Van Bach, Yen Hoa, Cau Giay',
    phone: '+91 11 4053 8200',
    city: 'Ha Noi 10000',
    lat: 21.025089,
    lng: 105.788762,
  },
];

function initMap() {
  // var directionsDisplay = new google.maps.DirectionsRenderer();

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: { lat: 21.033121, lng: 105.788907 },
  });

  const image = 'logo.png';
  const request = {
    placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
    fields: ['name', 'formatted_address', 'place_id', 'geometry'],
  };
  const infowindow = new google.maps.InfoWindow();
  const service = new google.maps.places.PlacesService(map);

  // directionsDisplay.setMap(map);

  for (let i = 0; i < locations.length; i++) {
    new google.maps.Marker({
      position: locations[i],
      map: map,
      title: locations[i].title,
    });
  }
}

var locationApp = angular.module('LocationApp', []);
locationApp.controller('locationCtrl', function ($scope) {
  $scope.locations = locations;
});
