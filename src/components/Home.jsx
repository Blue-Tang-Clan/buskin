import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ArtistBio from './ArtistBio.jsx';
import {
  HomeContainer, HomePageGenreTag, TagContainer, ArtistImg, MapInfo, ArtistInfo, TeamInfo, Title, Line1, Line2, MemberA, MemberB, MemberC, Audio,
} from './StyledComponents.js';
import { TopContext } from './App.jsx';
import HomeMap from './HomeMap.jsx';
import apiMasters from '../apiMasters.js';
import { ArtistImgList, EventImgList } from './HomePageImg.jsx';

export default function Home({
  setPage, setPageId, setUserType, setUserId, setShowForm, setUserName, setUserPic,
}) {
  const [genres, setGenres] = useState(['Blues', 'Classical', 'Country', 'Dance', 'Hip-Hop', 'Jazz']);
  const [artists, setArtists] = useState([]);
  const [poplarArtist, setPopolarArtist] = useState([]);
  const [comingEvent, setComingEvent] = useState([]);
  const [localEvent, setLocalEvent] = useState([]);
  const [talent, setTalent] = useState({
    name: 'Monica',
    bio: 'ssssssssssssssssssssssss',
    genre: 'Jazz',
    instrument: 'Piano',
  });
  const handleFilterGenre = (e) => {
    apiMasters.searchHomePageGenre(e.target.innerHTML)
      .then((result) => setArtists(result.data));
  };

  useEffect(() => {
    apiMasters.getHomePageInfo()
      .then((result) => {
        setTalent({
          name: result.data.talent.artist_name,
          bio: result.data.talent.bio,
          genre: result.data.talent.genre,
          instrument: result.data.talent.instrument,
          pic: result.data.talent.pic,
        });
        setPopolarArtist(result.data.artists);
        setComingEvent(result.data.coming_events);
        setLocalEvent(result.data.local_events);
      })
      .then(() => {
        apiMasters.getHomePageGenre()
          .then((result) => {
            const arr = [];
            result.data.forEach((row) => arr.push(row.genres));
            setGenres(arr);
          });
      });
    console.log('cookies: ', document.cookie);
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
  }, []);

  return (
    <HomeContainer>
      <MapInfo>
        <h3>Find an event near you</h3>
        <HomeMap />
        <br />
        <h3>Popular Events in New York City, NY</h3>
        <h4>What's happening around you</h4>
        <EventImgList EventArr={localEvent} xs={1} setPage={setPage} setPageId={setPageId} />
        <br />
        <h3>Upcoming Performances</h3>
        <h4>Save these events before too late</h4>
        <EventImgList EventArr={comingEvent} xs={1} setPage={setPage} setPageId={setPageId} />
      </MapInfo>
      <ArtistInfo>
        <div onClick={() => { setPage('artistProfile'); }}>
          <h3>Fresh Talent</h3>
          <div>
            <ArtistBio talent={talent} />
            <Audio src='retrosoul.mp3' type='audio/mp3' controls />
          </div>
        </div>
        <div>
          <h3>Popular Genres</h3>
          <TagContainer>
            {genres.map((genre, i) => <HomePageGenreTag key={i} value={genre} onClick={handleFilterGenre}>{genre}</HomePageGenreTag>)}
          </TagContainer>
          <ArtistImgList ArtistArr={artists} xs={1} setPage={setPage} setPageId={setPageId} />
          <h3>Popular Artists</h3>
          <ArtistImgList ArtistArr={poplarArtist} xs={1} setPage={setPage} setPageId={setPageId} />
        </div>
      </ArtistInfo>
      <TeamInfo>
        <Title>
          <h3>Development Team</h3>
        </Title>
        <Line1>
          <div>
            <h4>PM</h4>
            <ArtistImg src='https://avatars.githubusercontent.com/u/53981746?v=4' />
            <p>Nikko Elliott</p>
          </div>
          <div>
            <h4>DB</h4>
            <ArtistImg src='https://ca.slack-edge.com/T01J1BRG8E4-U03AZBGUUBD-f8c035e2c3aa-512' />
            <p>Yaokai Dong</p>
          </div>
        </Line1>
        <Line2>
          <MemberA>
            <div>
              <h4>Architect</h4>
              <ArtistImg src='https://ca.slack-edge.com/T01J1BRG8E4-U03AJP0K0BH-eb4e28704fac-512' />
              <p>Utku Ozkan</p>
            </div>
            <div>
              <h4>Architect</h4>
              <ArtistImg src='https://ca.slack-edge.com/T01J1BRG8E4-U03AJP0K0BH-eb4e28704fac-512' />
              <p>Fangzhuo Xi</p>
            </div>
          </MemberA>
          <MemberB>
            <div>
              <h4>UI</h4>
              <ArtistImg src='https://ca.slack-edge.com/T01J1BRG8E4-U03BBV9T3LZ-64df3c9dd915-512' />
              <p>Yao Yu</p>
            </div>
            <div>
              <h4>UI</h4>
              <ArtistImg src='https://ca.slack-edge.com/T01J1BRG8E4-U03AZB62PFC-338e8412806f-512' />
              <p>Val Pizzo</p>
            </div>
          </MemberB>
          <MemberC>
            <div>
              <h4>UI</h4>
              <ArtistImg src='https://ca.slack-edge.com/T01J1BRG8E4-U03AZB62PFC-338e8412806f-512' />
              <p>Kedir Zeinu</p>
            </div>
            <div>
              <h4>UI</h4>
              <ArtistImg src='https://ca.slack-edge.com/T01J1BRG8E4-U03AZB62PFC-338e8412806f-512' />
              <p>Yuki Ogawa</p>
            </div>
          </MemberC>
        </Line2>
      </TeamInfo>
    </HomeContainer>
  );
}
