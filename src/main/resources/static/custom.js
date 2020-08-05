let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { 
            lat: parseFloat(busLocations[0].LATITUDE), 
            lng: parseFloat(busLocations[0].LONGITUDE) 
            },
        zoom: 15,
        scrollwheel: false
    });
	
    for (i=0; i<busLocations.length; i++){
        var image = 'https://maps.google.com/mapfiles/kml/shapes/bus.png'; //adds a Bus icon
        var marker = new google.maps.Marker({
            position: { 
                lat: parseFloat(busLocations[i].LATITUDE), 
                lng: parseFloat(busLocations[i].LONGITUDE) 
            },
            map: map,
            icon: image //sets the Bus icon
        });

        //Add info window
    /*let contentString = 
    '<div id="content">' + '</div>' +
    '<h3 id = "busNumber" class="busNumber">Bus Number</h3>' +
    '<div id="bodyContent">'+
    '<p></p>' + '</div>';*/
    /*let infoWindow = new google.maps.InfoWindow({
        content: contentString
    });

    image.addListener('click', function() {
        infoWindow.open(map, marker);
    });*/

    }
}
