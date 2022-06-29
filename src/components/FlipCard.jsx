import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  text-align: center;
  width: 155px;
  height: 155px;
  border-radius: 50%;
  ${'' /* width: 25%; */}
  ${'' /* display: inline-block; */}
  background-color: transparent;
  perspective: 1000px;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 50%;
  background-color: transparent;
  border: transparent;
  color: black;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
`;

export default function FlipCard({ left, right }) {
  return (
    <Card>
      <CardInner>
        <CardFront>
          {left}
        </CardFront>
        <CardBack>
          {right}
        </CardBack>
      </CardInner>
    </Card>
  );
}
