import React, { useState, useContext, useEffect } from 'react';
import { TopContext } from './App.jsx';
import SearchBar from './SearchBar.jsx';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
  GenreTag, UserImg, Nav, UserSettingContainer, UserNav,
} from './StyledComponents.js';
import RegisterModal from './Auth/RegisterModal.jsx';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ListIcon from '@mui/icons-material/List';

export default function NavBar({ setUserType, setUserId, userNameApp, userPicApp, showForm }) {
  const [userName, setUserName] = useState('');
  const [userPic, setUserPic] = useState('');
  const { setPage, userType, setShowForm } = useContext(TopContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [alert, setAlert] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const goHome = () => {
    setPage('home');
  };
  const keyDown = (e) => {
    if (e.keyCode === 13) {
      goHome();
    }
  };
  const goArtistProfile = () => {
    setPage('editArtistProfile');
    setAnchorEl(null);
  };
  const goArtistDashboard = () => {
    setPage('artistDashboard');
    setAnchorEl(null);
  };
  const goFanProfile = () => {
    setPage('editFanProfile');
    setAnchorEl(null);
  };
  const goFanDashboard = () => {
    setPage('fanDashboard');
    setAnchorEl(null);
  };
  const goLogout = () => {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf('=');
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    setUserId(null);
    setShowForm('Register');
    setUserName('');
    setUserPic('');
    setPage('home');
    setUserType('anonymous');
  };

  useEffect(() => {
    if (userNameApp) {
      setUserName(userNameApp);
    }
    if (userPicApp) {
      setUserPic(userPicApp);
    } else {
      setUserPic('');
    }
  }, [userNameApp, userPicApp, showForm]);

  return (
    <Nav>
      <div onClick={goHome} onKeyDown={(e) => keyDown(e)} role='button' tabIndex={0}>
        <img src='https://i.ibb.co/Dw7T0Jb/Buskin-B2-copy.png' alt='logo' height='85px' style={{ cursor: "pointer" }} />
      </div>
      <div>
        <SearchBar />
      </div>
      {userType === 'anonymous' ? (
        <RegisterModal
          setUserType={setUserType}
          setUserId={setUserId}
          setUserName={setUserName}
          setUserPic={setUserPic}
          showFormApp={showForm}
        />
      ) : (
        <UserSettingContainer>
          {userType === 'artist' ? (
            <UserSettingContainer>
              <UserNav>
                <div>
                  <label>{userName}</label>
                </div>
                <div>
                  <label>Artist</label>
                </div>
              </UserNav>
              <div>
                <UserImg src={userPic.length ? userPic : 'https://media.istockphoto.com/vectors/vinyl-records-vector-id542290570?k=20&m=542290570&s=612x612&w=0&h=nKQYVVUXByWoMZ6YXH-thC8HzPTDiwfw-MODsmi6cTc='} alt='thumbnail' />
              </div>
              <UserNav style={{ cursor: 'pointer' }}>
                <Tooltip title="Setting">
                  <ListIcon fontSize="large" sx={{ color: "#C9CED6" }} onClick={handleClick} />
                </Tooltip>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={goArtistProfile}>Edit profile</MenuItem>
                  <MenuItem onClick={goArtistDashboard}>Dashboard</MenuItem>
                </Menu>
              </UserNav>
            </UserSettingContainer>
          ) : (
            <UserSettingContainer>
              <div>
                <div>
                  <span>{userName}</span>
                </div>
                <div>
                  <span>Fan</span>
                </div>
              </div>
              <UserImg src={userPic.length ? userPic : 'https://i.natgeofe.com/n/02ed6887-d7a3-4f95-b42b-6c2ad57c5e48/giraffes-standoff_3x4.jpg'} alt='thumbnail' />
              <ArrowDropDownIcon fontSize='large' sx={{ color: '#C9CED6' }} onClick={handleClick} />
              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                {userType === 'artist' ? <MenuItem onClick={goFanProfile}>Edit profile</MenuItem> : null}
                <MenuItem onClick={goFanDashboard}>Dashboard</MenuItem>
              </Menu>
            </UserSettingContainer>
          )}
          <div style={{ cursor: 'pointer' }}>
            <Tooltip title="Alert">
              <IconButton>
                <NotificationsNoneIcon fontSize='large' sx={{ color: '#C9CED6' }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Log Out">
              <IconButton>
                <ExitToAppIcon fontSize='large' sx={{ color: '#C9CED6' }} onClick={goLogout} />
              </IconButton>
            </Tooltip>
          </div>
        </UserSettingContainer>
      )}
    </Nav>
  );
}
