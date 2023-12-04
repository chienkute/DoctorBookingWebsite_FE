import React from "react";
import "./TopicInfo.scss";
import { IoIosSave } from "react-icons/io";
import { MdCancel } from "react-icons/md";

class TopicInfoDialogue extends React.Component {
  closeTID = () => {
    const { close } = this.props;
    close("TID");
  };
  render() {
    return (
      <div className="OverlayContainer">
        <div className="Close"></div>
        <div className="OverlayContent">
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
              <button id="CancelButton" onClick={this.closeTID}>
                <MdCancel /> Huỷ
              </button>
              <button className="button" id="SaveButton">
                <IoIosSave /> Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopicInfoDialogue;
