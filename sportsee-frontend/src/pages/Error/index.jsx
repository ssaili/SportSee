import { Link } from "react-router-dom";
import Header from "../../components/Header/index";
import SideNavigationBar from "../../components/SideNavigationBar/index";
import "./style.scss";

function Error() {
  return (
    <>
      <Header />
      <SideNavigationBar />
      <div className="error">
        <p className="error__number">
          Erreur 404 😒
          <br />
          <Link className="error__homepage-link" to="/">
            Retourner sur la page d'accueil
          </Link>
        </p>
      </div>
    </>
  );
}

export default Error;
