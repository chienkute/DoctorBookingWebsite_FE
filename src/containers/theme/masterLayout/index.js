import { memo } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./index.scss";
const MasterLayout = ({ children, ...props }) => {
  return (
    <div {...props} className="container__master">
      <div className="header__container">
        <Header></Header>
      </div>
      <div className="chatbox">Hello</div>
      {children}
      <div className="footer__container">
        <Footer></Footer>
      </div>
    </div>
  );
};
export default memo(MasterLayout);
