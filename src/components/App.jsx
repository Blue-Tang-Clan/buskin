import React, { useState } from 'react';
import Home from './Home.jsx';
import ArtistProfile from './ArtistProfile.jsx';
import NavBar from './NavBar.jsx';
import UserProfile from './UserProfile.jsx';
import Event from './Event.jsx';
import ArtistUpdate from './ArtistUpdate.jsx';
import EditFanProfile from './EditFanProfile.jsx';
import EditArtistProfile from './EditArtistProfile.jsx'

export const TopContext = React.createContext();

export default function App() {
  const [logedIn, setLogedIn] = useState(false);
  const [page, setPage] = useState('home');
  const [artistId, setArtistId] = useState(1);
  return (
    <>
      {/* components */}
      <TopContext.Provider value={{page, setPage, artistId, setArtistId}}>
        <div>
          <NavBar setLogedIn={setLogedIn} />
        </div>
        {page === 'home' ? <Home /> : <></>}
        {page === 'artistProfile' ? <ArtistProfile /> : <></>}
        {page === 'fanDashboard' ? <fanDashboard /> : <></>}
        {page === 'userProfile' ? <UserProfile /> : <></>}
        {page === 'event' ? <Event /> : <></>}
        {page === 'artistDashboard' ? <ArtistProfile /> : <></>}
        {page === 'artistUpdate' ? <ArtistUpdate /> : <></>}
        {page === 'editArtistProfile' ? <EditArtistProfile /> : <></> }
        {page === 'editFanProfile' ? <EditFanProfile /> : <></> }
      </TopContext.Provider>
    </>
  );
}
