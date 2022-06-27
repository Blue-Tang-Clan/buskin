import axios from 'axios';

const url = '';

/* *** GET REQUESTS *** */

// GET fan profile information
const getFanProfile = (fanId) => (
  axios.get(`${url}/fan/profile/${fanId}`)
);

// GET get fan dashboard
const getFanDashboard = (fanId) => (
  axios.get(`${url}/fan/dashboard/${fanId}`)
);

// GET artist profile information
const getArtistProfile = (artistId) => (
  axios.get(`${url}/artist/profile/${artistId}`)
);

// GET artist Dashboard
const getArtistDashboard = (artistId) => (
  axios.get(`${url}/artist/dashboard/${artistId}`)
);
// GET Homepage info based on location
const getHomePageInfo = (latitude = 40.7484, longitude = -73.9857) => (
  axios.get(`${url}/homepage/${latitude}/${longitude}`)
);

// GET Homepage genre selection
const getHomePageGenre = (genre) => (
  axios.get(`${url}/homepage/${genre}`)
);
// GET all events that are in the DB(we will need these to display them as pins on the map)
const getEvents = (date) => (
  axios.get(`${url}/events/${date}`)
);

/* *** POST REQUESTS *** */
// POST user input is an obj that contains the username and password.
const getUserInfo = (username, password) => (
  axios.post(`${url}/login`, { username, password })
);
// POST user input is an obj that contains the username ,password , email and user_type.
const registerUser = (username, password, email, userType) => (
  axios.post(`${url}/register`, {
    username, password, email, user_type: userType,
  })
);

const createEvent = (
  artistId,
  name,
  street,
  city,
  state,
  longitude,
  latitude,
  timestamp,
) => (
  axios.post(`${url}artists/event/${artistId}`, {
    name,
    street,
    city,
    state,
    longitude,
    latitude,
    timestamp,
  })
);

const saveEvent = (fanId, eventId) => (
  axios.post(`${url}/fans/event/${fanId}`, {
    event_id: eventId,
  })
);

const followArtist = (fanId, artistId) => (
  axios.post(`${url}/fans/follow/${fanId}`, {
    artist_id: artistId,
  })
);

/* *** PATCH REQUESTS *** */
const editFanProfile = (fanId) => (
  axios.patch(`${url}/fan/update/${fanId}`)
);

const editArtistProfile = (artistId) => (
  axios.patch(`${url}/artist/update/${artistId}`)
);

const apiMasters = {
  getFanProfile,
  getFanDashboard,
  getArtistProfile,
  getArtistDashboard,
  getHomePageInfo,
  getHomePageGenre,
  getUserInfo,
  getEvents,
  registerUser,
  createEvent,
  saveEvent,
  followArtist,
  editFanProfile,
  editArtistProfile,
};

export default apiMasters;
