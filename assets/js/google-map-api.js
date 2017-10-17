var map;

//renders the google map
function initMap() {
    map = new google.maps.Map(
        document.getElementById('map'), 
        {
            center: {lat: 41.881832, lng: -87.623177},
            zoom: 11
        }
    );

}
// initialize array of markers that will be used to clear markers from the map
var crimeMarkers = [];
//function that adds marker to the map where the crime was commited, takes longitude, latitude
function addMarker(lat,lng){
    marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat,lng),
            map: map
        }
    );
    crimeMarkers.push(marker);
    //sets the zoom to the location that the map is
    map.setZoom(18);
    map.panTo(marker.position);
}

// Removes the markers from the map,
function clearOverlays() {
  for (var i = 0; i < crimeMarkers.length; i++ ) {
    crimeMarkers[i].setMap(null);
  }
  crimeMarkers.length = 0;

}

// Add info windows to each marker for crime info
function addCrimeInfo(i, marker, date, address, description, crimeType){
    //adding info
    var crimeInfo = '<p> #' + i + '</p><p> Decription: ' + crimeType + ' ' + description + '</p> <p> Block: ' + address + '</p><p> Date: ' + date + "</p>";
    var infowindow = new google.maps.InfoWindow({
        content: crimeInfo,
    });
    marker.addListener('mouseover', function(){
        infowindow.open(map, marker);

    });
    marker.addListener('mouseout', function() {
    infowindow.close(map, marker);
});
    

    console.log("Marker");
}

/*
function showCrimeAddress(lat, lng){
    var crimeAddress  = new google.maps.LatLng({lat: lat,lng: lng}); 
    console.log(crimeAddress.formatted_address);
    return crimeAddress.formatted_address;
    
}*/
