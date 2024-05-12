// App.js

import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { generateGeofences } from './generateGeofence';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 7.9465,  // Central point of Ghana for broad visibility
  lng: -1.0232
};

function MapWithGeofences({ geofences }) {
  console.log("Geofences to render:", geofences);  // Debug output to console

  // Flatten the geofence paths to get all vertices for markers
  const markerPositions = geofences.reduce((acc, geofence) => {
    return [...acc, ...geofence.paths];
  }, []);

  console.log("Marker Positions:", markerPositions);  // Debug the marker positions

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}  // Adjust zoom level as needed for visibility
      >
        {markerPositions.map((position, index) => (
          <Marker
            key={index}
            position={position}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default function App() {
  const [geofences, setGeofences] = useState([]);

  useEffect(() => {
    const fences = generateGeofences(4.5, 11.0, -3.25, 1.2, 0.2);
    console.log("Generated Geofences:", fences);  // Check the generated geofences
    setGeofences(fences);
  }, []);

  return <MapWithGeofences geofences={geofences} />;
}
