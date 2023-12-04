import React from "react";
import "./HospitalDelete.scss";

class HospitalDeleteDialogue extends React.Component {
  closeHDD = () => {
    const { close } = this.props;
    close("HDD");
  };
  render() {
    return (
      <div className="OverlayContainer">
        <div className="Close"></div>
        <div className="OverlayContent">
          <div className="HospitalDeleteDialogueContainer">
            <div className="HDDHeader">
              <h3 className="bold">Xoá tài khoản cơ sở KCB</h3>
            </div>
            <div className="HDDContent">
              <div className="HDDField HDDAccountName">
                <div className="HDDAccountNameLabel">Tên tài khoản</div>
                <input type="text" id="HDDAccountNameInput" disabled></input>
              </div>
              <div className="HDDField HDDName">
                <div className="HDDNameLabel">Tên cơ sở KCB</div>
                <input type="text" id="HDDNameInput" disabled></input>
              </div>
            </div>
            <div className="HDDActions">
              <div className="HDDWarning bold">
                Bạn chắc chắn muốn xoá cơ sở KCB này chứ?{" "}
                <span className="bold" style={{ color: "red" }}>
                  Hành động này không thể hoàn tác
                </span>
              </div>
              <div className="HDDButtons">
                <button id="HDDCancelButton" onClick={this.closeHDD}>
                  Huỷ
                </button>
                <button id="HDDConfirmButton">Xác nhận</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HospitalDeleteDialogue;
