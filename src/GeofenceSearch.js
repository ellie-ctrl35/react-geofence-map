import React, { useState } from 'react';
import * as turf from '@turf/turf';

function CoordinateInput({ geofences }) {
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [geofenceId, setGeofenceId] = useState('');

    const handleFindGeofence = () => {
        const point = turf.point([parseFloat(lng), parseFloat(lat)]);
        let foundGeofenceId = 'Not found';

        for (const geofence of geofences) {
            const coordinates = geofence.paths.map(p => [p.lng, p.lat]);
            coordinates.push(coordinates[0]); // Ensure the polygon is closed
            const polygon = turf.polygon([coordinates]);
            const inside = turf.booleanPointInPolygon(point, polygon);

            if (inside) {
                foundGeofenceId = geofence.id;
                break;
            }
        }

        setGeofenceId(foundGeofenceId);
    };

    return (
        <div style={{ padding: '10px', background: '#fff', position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}>
            <div>
                <input
                    type="number"
                    value={lat}
                    onChange={e => setLat(e.target.value)}
                    placeholder="Latitude"
                />
                <input
                    type="number"
                    value={lng}
                    onChange={e => setLng(e.target.value)}
                    placeholder="Longitude"
                />
                <button onClick={handleFindGeofence}>Find Geofence</button>
            </div>
            <div>
                Geofence ID: {geofenceId}
            </div>
        </div>
    );
}

export default CoordinateInput;