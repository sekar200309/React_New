import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon, VideoOverlay } from 'react-leaflet';
import L from 'leaflet'; // Import leaflet directly to access marker icon
import 'leaflet/dist/leaflet.css';

// Define custom marker icon
const locationIcon = new L.Icon({
  iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Interactivemap = () => {
  // Define coordinates for Gandhipuram, Peelamedu, and Ukkadam
  const coordinates = [
    [11.0183, 76.9558], // Gandhipuram
    [11.0319, 77.0387], // Peelamedu
    [10.9905, 76.9614], // Ukkadam
  ];

  return (
    <MapContainer center={[11.0168, 76.9558]} zoom={12} style={{ height: '590px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* Marker for Gandhipuram */}
      <Marker position={[11.0183, 76.9558]} icon={locationIcon}>
        <Popup>
          Gandhipuram
        </Popup>
      </Marker>
      {/* Marker for Peelamedu */}
      <Marker position={[11.0319, 77.0387]} icon={locationIcon}>
        <Popup>
          Peelamedu
        </Popup>
      </Marker>
      {/* Marker for Ukkadam */}
      <Marker position={[10.9905, 76.9614]} icon={locationIcon}>
        <Popup>
          Ukkadam
        </Popup>
      </Marker>
      {/* Polygon connecting Gandhipuram, Peelamedu, and Ukkadam */}
      <Polygon positions={coordinates} pathOptions={{ color: 'blue' }} />
      {/* Video overlay */}
      <VideoOverlay
        bounds={coordinates} // The video overlay bounds should match the coordinates of the polygon
        url="https://www.example.com/video.mp4" // Replace with the URL of your video
      />
    </MapContainer>
  );
};

export default Interactivemap;
