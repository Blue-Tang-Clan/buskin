import React, { useState } from 'react';
import Home from './Home.jsx';
import ArtistProfile from './ArtistProfile.jsx';
import NavBar from './NavBar.jsx';
import UserProfile from './UserProfile.jsx';
import Event from './Event.jsx';
import ArtistUpdate from './ArtistUpdate.jsx';
import FanDashBoard from './FanDashBoard.jsx';
import EditFanProfile from './EditFanProfile.jsx';
import EditArtistProfile from './EditArtistProfile.jsx';
import ArtistDashBoard from './ArtistDashBoard.jsx';


export const TopContext = React.createContext();

export default function App() {
  const [userType, setUserType] = useState('anonymous');
  const [userId, setUserId] = useState();
  const [page, setPage] = useState('artistDashboard');
  const [pageId, setPageId] = useState(1);

  return (
    <>
      {/* components */}
      <TopContext.Provider value={{page, setPage, pageId, setPageId}}>
        <div>
          <NavBar setUserType={setUserType} setUserId={setUserId} />
        </div>
        {page === 'home' ? <Home /> : <></>}
        {page === 'artistProfile' ? <ArtistProfile /> : <></>}
        {page === 'fanDashboard' ? <FanDashBoard setPage={setPage} setPageId={setPageId} /> : <></>}
        {page === 'userProfile' ? <UserProfile /> : <></>}
        {page === 'event' ? <Event /> : <></>}
        {page === 'artistDashboard' ? <ArtistDashBoard pageId={pageId}/> : <></>}
        {page === 'artistUpdate' ? <ArtistUpdate /> : <></>}
        {page === 'editArtistProfile' ? <EditArtistProfile /> : <></> }
        {page === 'editFanProfile' ? <EditFanProfile /> : <></> }
      </TopContext.Provider>
    </>
  );
}
