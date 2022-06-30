import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { TopContext } from './App.jsx';
import apiMasters from '../apiMasters.js';


const Search = styled.input`
z-index: ${({ searching }) => (searching ? '9999' : '1001')};
// position: fixed;
width: 40%;
height: 4rem;
background: white;
color: #C4C4C4;
outline: none;
border: none;
border-radius: 2rem;
padding: 0 3.5rem 0 3.5rem;
font-size: 1.2rem;
box-shadow: 0px 0px 6px 6px rgba(0,0,0, .1);
`;

const SearchResultsModal = styled.div`
z-index: 9998;
display: ${({ searching }) => (searching ? 'block' : 'none')};
position: absolute;
top: 0;
left: 0;
height: 100vh;
width:100vw;
background: rgba(0,0,0,0.5);
`;

const SearchResults = styled.div`
z-index: 9999;
display: ${({ searching }) => (searching ? 'block' : 'none')};
position: absolute;
width: 50%;
background: transparent;
margin-top: 3.6rem;
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
cursor: pointer;
`;

let searchId;

export default function SearchBar() {
  const { setPage, setPageId } = useContext(TopContext);
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

  function handleClick(page, id) {
    setPage(page);
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

  return (
    <>
      <Search type='text' onChange={(e) => handleSearch(e)} name='searchQueryInput' placeholder='Search for artists, events...' value={search} onClick={(e) => clearResults(e)} searching={searching} />
      <SearchResultsModal searching={searching} onClick={clearResults} />
      <SearchResults searching={searching}>
        {noResults
          ? <ResultsSection>No search results match your criteria</ResultsSection>
          : null}
        {artistsArr.length ? <ResultsSection>Artists</ResultsSection> : null}
        {artistsArr.length
          ? artistsArr.map((result) =>
            (
              <IndividualResult key={result.id} onClick={() => handleClick('artistProfile', result.id)}>
                {result.name}
              </IndividualResult>
            ))
          : null}
        {eventsArr.length ? <ResultsSection>Events</ResultsSection> : null}
        {eventsArr.length
          ? eventsArr.map((result) =>
            (
              <IndividualResult key={result.id} onClick={() => handleClick('event', result.id)}>
                {`${result.name} - `}
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
