import styled from 'styled-components';

const PageContainer = styled.div`
  margin: 0 5% 0;
  width: 90%;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
`;

const CarouselContainer = styled.div`
  flex: 1 0 auto;
  max-height: 600px;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 56% auto;
  gap: 10%;
  grid-template-areas: "a b" "c c";
  grid-template-rows: 1fr min-content;
`;

const Button = styled.div`
  padding: 16px 20px 15px 20px;
  width: 180px;
  margin-top: 14px;
  color: #2E3B52;
  font-size: 18px;
  font-weight: 400;
  box-shadow: 0px 0px 6px 6px rgba(0,0,0, .1);
  border-radius: 3px;
  &:hover {
    background-image: linear-gradient(to right, #667eea, #764ba2);
    color: white;
    cursor: pointer;
    font-weight: 600;
  };
`;

const HomePageGenreTag = styled.div`
  padding: 12px 16px 10px 17px;
  color: #373B53;
  font-size: 14px;
  border: 1.5px solid #2E3B52;
  border-radius: 6px;
  &:hover {
    background-image: linear-gradient(to right, #667eea, #764ba2);
    color: white;
    cursor: pointer;
    border: 1.5px solid #F8F8FB;
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
  height:120px;
  width: 120px;
  border-radius: 50%;
  object-fit: cover;
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
  object-fit: cover;
  &:hover {
    cursor: pointer;
  };
`;

const FreshTalentImg = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 10px;
  object-fit: cover;
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
<<<<<<< HEAD
  height: 100px;
  display: grid;
  grid-template-columns: 25% auto 300px 20px;
  margin-top: -5px;
=======
  height: 95px;
  display: grid;
  grid-template-columns: 400px auto 270px;
  margin-top: -10px;
>>>>>>> 0dab6d662902e795f35cd66fe4429d9dcb9d32b0
  margin-left: -10px;
  padding-top: 10px;
  gap: 30px;
`;

const NavSpacer = styled.div`
  width: 100%;
  height: 85px;
`;

const UserSettingContainer = styled.div`
  margin-top: 5px;
  flex-direction: row;
  justify-content: flex-end;
  display: flex;
  gap: 25px;
`;

const UserNav = styled.div`
  margin-top: 10px;
  right: 0px;
  text-align: right;
`;

const SettingNav = styled.div`
  margin-top: 13px;
`;

const NotificationNav = styled.div`
  margin-top: 18px;
`;

const LogoutNav = styled.div`
  margin-top: 18px;
  margin-right: 24%;
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
  display: grid;
  gap: 10px;
  grid-template-areas: "blank member blank";
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
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

const MemberB = styled.div`
  grid-area: B;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

const MemberC = styled.div`
  grid-area: C;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

const MemberD = styled.div`
  grid-area: member;
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
const EventColContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-right: 5%;
`;

const EventRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const EventPageArtistPic = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
`;

export {
  PageContainer,
  BodyContainer,
  CarouselContainer,
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
  EventColContainer,
  EventRowContainer,
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
  MemberD,
  Audio,
  UserNav,
  LogoutNav,
  SettingNav,
  NotificationNav,
};
