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
import apiMasters from '../apiMasters.js';

const config = require('../../config.js');

export default function ViewMap() {
  const [viewport, setViewport] = useState({
    latitude: 40.7484,
    longitude: -73.9857,
    zoom: 13,
  });
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [pins, setPins] = useState([]);
  const [fanId, setFanId] = useState(1);
  const [saved, setSaved] = useState(false);
  const [savedEvents, setSavedEvents] = useState([]);
  const { setPage, setPageId, setLogin, userType, userId } = useContext(TopContext);

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await apiMasters.getEvents(new Date());
        setPins(res.data);
        setFanId(Number(userId));
        const resDos = await apiMasters.getFanDashBoard(fanId);
        setSavedEvents(resDos.data.events);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, [fanId, userId]);

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

  const handleSaveClick = (fId, eventId) => {
    if (userType === 'anonymous') {
      setLogin(true);
    } else {
      apiMasters.saveEvent(fId, eventId)
        .then(() => {
          setSaved(true);
        })
        .catch(((err) => console.log(err)));
    }
  };

  const eventPage = (e) => {
    setPageId(e.target.id);
    setPage('event');
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
              <Room style={{ fontSize: viewport.zoom * 5.5, cursor: 'pointer', color:
              JSON.stringify(savedEvents).includes(p.street) ? 'blue' : 'tomato'
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
                  <div className='card'>
                    <label className='eventLabel'>Artist Name</label>
                    <p className='artist'>
                      {' '}
                      <b>{p.display_name}</b>
                    </p>
                    <label className='eventLabelName' id={p.id} onClick={(e) => eventPage(e)}>Event Name</label>
                    <p className='event'>
                      {' '}
                      <b>{p.name}</b>
                    </p>
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
                      Start Time&nbsp;
                      <b>{p.start_time}</b>
                    </span>
                    <span className='endTime'>
                      End Time&nbsp;
                      <b>
                        {p.end_time}
                      </b>

                    </span>
                    {saved ? <p style={{ color: 'green' }}> Event Saved!</p> : (
                     <button
                        type='button'
                        className='saveEventBtn'
                        onClick={() => handleSaveClick(fanId, Number(p.id))}
                      >
                        {' '}
                        Save Event
                        {' '}

                      </button>
                    )}
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
