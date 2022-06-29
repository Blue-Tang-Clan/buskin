import React, { useState } from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DateRangeIcon from '@mui/icons-material/DateRange';

const Container = styled.div`
  display: flex;
  grid-template-columns: 40% 60%;
  gap:30px;

`;

const Tag = styled.div`
  width: 450px;
  height: 170px;
  background: white;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 70px 70px 0 70px;
  box-shadow: 4px 4px 5px 5px rgba(0,0,0, .08);
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  outline: none;
  border: none;
  border-radius: 50%;
  display: inline-block;
`;

const FollowedArtistsTag = styled(Circle)`
  background: #FFFaeb;
`;

const TotalFollowersTag = styled(Circle)`
  background: #f4f2fe;
`;

const SavedEventsTag = styled(Circle)`
  background: #eafaf4;
`;

const Icon = styled.div`
  padding: 38px;
`;

const Number = styled.div`
  font-size: 34px;
  color: #2E3B52;
  font-weight: 900;
`;

const Text = styled.div`
  font-size: 22px;
  color: #A6ACBE;
  margin-top: 10px;
`;

function SavedEvents(number) {
  return (
    <Tag>
      <Container>
        <SavedEventsTag>
          <Icon>
            <DateRangeIcon sx={{ color: "#2ED297" }} />
          </Icon>
        </SavedEventsTag>
        <div>
          <Number>
            {number}
          </Number>
          <Text>
            Saved events
          </Text>
        </div>
      </Container>
    </Tag>
  );
}

function FollowedArtists(number) {
  return (
    <Tag>
      <Container>
        <FollowedArtistsTag>
          <Icon>
            <FavoriteBorderIcon sx={{ color: "#FFB800" }} />
          </Icon>
        </FollowedArtistsTag>
        <div>
          <Number>
            {number}
          </Number>
          <Text>
            Total followed artists
          </Text>
        </div>
      </Container>
    </Tag>
  );
}

function TotalFollowers(number) {
  return (
    <Tag>
      <Container>
        <TotalFollowersTag>
          <Icon>
            <PermIdentityIcon sx={{ color: "#6F52ED" }} />
          </Icon>
        </TotalFollowersTag>
        <div>
          <Number>
            {number}
          </Number>
          <Text>
            Total followers
          </Text>
        </div>
      </Container>
    </Tag>
  );
}

export { SavedEvents, FollowedArtists, TotalFollowers };
