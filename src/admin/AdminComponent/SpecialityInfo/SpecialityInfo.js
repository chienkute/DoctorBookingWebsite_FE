import React from "react";
import "./SpecialityInfo.scss";
import { IoIosSave } from "react-icons/io";
import { MdCancel } from "react-icons/md";

class SpecialityInfoDialogue extends React.Component {
  closeSID = () => {
    const { close } = this.props;
    close("SID");
  };
  render() {
    return (
      <div className="OverlayContainer">
        <div className="Close"></div>
        <div className="OverlayContent">
          <div className="SpecialityInfoDialogueContainer">
            <header className="SIDHeader">
              <h3 className="bold">Thông tin chuyên khoa</h3>
            </header>
            <div className="SIDContent">
              <div className="SIDCols">
                <div className="SIDAccount SIDField">
                  <div className="SIDAccountLabel SIDLabel">
                    Tên chuyên khoa
                  </div>
                  <input type="text" id="SIDAccountInput"></input>
                </div>
              </div>
            </div>
            <div className="SIDAction">
              <button id="CancelButton" onClick={this.closeSID}>
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

export default SpecialityInfoDialogue;
