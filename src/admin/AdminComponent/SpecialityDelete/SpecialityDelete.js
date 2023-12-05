import React from "react";
import "./SpecialityDelete.scss";

const SpecialityDeleteDialogue = (props) => {
  const closeSpDD = () => {
    const { close } = props;
    close("SpDD");
  };

  return (
    <div className="OverlayContainer">
      <div className="Close"></div>
      <div className="OverlayContent">
        <div className="SpecialityDeleteDialogueContainer">
          <div className="SpDDHeader">
            <h3 className="bold">Xoá chuyên khoa</h3>
          </div>
          <div className="SpDDContent">
            <div className="SpDDField SpDDName">
              <div className="SpDDNameLabel">Tên chuyên khoa</div>
              <input type="text" id="SpDDNameInput" disabled></input>
            </div>
          </div>
          <div className="SpDDActions">
            <div className="SpDDWarning bold">
              Bạn chắc chắn muốn xoá chuyên khoa này chứ?{" "}
              <span className="bold" style={{ color: "red" }}>
                Hành động này không thể hoàn tác
              </span>
            </div>
            <div className="SpDDButtons">
              <button id="SpDDCancelButton" onClick={closeSpDD}>
                Huỷ
              </button>
              <button id="SpDDConfirmButton">Xác nhận</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialityDeleteDialogue;
