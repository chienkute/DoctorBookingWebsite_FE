import React from "react";
import "./AdminAddAccount.scss";

class AdminAddAccountDialogue extends React.Component {
  getAccountType() {
    switch (this.props.accType) {
      case 0:
        return "Bác sĩ";
      case 1:
        return "Cơ sở KCB";
      default:
        break;
    }
  }
  closeAAD = () => {
    const { close } = this.props;
    close("AAD");
  };
  render() {
    return (
      <div className="OverlayContainer">
        <div className="Close"></div>
        <div className="OverlayContent">
          <div className="AdminAddAccountDialogueContainer">
            <div className="AADHeader">
              <h3 className="bold">Đăng kí tài khoản mới</h3>
            </div>
            <div className="AADContent">
              <div className="AADField AADType">
                <div className="AADTypeLabel">Loại tài khoản</div>
                <input
                  type="text"
                  id="AADTypeInput"
                  disabled
                  value={this.getAccountType()}
                ></input>
              </div>
              <div className="AADField AADUsername">
                <div className="AADUsernameLabel">Tên tài khoản</div>
                <input type="text" id="AADUsernameInput"></input>
              </div>
              <div className="AADField AADPassword">
                <div className="AADPasswordLabel">Mật khẩu</div>
                <input type="password" id="AADPasswordInput"></input>
              </div>
              <div className="AADField AADPasswordConfirm">
                <div className="AADPasswordConfirmLabel">Xác nhận mật khẩu</div>
                <input type="password" id="AADPasswordConfirmInput"></input>
              </div>
              <div className="AADField AADEmail">
                <div className="AADEmailLabel">Email</div>
                <input type="email" id="AADEmailInput"></input>
              </div>
            </div>
            <div className="AADActions">
              <div className="AADButtons">
                <button id="AADCancelButton" onClick={this.closeAAD}>
                  Huỷ
                </button>
                <button id="AADConfirmButton">Xác nhận</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminAddAccountDialogue;
