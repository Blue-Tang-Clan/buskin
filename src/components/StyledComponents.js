import styled from 'styled-components';

const PageContainer = styled.div`
  margin: 0 5% 0 5%;
`;

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`;

const Button = styled.div`
  padding: 20px;
  width: 150px;
  color: #373B53;
  font-size: 18px;
  box-shadow: 0px 0px 3px 3px rgba(0,0,0, .1);
  border-radius: 3px;
  &:hover {
    background-color: #0094B6;
    color: white;
    cursor: pointer;
  };
`;

const HomePageGenreTag = styled.div`
  padding: 10px 14px;
  color: #373B53;
  font-size: 14px;
  box-shadow: 0px 0px 3px 3px rgba(0,0,0, .1);
  border-radius: 10px;
  &:hover {
    background-color: #0094B6;
    color: white;
    cursor: pointer;
  };
  white-space: nowrap;
  display: inline-block;
  text-align: center;
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
  &:hover {
    cursor: pointer;
  };
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
  &:hover {
    cursor: pointer;
  };
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

const UserImg = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
`;

const Nav = styled.div`
  background: white;
  height: 85px;
  display: grid;
  grid-template-columns: 25% auto 10%;
  padding-top: 20px;
  gap: 30px;
`;

const UserSettingContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ArtistInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyleP = styled.p`
  color: #808080;
  font-size: 0.75em;
`;

const GenreTitle = styled.div`
  padding: 0;
  margin: 0;
  color: #808080;
  font-size: 0.75em;
`;

// EVENT PAGE SPECIFIC STYLING
const EventPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-right: 5%;
`;

const EventHeaderContainer = styled.div`
display: flex;
width: 100%;
max-height: 500px;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
`;

const EventPageImg = styled.img`
  width: 100%;
  max-height: 500px;
  max-width: 500px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const SaveEventButton = styled.button`
  background-color: lightblue;
  border-style: none;
  width: 100%;
  max-width: 500px;
  &:hover {
    background-color: pink;
    cursor: pointer;
  };
`;

const EventPageArtistPic = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
`;

const EventButtonContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 500px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

export {
  PageContainer,
  HomeContainer,
  Button,
  TagContainer,
  ArtistImg,
  ArtistImgContainer,
  EventImg,
  Container,
  InfoContainer,
  UserImg,
  Nav,
  UserSettingContainer,
  ArtistInfoContainer,
  StyleP,
  GenreTitle,
  HomePageGenreTag,
  EventPageContainer,
  EventHeaderContainer,
  EventPageImg,
  SaveEventButton,
  EventPageArtistPic,
  EventButtonContainer,
};
