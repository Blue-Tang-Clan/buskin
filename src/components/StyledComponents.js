import styled from 'styled-components';

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`;

const GenreTag = styled.div`
  padding: 10px 14px;
  color: 373B53;
  font-size: 14px;
  box-shadow: 0px 0px 3px 3px rgba(0,0,0, .1);
  border-radius: 3px;
  font-family: Arial, Helvetica Neue Thin, sans-serif;
  &:hover {
    background-color: #0094B6;
    color: white;
    cursor: pointer;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
`;

const ArtistImg = styled.img`
  height:150px;
  width: 150px;
  border-radius: 50%;
`;

const ArtistImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px
`;

const EventImg = styled.img`
  height: 180px;
  width: 180px;
  border-radius: 10px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export {
  HomeContainer, GenreTag, TagContainer, ArtistImg, ArtistImgContainer, EventImg, Container, InfoContainer,
};