import React from "react";
import "./UserLockAccount.scss";

class UserLockAccountDialogue extends React.Component {
  closeULD = () => {
    const { close } = this.props;
    close("ULD");
  };
  render() {
    return (
      <div className="OverlayContainer">
        <div className="Close"></div>
        <div className="OverlayContent">
          <div className="UserLockAccountDialogueContainer">
            <div className="ULDHeader">
              <h3 className="bold">
                {this.props.type === 0 ? "Khoá tài khoản" : "Mở khoá tài khoản"}
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
                Bạn chắc chắn muốn {this.props.type === 0 ? "khoá" : "mở khoá"}{" "}
                tài khoản này chứ?
              </div>
              <div className="ULDButtons">
                <button id="ULDCancelButton" onClick={this.closeULD}>
                  Huỷ
                </button>
                <button id="ULDConfirmButton">Từ chối</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserLockAccountDialogue;
