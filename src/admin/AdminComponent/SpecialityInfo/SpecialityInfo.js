import React from "react";
import "./SpecialityInfo.scss";
import { IoIosSave } from "react-icons/io";
import { MdCancel } from "react-icons/md";

class SpecialityInfoDialogue extends React.Component {
  handleSIDClose = () => {
    const { closeSIDMethod } = this.props;
    closeSIDMethod(false, ".SIDOverlayContainer");
  };
  render() {
    return (
      <div className="SpecialityInfoDialogueContainer">
        <header className="SIDHeader">
          <h3 className="bold">Thông tin chuyên khoa</h3>
        </header>
        <div className="SIDContent">
          <div className="SIDCols">
            <div className="SIDAccount SIDField">
              <div className="SIDAccountLabel SIDLabel">Tên chuyên khoa</div>
              <input type="text" id="SIDAccountInput"></input>
            </div>
          </div>
        </div>
        <div className="SIDAction">
          <button id="CancelButton" onClick={this.handleSIDClose}>
            <MdCancel /> Huỷ
          </button>
          <button className="button" id="SaveButton">
            <IoIosSave /> Lưu
          </button>
        </div>
      </div>
    );
  }
}

export default SpecialityInfoDialogue;
