import React from "react";
import "./TopicInfo.scss";
import { IoIosSave } from "react-icons/io";

class TopicInfoDialogue extends React.Component {
  render() {
    return (
      <div className="TopicInfoDialogueContainer">
        <header className="TIDHeader">
          <h3 className="bold">Thông tin chuyên mục</h3>
        </header>
        <div className="TIDContent">
          <div className="TIDCols">
            <div className="TIDAccount TIDField">
              <div className="TIDAccountLabel TIDLabel">Tên chuyên mục</div>
              <input type="text" id="TIDAccountInput"></input>
            </div>
          </div>
        </div>
        <div className="TIDAction">
          <button className="button" id="SaveButton">
            <IoIosSave /> Lưu
          </button>
        </div>
      </div>
    );
  }
}

export default TopicInfoDialogue;
