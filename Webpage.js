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
