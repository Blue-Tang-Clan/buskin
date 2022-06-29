import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { GenreTag } from './StyledComponents.js';
import RegisterModal from './Auth/RegisterModal.jsx';
import { TopContext } from './App.jsx';
import SearchBar from './SearchBar.jsx';

const Nav = styled.div`
  background: white;
  height: 50px;
  display: flex;
  // grid-template-columns: 30px 30px auto 50px;
  margin-top: 70px;
  gap: 30px;
`;

let searchId;

export default function NavBar({ setLogedIn }) {
  const { setPage } = useContext(TopContext);

  function goHome() {
    setPage('home');
  }

  function keyDown(e) {
    if (e.keyCode === 13) {
      goHome();
    }
  }

  return (
    <Nav>
      <div onClick={goHome} onKeyDown={(e) => keyDown(e)} role='button' tabIndex={0}>logo</div>
      <div onClick={goHome} onKeyDown={(e) => keyDown(e)} role='button' tabIndex={0}>BUSKIN'</div>
      <div>
        <SearchBar />
      </div>
      <GenreTag>
        <RegisterModal setLogedIn={setLogedIn} />
      </GenreTag>
    </Nav>
  );
}
