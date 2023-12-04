import { memo, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./index.scss";
import imageChatbot from "../../../assets/chatbot.png";
import Chatbot from "../ChatBox/ChatBoxMain/Chatbot";
const MasterLayout = ({ children, ...props }) => {
  const [up, setUp] = useState(false);
  return (
    <div {...props} className="container__master">
      <div className="header__container">
        <Header></Header>
      </div>
      <div>
        {up ? (
          <div></div>
        ) : (
          <div
            className="chatbox"
            role="button"
            onClick={() => {
              setUp(true);
            }}
          >
            <img src={imageChatbot} alt="" />
          </div>
        )}
        {up && (
          <div className="chatbox__content">
            <Chatbot setUp={setUp}></Chatbot>
          </div>
        )}
      </div>
      {children}
      <div className="footer__container">
        <Footer></Footer>
      </div>
    </div>
  );
};
export default memo(MasterLayout);
