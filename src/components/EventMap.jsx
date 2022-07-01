import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'react-date-picker/dist/DatePicker.css';
import React, {
  useState, useRef, useCallback, useEffect, useContext,
} from 'react';
import MapGL, {
  Marker, Popup, GeolocateControl, Layer,
} from 'react-map-gl';
import { Room, Cancel } from '@mui/icons-material';
import Geocoder from 'react-map-gl-geocoder';
import { TopContext } from './App.jsx';
import { EventLocationContext } from './Event.jsx';
import apiMasters from '../apiMasters.js';

const config = require('../../config.js');

export default function ViewMap() {
  const { eventInfo, pageId, userId } = useContext(EventLocationContext);
  const [viewport, setViewport] = useState({
    latitude: eventInfo.latitude,
    longitude: eventInfo.longitude,
    zoom: 13,
  });
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [pins, setPins] = useState([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await apiMasters.getEvent(pageId);
        setPins(res.data.rows);
        setViewport({
          latitude: Number(pins[0].latitude),
          longitude: Number(pins[0].longitude),
          zoom: 13,
        });
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, [eventInfo, pageId]);

  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    [],
  );
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 200 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange],
  );

  const handleMarkerClick = (id, event, lat, long) => {
    event.stopPropagation();
    setCurrentPlaceId(id);
    setViewport({
      ...viewport, latitude: Number(lat), longitude: Number(long),
    });
    setShowPopup(true);
  };

  const parkLayer = {
    id: 'add-3d-buildings',
    source: 'composite',
    'source-layer': 'building',
    filter: ['==', 'extrude', 'true'],
    type: 'fill-extrusion',
    minzoom: 15,
    paint: {
      'fill-extrusion-color': '#aaa',

      // Use an 'interpolate' expression to
      // add a smooth transition effect to
      // the buildings as the user zooms in.
      'fill-extrusion-height': [
        'interpolate',
        ['linear'],
        ['zoom'],
        15,
        0,
        15.05,
        ['get', 'height'],
      ],
      'fill-extrusion-base': [
        'interpolate',
        ['linear'],
        ['zoom'],
        15,
        0,
        15.05,
        ['get', 'min_height'],
      ],
      'fill-extrusion-opacity': 0.6,
    },
  };

  return (
    <div className='home-map-div'>
      <MapGL
        ref={mapRef}
        {...viewport}
        width='100%'
        height='100%'
        mapboxApiAccessToken={config.TOKEN}
        onViewportChange={handleViewportChange}
        mapStyle='mapbox://styles/mapbox/streets-v11'
      >
        <Layer {...parkLayer} />
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={config.TOKEN}
          position='top-right'
        />
        <div>
          <GeolocateControl
            style={{ background: 'transparent', boxShadow: 'none' }}
          />
        </div>
        { pins.map((p) => (
          <>
            <Marker
              latitude={Number(p.latitude)}
              longitude={Number(p.longitude)}
              offsetLeft={-viewport.zoom * 3.5}
              offsetTop={-viewport.zoom * 5.5}
            >
              <Room style={{ fontSize: viewport.zoom * 5.5, cursor: 'pointer', color:'#0094B6'
            }} onClick={(event) => handleMarkerClick(p.id, event, p.latitude, p.longitude)} />
            </Marker>
            {p.id === currentPlaceId
              ? (

                <Popup
                  latitude={Number(p.latitude)}
                  longitude={Number(p.longitude)}
                  closeButton
                  closeOnClick={false}
                  anchor='right'
                  onClose={() => {
                    setSaved(false);
                    setCurrentPlaceId(null);
                  }}
                >
                  <div className='map-card'>
                    <label className='eventLabel'>Artist Name</label>
                    <h2 className='artist'>
                      {' '}
                      <b>{p.display_name}</b>
                    </h2>
                    <label className='eventLabelName' id={p.id} onClick={(e) => eventPage(e)}>Event Name</label>
                    <h2 className='event'>
                      {' '}
                      <b>{p.name}</b>
                    </h2>
                    <label className='eventLabel'>Event Address</label>
                    <p className='address'>
                      {p.street}
                      {' '}
                      -
                      {' '}
                      {p.city}
                      {' '}
                      /
                      {' '}
                      {p.state}
                      {' '}
                    </p>
                    <label className='eventLabel'>Date</label>
                    <p className='date'>{p.date}</p>
                    <label className='eventLabel'>Time</label>
                    <span className='startTime'>
                      Start Time&nbsp;&nbsp;&nbsp;
                      <b>{p.start_time}</b>
                    </span>
                    <span className='endTime'>
                      End Time&nbsp;&nbsp;&nbsp;
                      <b>
                        {p.end_time}
                      </b>

                    </span>
                  </div>
                </Popup>
              )
              : null }
          </>
        ))}
      </MapGL>
    </div>
  );
}