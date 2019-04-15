function initMap(){
    //initiate map
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
          zoom: 3,
          center: {lat: 50.1163, lng: -122.9575}
        });
        
    //setting up markers locations
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [
        {lat: 50.1555, lng: -122.9999},
        {lat: 51.1555, lng: -123.9999},
        {lat: 52.1555, lng: -124.9999}
        ];
    
    //setting up markers    
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    
    // Add a marker clusterer to manage the markers. (pin image)
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}