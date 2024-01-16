import Header from "../Header";
import SideNavigationBar from "../SideNavigationBar";
import "./style.scss";

function Loader() {
  return (
    <>
      <Header />
      <SideNavigationBar />
      <span className="loader"></span>
    </>
  );
}

export default Loader;
