import styled from 'styled-components';

const PageContainer = styled.div`
  margin: 0 5% 0;
  width: 90%;
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

const FreshTalentImg = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  };
`;

const Container = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 100px;
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
  HomePageGenreTag,
  FreshTalentImg,
};
