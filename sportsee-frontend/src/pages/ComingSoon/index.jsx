import PropTypes from "prop-types";
import Header from "../../components/Header/index";
import SideNavigationBar from "../../components/SideNavigationBar/index";
import { ComingSoonContainer, ComingSoonParagraph } from "./style";

function ComingSoon({ pageName }) {
  return (
    <>
      <Header />
      <SideNavigationBar />
      <ComingSoonContainer>
        <ComingSoonParagraph>
          La page {pageName} sera bientôt en ligne, merci de patienter 🙏
        </ComingSoonParagraph>
      </ComingSoonContainer>
    </>
  );
}

ComingSoon.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default ComingSoon;
