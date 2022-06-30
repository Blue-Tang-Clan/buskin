import styled from 'styled-components';

const PageContainer = styled.div`
  margin: 0 5% 0;
  width: 90%;
`;

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-areas: "a b" "c c";
  grid-template-rows: 1fr min-content;
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
  z-index: 1001;
  background: white;
  position: fixed;
  width: 100vw;
  height: 85px;
  display: grid;
  grid-template-columns: 25% auto 10%;
  margin-top: -10px;
  margin-left: -10px;
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
// const MemberD = styled.div`
//   grid-area: d;
// `;
// const MemberE = styled.div`
//   grid-area: e;
// `;
// const MemberF = styled.div`
//   grid-area: f;
// `;
// const MemberG = styled.div`
//   grid-area: g;
// `;
// const MemberH = styled.div`
//   grid-area: h;
// `;

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
  // MemberD,
  // MemberE,
  // MemberF,
  // MemberG,
  // MemberH,
};
