import React from "react";
import { IoMdClose } from "react-icons/io";
export default function Header(props) {
  const { setUp } = props;
  return (
    <div className="header__chatbot">
      <div className="header">
        <p>&nbsp;HiBacSi Chatbot</p>
        <div
          className="chatbot__close"
          role="button"
          onClick={() => {
            setUp(false);
          }}
        >
          <IoMdClose
            style={{
              width: "40px",
              height: "40px",
              transform: "translate(140px,-10px)",
            }}
          ></IoMdClose>
        </div>
      </div>
    </div>
  );
}
