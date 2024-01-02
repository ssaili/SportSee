import Header from "../../components/Header/index";
import SideNavigationBar from "../../components/SideNavigationBar/index";
import { ProfileLinkContainer, ProfileLinkDiv, ProfileLink } from "./style";

function Profile() {
  return (
    <>
      <Header />
      <SideNavigationBar />
      <ProfileLinkContainer>
        <ProfileLinkDiv key="12">
          <ProfileLink to="12">Profil utilisateur n°12 - Mock</ProfileLink>
          <ProfileLink to="12">Profil utilisateur n°12 - API</ProfileLink>
        </ProfileLinkDiv>
        <ProfileLinkDiv key="18">
          <ProfileLink to="18">Profil utilisateur n°18 - Mock</ProfileLink>
          <ProfileLink to="18">Profil utilisateur n°18 - API</ProfileLink>
        </ProfileLinkDiv>
      </ProfileLinkContainer>
    </>
  );
}

export default Profile;
