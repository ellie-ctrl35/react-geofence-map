// generateGeofence.js

export const generateGeofences = (startLat, endLat, startLng, endLng, increment) => {
    let geofences = [];
    let id = 0;
    for (let lat = startLat; lat < endLat; lat += increment) {
        for (let lng = startLng; lng < endLng; lng += increment) {
            const geofence = {
                id: `geofence_${id++}`,
                paths: [
                    { lat: lat, lng: lng },
                    { lat: lat, lng: lng + increment },
                    { lat: lat + increment, lng: lng + increment },
                    { lat: lat + increment, lng: lng },
                    { lat: lat, lng: lng }  // Closing the loop
                ]
            };
            geofences.push(geofence);
        }
    }
    return geofences;
};
