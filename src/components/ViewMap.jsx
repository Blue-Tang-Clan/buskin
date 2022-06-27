import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import React, { useState, useRef, useCallback } from 'react';
import MapGL, { Marker, Popup, GeolocateControl } from 'react-map-gl';
// import { Room, Cancel } from '@mui/icons-material';
import Geocoder from 'react-map-gl-geocoder';

const config = require('./config.js');

export default function ViewMap() {
  const [viewport, setViewport] = useState({
    latitude: 40.7484,
    longitude: -73.9857,
    zoom: 13,
  });
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    [],
  );
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange],
  );

  return (
    <div className='map-div'>
      <MapGL
        ref={mapRef}
        {...viewport}
        width='100%'
        height='100%'
        mapboxApiAccessToken={config.TOKEN}
        onViewportChange={handleViewportChange}
        mapStyle='mapbox://styles/mapbox/streets-v11'
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={config.TOKEN}
          position='top-right'
        />
        <div>
          <GeolocateControl style={{ background: 'transparent', boxShadow: 'none' }} />
        </div>
      </MapGL>
    </div>
  );
}
