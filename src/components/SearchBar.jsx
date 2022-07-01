import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { TopContext } from './App.jsx';
import apiMasters from '../apiMasters.js';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PinDropIcon from '@mui/icons-material/PinDrop';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Search = styled.input`
z-index: ${({ searching }) => (searching ? '9999' : '1001')};
position: fixed;
width: 40%;
height: 3.9rem;
background: white;
color: #C4C4C4;
outline: none;
border: none;
border-radius: 2.1rem;
padding: 0 3.5rem 0 3.5rem;
font-size: 1.2rem;
box-shadow: 0px 0px 6px 6px rgba(0,0,0, .1);
margin-top: 12px;
`;

const SearchResultsModal = styled.div`
z-index: 9997;
display: ${({ searching }) => (searching ? 'block' : 'none')};
position: fixed;
top: 0;
left: 0;
height: 4000px;
width: 4000px;
background: rgba(0,0,0,0.5);
`;

const SearchResults = styled.div`
z-index: 9998;
display: ${({ searching }) => (searching ? 'block' : 'none')};
position: absolute;
top: -25px;
width: 40%;
background: #F8F8FB;
margin-top: 5rem;
border-radius: 10px;
`;

const ResultsSection = styled.div`
width: 100%;
height: 2.8rem;
background: lightgrey;
font-size: 1.5rem;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
background-image: linear-gradient(to right, #667eea, #764ba2);
color: white;
`;

const IndividualResult = styled.div`
width: 100%;
height: 2.8rem;
background: transparent;
font-size: 1.5rem;
cursor: pointer;
padding-top: 10px;
&:hover {
  background-color: #FFB800;
}
`;

let searchId;

export default function SearchBar() {
  const { setPage, setPageId, page } = useContext(TopContext);
  const [search, setSearch] = useState('');
  const [artistsArr, setArtistsArr] = useState([]);
  const [eventsArr, setEventsArr] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [searching, setSearching] = useState(false);

  function handleSearchDisplay(displaySearch, displayNone, artists, event, slice) {
    setSearching(displaySearch);
    setNoResults(displayNone);
    setArtistsArr([...artists.slice(0, slice)]);
    setEventsArr([...event.slice(0, slice)]);
  }

  function handleClick(pageName, id) {
    setPage(pageName);
    setPageId(id);
    setSearch('');
    handleSearchDisplay(false, false, [], [], 0);
  }

  function clearResults(e) {
    if (e.target.name === 'searchQueryInput' && search) {
      setSearching(true);
    } else {
      setSearching(false);
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
              handleSearchDisplay(true, false, artists, event, 5);
            } else if (artists) {
              handleSearchDisplay(true, false, artists, [], 10);
            } else if (event) {
              handleSearchDisplay(true, false, [], event, 10);
            } else {
              handleSearchDisplay(false, false, [], [], 0);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }, 300);
    } else {
      clearTimeout(searchId);
      setSearch('');
      handleSearchDisplay(false, false, [], [], 0);
    }
  }

  useEffect(() => {
    setSearch('');
    handleSearchDisplay(false, false, [], [], 0);
  }, [page]);

  return (
    <>
      <Search type='text' onChange={(e) => handleSearch(e)} name='searchQueryInput' placeholder='Search for artists, events...' value={search} onClick={(e) => clearResults(e)} searching={searching} />
      <SearchResultsModal searching={searching} onClick={clearResults} />
      <SearchResults searching={searching}>
        {noResults
          ? <ResultsSection style={{ marginTop: '20px' }}>No search results match your criteria</ResultsSection>
          : null}
        {artistsArr.length ? (
          <ResultsSection style={{ paddingTop: '30px' }}>
            <QueueMusicIcon style={{ paddingLeft: '30px' }} sx={{ color: 'white' }} />
            {' Artists'}
          </ResultsSection>
        ) : null}
        {artistsArr.length
          ? artistsArr.map((result) => (
            <IndividualResult key={result.id} onClick={() => handleClick('artistProfile', result.id)}>
              <PersonOutlineIcon style={{ paddingLeft: '30px' }} />
              {` ${result.name}`}
            </IndividualResult>
          ))
          : null}
        {eventsArr.length ? (
          <ResultsSection style={{ paddingTop: '20px' }}>
            <DateRangeIcon style={{ paddingLeft: '30px' }} sx={{ color: 'white' }} />
            {' Events'}
          </ResultsSection>
        ) : null}
        {eventsArr.length
          ? eventsArr.map((result) => (
            <IndividualResult key={result.id} onClick={() => handleClick('event', result.id)}>
              <PinDropIcon style={{ paddingLeft: '30px' }} />
              {` ${result.name} - `}
              City:
              {` ${result.city}, `}
              State:
              {` ${result.state}`}
            </IndividualResult>
          ))
          : null}
      </SearchResults>
    </>
  );
}
