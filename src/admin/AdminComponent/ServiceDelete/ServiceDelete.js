import React from "react";
import "./ServiceDelete.scss";

class ServiceDeleteDialogue extends React.Component {
  closeSDD = () => {
    const { close } = this.props;
    close("SDD");
  };
  render() {
    return (
      <div className="OverlayContainer">
        <div className="Close"></div>
        <div className="OverlayContent">
          <div className="ServiceDeleteDialogueContainer">
            <div className="SDDHeader">
              <h3 className="bold">Xoá dịch vụ</h3>
            </div>
            <div className="SDDContent">
              <div className="SDDField SDDName">
                <div className="SDDNameLabel">Tên dịch vụ</div>
                <input type="text" id="SDDNameInput" disabled></input>
              </div>
            </div>
            <div className="SDDActions">
              <div className="SDDWarning bold">
                Bạn chắc chắn muốn xoá dịch vụ này chứ?{" "}
                <span className="bold" style={{ color: "red" }}>
                  Hành động này không thể hoàn tác
                </span>
              </div>
              <div className="SDDButtons">
                <button id="SDDCancelButton" onClick={this.closeSDD}>
                  Huỷ
                </button>
                <button id="SDDConfirmButton">Xác nhận</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceDeleteDialogue;
