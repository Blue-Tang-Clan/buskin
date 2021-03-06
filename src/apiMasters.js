import axios from 'axios';

const url = 'http://localhost:3001';

/* *** GET REQUESTS *** */

// GET fan profile & dashboard information
const getFanDetails = (fanId) => (
  axios.get(`${url}/fan/details/${fanId}`)
);

// GET fan dashboard info
const getFanDashBoard = (fanId) => (
  axios.get(`${url}/fan/dashboard/${fanId}`)
);

// GET artist profile & dashboard information
const getArtistDetails = (artistId) => (
  axios.get(`${url}/artist/details/${artistId}`)
);

// GET Homepage info based on location
const getHomePageInfo = (latitude = 40.7484, longitude = -73.9857) => (
  axios.get(`${url}/homepage/${latitude}/${longitude}`)
);

// GET Homepage genre selection
const getHomePageGenre = () => (
  axios.get(`${url}/homepage/genre`)
);
// search Homepage genre selection
const searchHomePageGenre = (genre) => (
  axios.get(`${url}/homepage/${genre}`)
);
// GET all events that are in the DB(we will need these to display them as pins on the map)
const getEvents = (date) => (
  axios.get(`${url}/events/${date}`)
);

// GET one event for single event page
const getEvent = (eventId) => (
  axios.get(`${url}/event/${eventId}`)
);

const checkEventRadius = (latitude,longitude,date,start_time) => (
  axios.get(`${url}/check/events?latitude=${encodeURI(latitude)}&longitude=${encodeURI(longitude)}&date=${encodeURI(date)}&start_time=${encodeURI(start_time)}`)
)

/* *** POST REQUESTS *** */
// POST user input is an obj that contains the username and password.
const getUserInfo = (username, password) => (
  axios.post(`${url}/login`, { username, password })
);
// POST user input is an obj that contains the username ,password , email and user_type.
const registerUser = (username, password, email, userType) => (
  axios.post(`${url}/register`, {
    username, password, email, userType,
  })
);
// POST to send email, could be collision or new event for followers. input => receivers, text, subject
const sendEmail = (obj) => {
  axios.post(`${url}/eventnotification`, obj);
};

const createEvent = (artistId, eventObj) => (
  axios.post(`${url}/artist/event/${artistId}`, eventObj)
);

const saveEvent = (fanId, eventId) => (
  axios.post(`${url}/fans/event`, {
    id: fanId,
    event_id: eventId,
  })
);

const followArtist = (fanId, artistId) => (
  axios.post(`${url}/fans/follow`, {
    id: fanId,
    artist_id: artistId,
  })
);

const deleteEvent = (fanId, eventId) => (
  axios.delete(`${url}/fans/event/${fanId}/${eventId}`)
);

const artistDeleteEvent = (artistId, eventId) => (
  axios.delete(`${url}/artists/event/${artistId}/${eventId}`)
);

const unfollowArtist = (fanId, artistId) => (
  axios.delete(`${url}/fans/follow/${fanId}/${artistId}`)
);

/* *** PUT REQUESTS *** */
const editFanProfile = (fanId, fanProfile) => (
  axios.put(`${url}/fan/profile/${fanId}`, fanProfile)
);

const editArtistProfile = (artistId, artistProfile) => {
  return axios.put(`${url}/artist/profile/${artistId}`, artistProfile, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
};

const search = (query) => (
  axios.get(`${url}/search?query=${query}`)
);

const apiMasters = {
  getFanDetails,
  getArtistDetails,
  getHomePageInfo,
  getHomePageGenre,
  searchHomePageGenre,
  getUserInfo,
  getEvents,
  getEvent,
  registerUser,
  createEvent,
  saveEvent,
  followArtist,
  deleteEvent,
  unfollowArtist,
  editFanProfile,
  editArtistProfile,
  getFanDashBoard,
  search,
  checkEventRadius,
  artistDeleteEvent,
  sendEmail,
};

export default apiMasters;
