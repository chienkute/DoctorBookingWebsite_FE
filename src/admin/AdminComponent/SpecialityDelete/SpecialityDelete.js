import React from "react";
import "./SpecialityDelete.scss";

class SpecialityDeleteDialogue extends React.Component {
  render() {
    return (
      <div className="SpecialityDeleteDialogueContainer">
        <div className="SDDHeader">
          <h3 className="bold">Xoá chuyên môn</h3>
        </div>
        <div className="SDDContent">
          <div className="SDDField SDDName">
            <div className="SDDNameLabel">Tên chuyên môn</div>
            <input type="text" id="SDDNameInput" disabled></input>
          </div>
        </div>
        <div className="SDDActions">
          <div className="SDDWarning bold">
            Bạn chắc chắn muốn xoá chuyên môn này chứ?{" "}
            <span className="bold" style={{ color: "red" }}>
              Hành động này không thể hoàn tác
            </span>
          </div>
          <div className="SDDButtons">
            <button id="SDDCancelButton">Huỷ</button>
            <button id="SDDConfirmButton">Xác nhận</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SpecialityDeleteDialogue;
