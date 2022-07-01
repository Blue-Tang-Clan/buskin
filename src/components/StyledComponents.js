import styled from 'styled-components';

const PageContainer = styled.div`
  margin: 0 5% 0;
  width: 90%;
`;

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 56% auto;
  gap: 10%;
  grid-template-areas: "a b" "c c";
  grid-template-rows: 1fr min-content;
`;

const Button = styled.div`
  padding: 20px;
  width: 150px;
  margin-top: 10px;
  color: #373B53;
  font-size: 18px;
  box-shadow: 0px 0px 6px 6px rgba(0,0,0, .1);
  border-radius: 3px;
  &:hover {
    background-color: #0094B6;
    color: white;
    cursor: pointer;
  };
`;

const HomePageGenreTag = styled.div`
  padding: 12px 16px 10px 17px;
  color: #373B53;
  font-size: 14px;
  // box-shadow: 0px 0px 3px 3px rgba(0,0,0, .1);
  border: 1.5px solid #2E3B52;
  border-radius: 6px;
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
  flex-wrap: wrap;
  gap: 10px;
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
  height: 120px;
  width: 120px;
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
  margin-bottom: 40px;
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
  z-index: 1001;
  background: white;
  position: fixed;
  width: 100vw;
  height: 90px;
  display: grid;
  grid-template-columns: 22% auto 20%;
  margin-top: -10px;
  margin-left: -10px;
  padding-top: 10px;
  gap: 30px;
`;

const NavSpacer = styled.div`
  width: 100%;
  height: 85px;
`;

const UserSettingContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ArtistInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MapInfo = styled.div`
  grid-area: a;
  grid-template-rows: auto;
`;

const ArtistInfo = styled.div`
  grid-area: b;
  grid-template-rows: auto;
`;

const TeamInfo = styled.div`
  grid-area: c;
  display: grid;
  left: 50%;
  grid-template-areas: "title title title" "a a a" "b b b";
`;
const Title = styled.div`
  grid-area: title;
`;
const Line1 = styled.div`
  grid-area: a;
  display: flex;
  gap: 10px;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`;
const Line2 = styled.div`
  grid-area: b;
  display: grid;
  grid-template-areas: "A B C";
`;

const MemberA = styled.div`
  grid-area: A;
  display: flex;
  text-align: center;
  flex-direction: row;
  gap: 10px;
`;
const MemberB = styled.div`
  grid-area: B;
  display: flex;
  text-align: center;
  flex-direction: row;
  gap: 10px;
`;
const MemberC = styled.div`
  grid-area: C;
  display: flex;
  text-align: center;
  flex-direction: row;
  gap: 10px;
`;

const Audio = styled.audio`
  width: 100%;
  display: block;
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
max-height: 500px;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
`;

const EventPageArtistPic = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
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
  NavSpacer,
  UserSettingContainer,
  ArtistInfoContainer,
  HomePageGenreTag,
  EventPageContainer,
  EventHeaderContainer,
  EventPageArtistPic,
  FreshTalentImg,
  MapInfo,
  ArtistInfo,
  TeamInfo,
  Title,
  Line1,
  Line2,
  MemberA,
  MemberB,
  MemberC,
  Audio,
};
