import React, { useState, useEffect } from 'react';
import Home from './Home.jsx';
import ArtistProfile from './ArtistProfile.jsx';
import NavBar from './NavBar.jsx';
import Event from './Event.jsx';
import ArtistUpdate from './ArtistUpdate.jsx';
import FanDashBoard from './FanDashBoard.jsx';
import EditFanProfile from './EditFanProfile.jsx';
import EditProfile from './EditArtistProfile_styled.jsx';
import EditArtistProfile from './EditArtistProfile.jsx';
import RegisterModal from './Auth/RegisterModal.jsx';
import ArtistDashBoard from './ArtistDashBoard.jsx';
import { PageContainer, NavSpacer } from './StyledComponents.js';

export const TopContext = React.createContext();

export default function App() {
  const [userType, setUserType] = useState('anonymous');
  const [login, setLogin] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userNameApp, setUserName] = useState('');
  const [userPicApp, setUserPic] = useState('');
  const [showForm, setShowForm] = useState('Register');
  const [page, setPage] = useState('home');
  const [pageId, setPageId] = useState(1);

  useEffect(() => {
    if (document.cookie) {
      const cookies = {};
      document.cookie.split('; ')
        .map((cookie) => cookie.split('='))
        .forEach((cookie) => { cookies[cookie[0]] = cookie[1]; });
      setUserType(cookies.usertype);
      setUserId(cookies.id);
      setShowForm('Register');
      setUserName(cookies.username);
      setUserPic(cookies.pic);
    }
  });

  return (
    <>
      {/* components */}
      <TopContext.Provider value={{ page, setPage, pageId, setPageId, userType, setLogin, userId, setUserId }}>
        <div>
          <NavBar userType={userType} setUserId={setUserId} setUserType={setUserType} userNameApp={userNameApp} userPicApp={userPicApp} showForm={showForm} />
        </div>
        <NavSpacer />
        <PageContainer>
          {page === 'home' ? <Home setPage={setPage} setPageId={setPageId} /> : <></>}
          {page === 'artistProfile' ? <ArtistProfile setPage={setPage} setPageId={setPageId} /> : <></>}
          {page === 'fanDashboard' ? <FanDashBoard setPage={setPage} setPageId={setPageId} userId={userId} /> : <></>}
          {page === 'event' ? <Event /> : <></>}
          {page === 'artistDashboard' ? <ArtistDashBoard pageId={pageId} userId={userId} setPage={setPage} setPageId={setPageId} /> : <></>}
          {page === 'artistUpdate' ? <ArtistUpdate /> : <></>}
          {page === 'editArtistProfile' ? <EditProfile artistId={userId} setPage={setPage} /> : <></>}
          {page === 'editFanProfile' ? <EditFanProfile /> : <></>}
          {login
            ? (
              <RegisterModal
                setUserType={setUserType}
                setUserId={setUserId}
                anonymous={login}
                setLogin={setLogin}
              />
            )
            : null}
        </PageContainer>
      </TopContext.Provider>
    </>
  );
}
