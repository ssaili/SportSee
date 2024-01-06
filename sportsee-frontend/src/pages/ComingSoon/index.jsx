import PropTypes from "prop-types";
import Header from "../../components/Header/index";
import SideNavigationBar from "../../components/SideNavigationBar/index";
import "./style.scss";

function ComingSoon({ pageName }) {
  return (
    <>
      <Header />
      <SideNavigationBar />
      <div className="coming-soon">
        <p className="coming-soon__text">
          La page {pageName} sera bientôt en ligne, merci de patienter 🙏
        </p>
      </div>
    </>
  );
}

ComingSoon.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default ComingSoon;
