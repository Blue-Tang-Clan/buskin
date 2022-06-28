import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { GenreTag } from './StyledComponents.js';
import RegisterModal from './Auth/RegisterModal.jsx';
import { TopContext } from './App.jsx';

const Nav = styled.div`
  background: white;
  height: 50px;
  display: flex;
  // grid-template-columns: 30px 30px auto 50px;
  margin-top: 70px;
  gap: 30px;
`;

const Search = styled.input`
  width: 60%;
  height: 2.8rem;
  background: white;
  outline: none;
  border: none;
  border-radius: 1.625rem;
  padding: 0 3.5rem 0 1.5rem;
  font-size: 1rem;
  box-shadow: 0px 0px 6px 6px rgba(0,0,0, .1);
`;

export default function NavBar({ setLogedIn }) {
  const {setPage} = useContext(TopContext);

  function goHome() {
    setPage('home');
  }

  return (
    <Nav>
      <div onClick={goHome}>logo</div>
      <div onClick={goHome}>BUSKIN'</div>
      <div><Search type="text" name="searchQueryInput" placeholder="Search for new artists, events..." value="" /></div>
      <GenreTag>
        <RegisterModal setLogedIn={setLogedIn} />
      </GenreTag>
    </Nav>
  );
}
