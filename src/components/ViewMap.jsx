import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import React, { useState, useRef, useCallback } from 'react';
import MapGL, { Marker, Popup, GeolocateControl } from 'react-map-gl';
import { Room, Cancel } from '@mui/icons-material';
import Geocoder from 'react-map-gl-geocoder';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import moment from 'moment';
import apiMasters from '../apiMasters.js';

const config = require('./config.js');

export default function ViewMap() {
  const [viewport, setViewport] = useState({
    latitude: 40.7484,
    longitude: -73.9857,
    zoom: 13,
  });
  const [newEvent, setNewEvent] = useState(null);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [eventName, setEventName] = useState(null);
  const [street, setStreet] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState('10:00');
  const [endTime, setEndTime] = useState('10:00');
  const [artistId, setArtistId] = useState('1');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventName && street && city && state && date && startTime && endTime) {
      const formatDate = moment(date).format('L');
      const eventObj = {
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
      apiMasters
        .createEvent(artistId, eventObj)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      alert('Enter all details to submit an event!');
    }
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
          <GeolocateControl
            style={{ background: 'transparent', boxShadow: 'none' }}
          />
        </div>
        <Marker
          latitude={40.7484}
          longitude={-73.9857}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Room style={{ fontSize: viewport.zoom * 7, cursor: 'pointer' }} />
        </Marker>
        {newEvent && (
        <Popup
          latitude={newEvent.lat}
          longitude={newEvent.lng}
          closeButton
          closeOnClick={false}
          anchor='right'
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
              <DatePicker onChange={setDate} value={date} format="y-MM-dd" />
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
