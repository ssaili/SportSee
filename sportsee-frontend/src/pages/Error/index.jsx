import Header from "../../components/Header/index";
import SideNavigationBar from "../../components/SideNavigationBar/index";
import { ErrorSection, ErrorNumber, ErrorHomepageLink } from "./style";

function Error() {
  return (
    <>
      <Header />
      <SideNavigationBar />
      <ErrorSection>
        <ErrorNumber>
          Erreur 404 😒
          <br />
          <ErrorHomepageLink to="/">
            Retourner sur la page d'accueil
          </ErrorHomepageLink>
        </ErrorNumber>
      </ErrorSection>
    </>
  );
}

export default Error;
