import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon, VideoOverlay } from 'react-leaflet';
import L from 'leaflet'; // Import leaflet directly to access marker icon
import 'leaflet/dist/leaflet.css';
import './Dashboard.css'; // Import CSS file for styling

// Define custom marker icon
const locationIcon = new L.Icon({
  iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Dashboard = () => {
  // Define coordinates for Gandhipuram, Peelamedu, and Ukkadam
  const coordinates = [
    [11.0183, 76.9558], // Gandhipuram
    [11.0319, 77.0387], // Peelamedu
    [10.9905, 76.9614], // Ukkadam
  ];

  return (
    <div className="grid-container">
      <div className="quantity-section">
        <h2>Water Quantity Levels</h2>
        <div className="tank-container">
          {/* Tank components */}
        </div>
      </div>
      <div className="quality-section">
        <h2>Water Quality Monitoring Points</h2>
        {/* Water Quality Monitoring table */}
      </div>
      <h2>Safety Control</h2>
      <div className="safety-regulation"> {/* Adjusted class name */}
        
        <table className="safety-control"></table>
        <div class="tanka">
            <p class="tank-name">Tank A</p>
            <p>Corrosion Rate: <span class="corrosion-rate">0.5 mm/yr</span></p>
            <div class="graph">
            <div className="bar" style={{ width: '50%' }}></div>
            </div>
        </div>

        <div class="tankb">
            <p class="tank-name">Tank B</p>
            <p>Corrosion Rate: <span class="corrosion-rate">0.8 mm/yr</span></p>
            <div class="graph">
            <div className="bar" style={{ width: '80%' }}></div>
            </div>
        </div>

        <div class="tankc">
            <p class="tank-name">Tank C</p>
            <p>Corrosion Rate: <span class="corrosion-rate">0.3 mm/yr</span></p>
            <div class="graph">
            <div className="bar" style={{ width: '30%' }}></div>
            </div>
        </div>

      </div>
      <h2 className='h2'>Water Sources Diagram</h2>
      <div className="diagram">
        
        <div className="source desalinated">Sea Water</div>
        <div className="source ground">Ground Water</div>
        <div className="source local">Local Surface Water</div>
        <div className="source external">External Water</div>
        <div className="source other">Other Water</div>
      </div>
      <div className="map-section">
        <h2>Coimbatore Interactive Map</h2>
        <MapContainer center={[11.0168, 76.9558]} zoom={12} style={{ height: '590px', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* Markers for locations */}
          {coordinates.map((coord, index) => (
            <Marker key={index} position={coord} icon={locationIcon}>
              <Popup>
                {/* Popup content */}
              </Popup>
            </Marker>
          ))}
          {/* Polygon connecting locations */}
          <Polygon positions={coordinates} pathOptions={{ color: 'blue' }} />
          {/* Video overlay */}
          <VideoOverlay
            bounds={coordinates} // The video overlay bounds should match the coordinates of the polygon
            url="https://www.example.com/video.mp4" // Replace with the URL of your video
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default Dashboard;
