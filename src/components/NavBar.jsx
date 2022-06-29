import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { GenreTag } from './StyledComponents.js';
import RegisterModal from './Auth/RegisterModal.jsx';
import { TopContext } from './App.jsx';
import apiMasters from '../apiMasters.js';

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

const SearchResults = styled.div`
  z-index: 9999;
  position: absolute;
  width: 50%;
  background: transparent;
`;

const ResultsSection = styled.div`
  width: 100%;
  height: 2.8rem;
  background: lightgrey;
  border-right-style: double;
  border-left-style: double;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-top-style: solid;
  font-size: 1.5rem;
`;

const IndividualResult = styled.div`
  width: 100%;
  height: 2.8rem;
  background: white;
  border-right-style: double;
  border-left-style: double;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  font-size: 1.5rem;
`;

let searchId;

export default function NavBar({ setLogedIn }) {
  const { setPage } = useContext(TopContext);
  const [search, setSearch] = useState('');
  const [artistsArr, setArtistsArr] = useState([]);
  const [eventsArr, setEventsArr] = useState([]);
  const [noResults, setNoResults] = useState(false);

  function goHome() {
    setPage('home');
  }

  function keyDown(e) {
    if (e.keyCode === 13) {
      goHome();
    }
  }

  function handleSearch(e) {
    if (e.target.value) {
      setSearch(e.target.value);
      clearTimeout(searchId);

      searchId = setTimeout(() => {
        apiMasters.search(e.target.value)
          .then((data) => {
            const { artists, event } = data.data.json_build_object;
            if (artists && event) {
              setNoResults(false);
              setArtistsArr([...artists.slice(0, 5)]);
              setEventsArr([...event.slice(0, 5)]);
            } else if (artists) {
              setNoResults(false);
              setArtistsArr([...artists.slice(0, 10)]);
              setEventsArr([]);
            } else if (event) {
              setNoResults(false);
              setEventsArr([...event.slice(0, 10)]);
              setArtistsArr([]);
            } else {
              setNoResults(true);
              setArtistsArr([]);
              setEventsArr([]);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }, 300);
    } else {
      clearTimeout(searchId);
      setSearch(e.target.value);
      setNoResults(false);
      setArtistsArr([]);
      setEventsArr([]);
    }
  }

  return (
    <Nav>
      <div onClick={goHome} onKeyDown={(e) => keyDown(e)} role='button' tabIndex={0}>logo</div>
      <div onClick={goHome} onKeyDown={(e) => keyDown(e)} role='button' tabIndex={0}>BUSKIN'</div>
      <div>
        <Search type='text' onChange={(e) => handleSearch(e)} name='searchQueryInput' placeholder='Search for new artists, events...' value={search} />
        <SearchResults>
          {noResults
            ? <ResultsSection>No search results match your criteria</ResultsSection>
            : null}
          {artistsArr.length ? <ResultsSection>Artists</ResultsSection> : null}
          {artistsArr.length
            ? artistsArr.map((result) =>
              (
                <IndividualResult key={result.id}>
                  {result.name}
                </IndividualResult>
              ))
            : null}
          {eventsArr.length ? <ResultsSection>Events</ResultsSection> : null}
          {eventsArr.length
            ? eventsArr.map((result) =>
              (
                <IndividualResult key={result.id}>
                  {`${result.name} - `}
                  City:
                  {` ${result.city}, `}
                  State:
                  {` ${result.state}`}
                </IndividualResult>
              ))
            : null}
        </SearchResults>
      </div>
      <GenreTag>
        <RegisterModal setLogedIn={setLogedIn} />
      </GenreTag>
    </Nav>
  );
}
