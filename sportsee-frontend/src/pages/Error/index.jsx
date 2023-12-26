import styled from "styled-components";
import Header from "../../components/Header";
import SideNavigationBar from "../../components/SideNavigationBar";
import { Link } from "react-router-dom";

const ErrorSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 117px;
  height: calc(100vh - 97px);
`;

const ErrorNumber = styled.p`
  text-align: center;
  margin: auto;
  color: #020203;
  font-weight: 500;
  font-size: 96px;
`;

const ErrorHomepageLink = styled(Link)`
  font-size: 48px;

  &:visited {
    color: inherit;
  }
`;

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
