import styled from "styled-components";
import Header from "../../components/Header";
import SideNavigationBar from "../../components/SideNavigationBar";

const ComingSoonContainer = styled.div`
  display: flex;
  margin-left: 117px;
  height: calc(100vh - 97px);
`;

const ComingSoonParagraph = styled.p`
  text-align: center;
  margin: auto;
  font-weight: 500;
  font-size: 48px;
`;

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

export default ComingSoon;
