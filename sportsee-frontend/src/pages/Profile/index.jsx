import { Link } from "react-router-dom";
import Header from "../../components/Header/index";
import SideNavigationBar from "../../components/SideNavigationBar/index";
import "./style.scss";

function Profile() {
  return (
    <>
      <Header />
      <SideNavigationBar />
      <div className="profile">
        <div className="profile__links-container" key="12">
          <Link className="profile__link" to="12" state={{ mockData: true }}>
            Profil utilisateur n°12 - Mock
          </Link>
          <Link className="profile__link" to="12" state={{ mockData: false }}>
            Profil utilisateur n°12 - API
          </Link>
        </div>
        <div className="profile__links-container" key="18">
          <Link className="profile__link" to="18" state={{ mockData: true }}>
            Profil utilisateur n°18 - Mock
          </Link>
          <Link className="profile__link" to="18" state={{ mockData: false }}>
            Profil utilisateur n°18 - API
          </Link>
        </div>
      </div>
    </>
  );
}

export default Profile;
