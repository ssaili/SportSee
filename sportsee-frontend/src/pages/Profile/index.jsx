import { Link } from "react-router-dom";
import Header from "../../components/Header";
import SideNavigationBar from "../../components/SideNavigationBar";
import USER_MAIN_DATA from "../../data/mockUserMainData";
import styled from "styled-components";

const ProfileLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 117px;
  height: calc(100vh - 97px);
`;

const ProfileLinkDiv = styled.div`
  display: flex;
  gap: 100px;
  textalign: center;
  margin: auto;
`;

const ProfileLink = styled(Link)`
  text-decoration: none;
  padding: 6px;
  background-color: #ffffff;
  color: #020203;
  font-weight: 500;
  font-size: 24px;
  border-radius: 6px;
  border: 2px solid #020203;

  &:hover {
    background-color: #020203;
    color: #ffffff;
  }
`;

function Profile() {
  return (
    <>
      <Header />
      <SideNavigationBar />
      <ProfileLinkContainer>
        {USER_MAIN_DATA.map((user) => (
          <ProfileLinkDiv key={user.id}>
            <ProfileLink to={`${user.id}`}>
              Profil utilisateur n°{user.id} - Mock
            </ProfileLink>
            <ProfileLink to={`${user.id}`}>
              Profil utilisateur n°{user.id} - API
            </ProfileLink>
          </ProfileLinkDiv>
        ))}
      </ProfileLinkContainer>
    </>
  );
}

export default Profile;
