import React from "react";
import "./UserDelete.scss";

class UserDeleteDialogue extends React.Component {
  handleCloseUPD = () => {
    const { closeUDDMethod } = this.props;
    closeUDDMethod(false, ".UDDOverlayContainer");
  };
  render() {
    return (
      <div className="UserDeleteDialogueContainer">
        <div className="UDDHeader">
          <h3 className="bold">Xoá tài khoản</h3>
        </div>
        <div className="UDDContent">
          <div className="UDDField UDDName">
            <div className="UDDNameLabel">Tên tài khoản</div>
            <input type="text" id="UDDNameInput" disabled></input>
          </div>
          <div className="UDDField UDDReason">
            <div className="UDDReasonLabel">Lí do</div>
            <textarea id="UDDReasonInput" rows={5}></textarea>
          </div>
        </div>
        <div className="UDDActions">
          <div className="UDDWarning bold">
            Bạn chắc chắn muốn xoá tài khoản này chứ?{" "}
            <span className="bold" style={{ color: "red" }}>
              Hành động này không thể hoàn tác
            </span>
          </div>
          <div className="UDDButtons">
            <button id="UDDCancelButton" onClick={this.handleCloseUPD}>
              Huỷ
            </button>
            <button id="UDDConfirmButton">Xác nhận</button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDeleteDialogue;
