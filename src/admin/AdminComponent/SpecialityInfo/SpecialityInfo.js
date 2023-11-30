import React from "react";
import "./SpecialityInfo.scss";
import { IoIosSave } from "react-icons/io";

class SpecialityInfoDialogue extends React.Component {
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
          <button className="button" id="SaveButton">
            <IoIosSave /> Lưu
          </button>
        </div>
      </div>
    );
  }
}

export default SpecialityInfoDialogue;
