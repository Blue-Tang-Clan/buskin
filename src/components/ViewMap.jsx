import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import React, { useState, useRef, useCallback } from 'react';
import MapGL, { Marker, Popup, GeolocateControl } from 'react-map-gl';
import { Room, Cancel } from '@mui/icons-material';
import Geocoder from 'react-map-gl-geocoder';

const config = require('./config.js');

export default function ViewMap() {
  const [viewport, setViewport] = useState({
    latitude: 40.7484,
    longitude: -73.9857,
    zoom: 13,
  });
  const [newEvent, setNewEvent] = useState(null);
  const [currentPlaceId , setCurrentPlaceId] = useState(null);

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

  const handleAddClick = (e) => {
    console.log(e);
    const [lng, lat] = e.lngLat;
    setNewEvent({
      lat,
      lng,
    });
  };

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
        onDblClick={(e) => handleAddClick(e)}
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
        <Marker
          latitude={40.7484}
          longitude={-73.9857}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Room style={{ fontSize: viewport.zoom * 7, cursor: 'pointer' }} />
        </Marker>
        {newEvent && <Popup latitude={newEvent.lat} longitude={newEvent.lng} closeButton={true} closeOnClick={false} anchor='left' onClose={() => setNewEvent(null)}>
          <div>
          <form>
          <label>Place</label>
              <input
                placeholder="Enter Place Name"
                onChange={(e) => setTitle(e.target.value)}
              />
              <label>Review</label>
              <textarea
                placeholder="Add your Review"
                onChange={(e) => setDesc(e.target.value)}
              />
              <label>Rating</label>
              <select onChange={(e) => setRating(e.target.value)}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <label>Visited ?</label>
              <select onChange={(e) => setVisited(e.target.value)}>
                <option value="null" />
                <option value="visited">Visited</option>
                <option value="wishlist">Wishlist</option>
              </select>
              <button className="submitButton" type="submit">Add Pin</button>
              {notLogged && <span className="notLogged">You are not logged in!</span>}
          </form>
          </div>
            </Popup>}
      </MapGL>
    </div>
  );
}
