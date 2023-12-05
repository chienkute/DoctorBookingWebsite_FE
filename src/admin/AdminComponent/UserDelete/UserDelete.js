import React from "react";
import "./UserDelete.scss";

const UserDeleteDialogue = ({ close }) => {
  const closeUDD = () => {
    close("UDD");
  };

  return (
    <div className="OverlayContainer">
      <div className="Close"></div>
      <div className="OverlayContent">
        <div className="UserDeleteDialogueContainer">
          <div className="UDDHeader">
            <h3 className="bold">Xoá tài khoản</h3>
          </div>
          <div className="UDDContent">
            <div className="UDDField UDDName">
              <div className="UDDNameLabel">Tên tài khoản</div>
              <input type="text" id="UDDNameInput" disabled></input>
            </div>
            <div className="UDDField UDDRole">
              <div className="UDDRoleLabel">Vai trò</div>
              <input type="text" id="UDDRoleInput" disabled></input>
            </div>
          </div>
          <div className="UDDActions">
            <div className="UDDWarning bold">
              Bạn chắc chắn muốn xoá tài khoản này chứ?{" "}
              <span className="bold" style={{ color: "red" }}>
                Hành động này sẽ xoá toàn bộ dữ liệu liên quan khỏi hệ thống
              </span>
            </div>
            <div className="UDDButtons">
              <button id="UDDCancelButton" onClick={closeUDD}>
                Huỷ
              </button>
              <button id="UDDConfirmButton">Xác nhận</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDeleteDialogue;
