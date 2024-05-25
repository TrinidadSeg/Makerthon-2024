document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('firefighting-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const address = document.getElementById('address').value;
        const fireStation = document.getElementById('fire-station').value;
        const emergencyType = document.getElementById('emergency-type').value;
        
        document.getElementById('output-name').textContent = name;
        document.getElementById('output-age').textContent = age;
        document.getElementById('output-address').textContent = address;
        document.getElementById('output-fire-station').textContent = fireStation;
        document.getElementById('output-emergency-type').textContent = emergencyType;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Initialize the map and set its view to the initial coordinates and zoom level
    var map = L.map('map').setView([51.505, -0.09], 13);

    // Set up the OSM layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker to the map at the initial view
    var marker = L.marker([51.505, -0.09], {
        draggable: true
    }).addTo(map);

    // Function to handle the location drop event
    map.on('click', function (e) {
        var lat = e.latlng.lat;
        var lng = e.latlng.lng;

        // Update the marker position
        marker.setLatLng([lat, lng]);
    });

    // Optional: Update marker position as it's dragged
    marker.on('dragend', function (e) {
        var lat = e.target.getLatLng().lat;
        var lng = e.target.getLatLng().lng;

        // Handle the new marker position as needed
        console.log("Marker dragged to: ", lat, lng);
    });
});
