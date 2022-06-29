import React, { useState } from 'react';
import Home from './Home.jsx';
import ArtistProfile from './ArtistProfile.jsx';
import NavBar from './NavBar.jsx';
import FanProfile from './FanProfile.jsx';
import Event from './Event.jsx';
import ArtistUpdate from './ArtistUpdate.jsx';
import FanDashBoard from './FanDashBoard.jsx';
import EditFanProfile from './EditFanProfile.jsx';
import EditArtistProfile from './EditArtistProfile.jsx';
import RegisterModal from './Auth/RegisterModal.jsx';
import ArtistDashBoard from './ArtistDashBoard.jsx';

export const TopContext = React.createContext();

export default function App() {
  const [userType, setUserType] = useState('anonymous');
  const [login, setLogin] = useState(false);
  const [userId, setUserId] = useState();
  const [page, setPage] = useState('home');
  const [pageId, setPageId] = useState(1);

  return (
    <>
      {/* components */}
      <TopContext.Provider value={{page, setPage, pageId, setPageId, userType, setLogin, userId, setUserId }}>
        <div>
          <NavBar userType={userType} setUserId={setUserId} setUserType={setUserType} />
        </div>
        {page === 'home' ? <Home /> : <></>}
        {page === 'artistProfile' ? <ArtistProfile setPage={setPage} setPageId={setPageId} /> : <></>}
        {page === 'fanDashboard' ? <FanDashBoard setPage={setPage} setPageId={setPageId} /> : <></>}
        {page === 'fanProfile' ? <FanProfile /> : <></>}
        {page === 'event' ? <Event /> : <></>}
        {page === 'artistDashboard' ? <ArtistDashBoard pageId={pageId}/> : <></>}
        {page === 'artistUpdate' ? <ArtistUpdate /> : <></>}
        {page === 'editArtistProfile' ? <EditArtistProfile /> : <></> }
        {page === 'editFanProfile' ? <EditFanProfile /> : <></> }
        {login
          ? <RegisterModal setUserType={setUserType} setUserId={setUserId} anonymous={login} />
          : null}
      </TopContext.Provider>
    </>
  );
}
