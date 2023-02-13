function initMap() {
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var geocoder = new google.maps.Geocoder();

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: { lat: 21.033121, lng: 105.788907 },
  });

  var locations = [
    {
      title: 'Dr. Smiles Dental Clinic',
      address: '12th Main Road, Anna Nagar',
      phone: '+91 44 4204 2040',
      city: 'Chennai 600040, Tamil Nadu',
      lat: 21.001578,
      lng: 105.750768,
    },
    {
      title: 'Pearl Dental Care',
      address: 'HSR Layou',
      phone: '+91 80 4343 3331',
      city: 'Bengaluru 560102, Karnataka',
      lat: 21.010741,
      lng: 105.777816,
    },
    {
      title: 'Smilekraft Dentistry',
      address: 'Kalkaji',
      phone: '+91 11 4053 8200<',
      city: 'New Delhi 110019, Delhi',
      lat: 21.025089,
      lng: 105.788762,
    },
  ];

  const image = 'logo.png';

  directionsDisplay.setMap(map);

  for (let i = 0; i < locations.length; i++) {
    new google.maps.Marker({
      position: locations[i],
      map: map,
      title: locations[i].title,
      icon: image,
    });
  }

  getCurrentPosition().then(function (currentPosition) {
    calculateAndDisplayRoute(directionsService, directionsDisplay, currentPosition);
  });
}

function getCurrentPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(function (position) {
      resolve({ lat: position.coords.latitude, lng: position.coords.longitude });
    }, reject);
  });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, currentPosition) {
  // var start = currentPosition;

  var start = new google.maps.LatLng(21.025089, 105.788762);
  var end = new google.maps.LatLng(21.001578, 105.750768);
  directionsService.route(
    {
      origin: start,
      destination: end,
      travelMode: 'DRIVING',
    },
    function (response, status) {
      if (status === 'OK') {
        // console.log(response);
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    }
  );
}
