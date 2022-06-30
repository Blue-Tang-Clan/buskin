import styled from 'styled-components';

const PageContainer = styled.div`
  margin: 0 5% 0 5%;
`;

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
  };
`;
const HomePageGenreTag = styled.div`
  padding: 10px 14px;
  color: 373B53;
  font-size: 14px;
  box-shadow: 0px 0px 3px 3px rgba(0,0,0, .1);
  border-radius: 10px;
  font-family: Arial, Helvetica Neue Thin, sans-serif;
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

const UserImg = styled.img`
height: 70px;
width: 70px;
border-radius: 50%;
`;

const Nav = styled.div`
  background: white;
  height: 75px;
  display: grid;
  grid-template-columns: 300px auto 400px;
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

export {
  PageContainer,
  HomeContainer,
  GenreTag,
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
};
