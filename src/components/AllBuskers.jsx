import React from 'react';
import styled from 'styled-components';
import Busker from './Busker.jsx';

const AllBuskers = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default function AllBuskers ({ buskers }) {

  return (
    <AllBuskersContainer>
      {buskers.length ?
        buskers.map(busker => <Busker busker={busker} following={/*Not sure where this will come from yet*/}/>)
        : null}
    </AllBuskersContainer>
   )
}