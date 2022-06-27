import axios from 'axios';

const url = '';

/* *** GET REQUESTS *** */
// POST user input is an obj that contains the username and password.
const getUserInfo = (user) => (
  axios.post(`${url}/login`, user)
);

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

const apiMasters = {
  getUserInfo,
  getFanProfile,
  getFanDashboard,
  getArtistProfile,
  getArtistDashboard,
  getHomePageInfo,
  getHomePageGenre,
};

export default apiMasters;
