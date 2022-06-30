import React, { useState, useContext } from 'react';
import { TopContext } from './App.jsx';
import SearchBar from './SearchBar.jsx';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
  GenreTag, UserImg, Nav, UserSettingContainer,
} from './StyledComponents.js';
import RegisterModal from './Auth/RegisterModal.jsx';

export default function NavBar({ setUserType, setUserId }) {
  const [userName, setUserName] = useState('');
  const [userPic, setUserPic] = useState('');
  const { setPage, userType } = useContext(TopContext);
  const [anchorEl, setAnchorEl] = useState(null);
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
    setPage('home');
    setUserType('anonymous');
  };

  return (
    <Nav>
      <div onClick={goHome} onKeyDown={(e) => keyDown(e)} role='button' tabIndex={0}>
        <img src='https://i.ibb.co/kMc2nsf/Screen-Shot-2022-06-30-at-10-52-20-AM-copy.png' alt='logo' height='85px' style={{ cursor: "pointer" }} />
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
        />
      ) : (
        <UserSettingContainer>
          {userType === 'artist' ? (
            <UserSettingContainer>
              <div>
                <div>
                  <label>{userName}</label>
                </div>
                <div>
                  <label>Artist</label>
                </div>
              </div>
              <UserImg src={userPic.length ? userPic : 'https://media.istockphoto.com/vectors/vinyl-records-vector-id542290570?k=20&m=542290570&s=612x612&w=0&h=nKQYVVUXByWoMZ6YXH-thC8HzPTDiwfw-MODsmi6cTc='} alt='thumbnail' />
              <ArrowDropDownIcon fontSize="large" sx={{ color: "#C9CED6" }} onClick={handleClick} />
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
                <MenuItem onClick={goFanProfile}>Edit profile</MenuItem>
                <MenuItem onClick={goFanDashboard}>Dashboard</MenuItem>
              </Menu>
            </UserSettingContainer>
          )}
          <NotificationsNoneIcon fontSize='large' sx={{ color: '#C9CED6' }} />
          <ExitToAppIcon fontSize='large' sx={{ color: '#C9CED6' }} onClick={goLogout} />
        </UserSettingContainer>
      )}
    </Nav>
  );
}
