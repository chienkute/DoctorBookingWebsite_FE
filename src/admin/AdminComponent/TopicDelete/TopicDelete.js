import React from "react";
import "./TopicDelete.scss";

class TopicDeleteDialogue extends React.Component {
  closeTDD = () => {
    const { close } = this.props;
    close("TDD");
  };
  render() {
    return (
      <div className="OverlayContainer">
        <div className="Close"></div>
        <div className="OverlayContent">
          <div className="TopicDeleteDialogueContainer">
            <div className="TDDHeader">
              <h3 className="bold">Xoá chuyên mục</h3>
            </div>
            <div className="TDDContent">
              <div className="TDDField TDDName">
                <div className="TDDNameLabel">Tên chuyên mục</div>
                <input type="text" id="TDDNameInput" disabled></input>
              </div>
            </div>
            <div className="TDDActions">
              <div className="TDDWarning bold">
                Bạn chắc chắn muốn xoá chuyên mục này chứ?{" "}
                <span className="bold" style={{ color: "red" }}>
                  Hành động này sẽ xoá toàn bộ dữ liệu liên quan khỏi hệ thống
                </span>
              </div>
              <div className="TDDButtons">
                <button id="TDDCancelButton" onClick={this.closeTDD}>
                  Huỷ
                </button>
                <button id="TDDConfirmButton">Xác nhận</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopicDeleteDialogue;
