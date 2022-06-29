import axios from 'axios';

const url = 'http://localhost:3001';

/* *** GET REQUESTS *** */

// GET fan profile & dashboard information
const getFanDetails = (fanId) => (
  axios.get(`${url}/fan/details/${fanId}`)
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
const getHomePageGenre = (genre) => (
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

// const createEvent = (
//   artistId,
//   name,
//   street,
//   city,
//   state,
//   longitude,
//   latitude,
//   date,
//   startTime,
//   endTime,
// ) => (
//   axios.post(`${url}/artists/event/${artistId}`, {
//     name,
//     street,
//     city,
//     state,
//     longitude,
//     latitude,
//     date,
//     start_time: startTime,
//     end_time: endTime,
//   })
// );

const createEvent = (artistId, eventObj) => {
  console.log(eventObj);
  return axios.post(`${url}/artist/event/${artistId}`, eventObj);
};

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
  axios.post(`${url}/fans/event/${fanId}/${eventId}`)
);

const unfollowArtist = (fanId, artistId) => (
  axios.delete(`${url}/fans/follow/${fanId}/${artistId}`)
);

/* *** PUT REQUESTS *** */
const editFanProfile = (fanId, fanProfile) => (
  axios.put(`${url}/fan/profile/${fanId}`, fanProfile)
);

const editArtistProfile = (artistId, artistProfile) => (
  axios.put(`${url}/artist/profile/${artistId}`, artistProfile)
);

const search = (query) => (
  axios.get(`${url}/search?query=${query}`)
);

const apiMasters = {
  getFanDetails,
  getArtistDetails,
  getHomePageInfo,
  getHomePageGenre,
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
  search,
};

export default apiMasters;
