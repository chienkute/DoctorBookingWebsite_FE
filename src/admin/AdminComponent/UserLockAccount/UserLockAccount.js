import React from "react";
import "./UserLockAccount.scss";

const UserLockAccountDialogue = ({ close, isLocked }) => {
  const closeULD = () => {
    close("ULD");
  };

  return (
    <div className="OverlayContainer">
      <div className="Close"></div>
      <div className="OverlayContent">
        <div className="UserLockAccountDialogueContainer">
          <div className="ULDHeader">
            <h3 className="bold">
              {!isLocked ? "Khoá tài khoản" : "Mở khoá tài khoản"}
            </h3>
          </div>
          <div className="ULDContent">
            <div className="ULDField ULDName">
              <div className="ULDNameLabel">Tên tài khoản</div>
              <input type="text" id="ULDNameInput" disabled></input>
            </div>
            <div className="ULDField ULDRole">
              <div className="ULDRoleLabel">Vai trò</div>
              <input type="text" id="ULDRoleInput" disabled></input>
            </div>
          </div>
          <div className="ULDActions">
            <div className="ULDWarning bold">
              Bạn chắc chắn muốn{" "}
              <span style={{ color: "red", fontWeight: "700" }}>
                {!isLocked ? "khoá" : "mở khoá"}
              </span>{" "}
              tài khoản này chứ?
            </div>
            <div className="ULDButtons">
              <button id="ULDCancelButton" onClick={closeULD}>
                Huỷ
              </button>
              <button id="ULDConfirmButton">Xác nhận</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLockAccountDialogue;
