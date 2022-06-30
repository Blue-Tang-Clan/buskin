import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import React, {
  useState, useRef, useCallback, useEffect, useTheme,
} from 'react';
import MapGL, { Marker, Popup, GeolocateControl, Layer } from 'react-map-gl';
import { Room, Cancel } from '@mui/icons-material';
import Geocoder from 'react-map-gl-geocoder';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import moment from 'moment';
import styled from 'styled-components';
import apiMasters from '../apiMasters.js';

const config = require('../../config.js');

const Modal = styled.div`
z-index:9999;
position:fixed;
top:0;
left:0;
height:100vh;
width:100vw;
background: rgba(0,0,0,0.5);
display: ${({ warning }) => (warning ? 'block' : 'none')};
`;

const WarningMessage = styled.div`
  background: rgba(250,250,250,1);
  height:30rem;
  width:30rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

let eventObj = {};
export default function ViewMap({ ArtistName, ArtistId, getArtistDashBoard }) {
  const [viewport, setViewport] = useState({
    latitude: 40.7484,
    longitude: -73.9857,
    zoom: 13,
  });
  const [newEvent, setNewEvent] = useState(null);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [eventName, setEventName] = useState(null);
  const [street, setStreet] = useState(null);
  const [pins, setPins] = useState([]);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState('10:00');
  const [endTime, setEndTime] = useState('10:00');
  const [artistId, setArtistId] = useState(null);
  const [artistName, setArtistName] = useState(null);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await apiMasters.getEvents(new Date());
        setPins(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    setArtistName(ArtistName);
    setArtistId(ArtistId);
    getPins();
  }, [ArtistId]);

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

  const handleAddClick = (e) => {
    console.log(e);
    const [lng, lat] = e.lngLat;
    setNewEvent({
      lat,
      lng,
    });
  };

  const eventCreation = (artistId, eventObj) => {
    console.log('artistId', artistId);
    console.log('eventObj', eventObj);
    apiMasters
      .createEvent(artistId, eventObj)
      .then((res) => {
        setPins([...pins, eventObj]);
        console.log(res.data);
      })
      .then(() => setNewEvent(null))
      .then(() => getArtistDashBoard(artistId))
      .catch((err) => console.log(err));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventName && street && city && state && date && startTime && endTime) {
      const formatDate = moment(date).format('L');

      eventObj = {
        name: eventName,
        street,
        city,
        state,
        longitude: newEvent.lng,
        latitude: newEvent.lat,
        date: formatDate,
        start_time: startTime,
        end_time: endTime,
      };
      eventObj.display_name = artistName;
      // check if any events in 30 yard radius, date and time
      apiMasters.checkEventRadius(newEvent.lat, newEvent.lng, formatDate, startTime)
        .then((res) => {
          if (res.data.length) {
             setWarning(true);
          } else {
            eventCreation(artistId, eventObj);
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert('Enter all details to submit an event!');
    }
  };

  const handleMarkerClick = (id, event, lat, long) => {
    event.stopPropagation();
    setCurrentPlaceId(id);
    setViewport({
      ...viewport, latitude: Number(lat), longitude: Number(long),
    });
    setShowPopup(true);
  };

  const handleWarningClick = (e) => {
    e.preventDefault();
    setWarning(false);
    e.target.name && eventCreation(artistId,eventObj);
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
    <div className='map-div'>
      <Modal warning={warning}>
        <WarningMessage>
          Your Performance is Within 30 Yards of Another Performance at the Same Time, Do you still want to schedule this performance?
          <button name='yes' onClick={(e) => handleWarningClick(e)}>Yes</button>
          <button onClick={(e) => handleWarningClick(e)}>No</button>
        </WarningMessage>
      </Modal>
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
              <Room style={{ fontSize: viewport.zoom * 5.5, cursor: 'pointer' }} className='pin' onClick={(event) => handleMarkerClick(p.id, event, p.latitude, p.longitude)} />
            </Marker>
            {p.id === currentPlaceId
              ? (

                <Popup
                  latitude={Number(p.latitude)}
                  longitude={Number(p.longitude)}
                  closeButton
                  closeOnClick={false}
                  anchor='right'
                  onClose={() => setCurrentPlaceId(null)}
                >
                  <div className='card'>
                    <label className='eventLabel'>Artist Name</label>
                    <p className='artist'>
                      {' '}
                      <b>{p.display_name}</b>
                    </p>
                    <label className='eventLabel'>Event Name</label>
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
                  </div>
                </Popup>
              )
              : null }
          </>
        ))}
        {newEvent && (
        <Popup
          latitude={newEvent.lat}
          longitude={newEvent.lng}
          closeButton
          closeOnClick={false}
          anchor='top'
          onClose={() => setNewEvent(null)}
        >
          <div>
            <form className='event-form' onSubmit={(e) => handleSubmit(e)}>
              <label>Event Name</label>
              <input
                placeholder='Enter Event Name'
                onChange={(e) => setEventName(e.target.value)}
              />
              <label>Street</label>
              <input
                placeholder='Add Street Details'
                onChange={(e) => setStreet(e.target.value)}
              />
              <label>City</label>
              <input
                placeholder='Add City Name'
                onChange={(e) => setCity(e.target.value)}
              />
              <label>State</label>
              <input
                placeholder='Add State Name'
                onChange={(e) => setState(e.target.value)}
              />
              <label>Event Date</label>
              <DatePicker onChange={setDate} value={date} format='y-MM-dd' />
              <label>Event Start Time</label>
              <TimePicker onChange={setStartTime} value={startTime} />
              <label>Event End Time</label>
              <TimePicker onChange={setEndTime} value={endTime} />
              <button className='submitButton' type='submit'>
                Add Event
              </button>
            </form>
          </div>
        </Popup>
        )}
      </MapGL>
    </div>
  );
}
