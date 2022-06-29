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

export default function NavBar({ userType, setUserType, userId }) {
  const { setPage } = useContext(TopContext);
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

  return (
    <Nav>
      <div onClick={goHome} onKeyDown={(e) => keyDown(e)} role='button' tabIndex={0}>
        <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/9dd5c510445465.560e519c94453.jpg' alt='thumbnail' height='90px' />
      </div>
      <div>
        <SearchBar />
      </div>
      {userType === 'anonymous' ? (
        <GenreTag>
          <RegisterModal setUserType={setUserType} />
        </GenreTag>
      ) : (
        <UserSettingContainer>
          {userType === 'artist' ? (
            <UserSettingContainer>
              <div>
                <div>
                  <label>Name</label>
                </div>
                <div>
                  <label>Artist</label>
                </div>
              </div>
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Dashboard</MenuItem>
              </Menu>
            </UserSettingContainer>
          ) : (
            <UserSettingContainer>
              <div>
                <div>
                  <span>Name</span>
                </div>
                <div>
                  <span>Fan</span>
                </div>
              </div>
              <UserImg src='https://i.natgeofe.com/n/02ed6887-d7a3-4f95-b42b-6c2ad57c5e48/giraffes-standoff_3x4.jpg' alt='Avatar' />
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Dashboard</MenuItem>
              </Menu>
            </UserSettingContainer>
          )}
          <NotificationsNoneIcon fontSize='large' sx={{ color: '#C9CED6' }} />
          <ExitToAppIcon fontSize='large' sx={{ color: '#C9CED6' }} onClick={() => setUserType('anonymous')} />
        </UserSettingContainer>
      )}
    </Nav>
  );
}
