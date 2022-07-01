import React, { useState, useContext } from 'react';
import { EventContext } from './EventList.jsx';
import { SavedEvents } from './DashBoardTag.jsx';
import styled from 'styled-components';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Tag, Container, SavedEventsTag, Icon } from './DashBoardTag.jsx';

const EventTag = styled(Tag)`
  padding-top: 50px;
  padding-bottom: 50px;

  width: 650px;
  height: auto;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
  }
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

export default function EventListItem({ setPage, setPageId }) {
  const event = useContext(EventContext);

  const renderEventPage = () => {
    setPageId(event.id);
    setPage('event');
  };

  return (
    <EventTag onClick={renderEventPage}>
      <Container>
        <SavedEventsTag style={{marginTop: '30px'}}>
          <Icon>
            <DateRangeIcon sx={{ color: '#2ED297' }} />
          </Icon>
        </SavedEventsTag>
        <div>
          <Number>
            {event.name}
          </Number>
          <Text>
            {`${event.city}, ${event.state}`}
            <br />
            {event.street}
            <br />
            {`${event.date} (${event.start_time} ~ ${event.end_time})`}
          </Text>
        </div>
      </Container>
    </EventTag>
  );
}
