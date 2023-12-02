import React from "react";
import "./HospitalInfo.scss";
import { BiSolidEditAlt } from "react-icons/bi";
import { IoIosSave } from "react-icons/io";

class HospitalInfoDialogue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditable: props.editable,
    };
  }

  changeState(value) {
    this.setState({
      isEditable: value,
    });
  }

  handleOpenCPD = () => {
    const { openCPDmethod } = this.props;
    openCPDmethod(true, ".CPDOverlayContainer");
  };

  render() {
    return (
      <div className="HospitalInfoDialogueContainer">
        <header className="HIDHeader">
          <h3 className="bold">Thông tin cơ sở KCB</h3>
        </header>
        <div className="HIDContent">
          <div className="HIDCols col-2">
            <div className="HIDAccount HIDField">
              <div className="HIDAccountLabel HIDLabel">Tên tài khoản</div>
              <input type="text" id="HIDAccountInput" disabled></input>
            </div>
            <div className="HIDName HIDField">
              <div className="HIDNameLabel HIDLabel">Tên cơ sở KCB</div>
              <input
                type="text"
                id="HIDNameInput"
                disabled={!this.state.isEditable}
              ></input>
            </div>
            <div className="HIDDescription HIDField">
              <div className="HIDDescriptionLabel HIDLabel">Mô tả</div>
              <textarea
                id="HIDDescriptionInput"
                disabled={!this.state.isEditable}
                rows={5}
              ></textarea>
            </div>
          </div>
          <div className="HIDCols col-2">
            <div className="HIDAddress HIDField">
              <div className="HIDAddressLabel HIDLabel">Địa chỉ</div>
              <input
                type="text"
                id="HIDAddressInput"
                disabled={!this.state.isEditable}
              ></input>
            </div>
            <div className="HIDEmail HIDField">
              <div className="HIDEmailLabel HIDLabel">Email</div>
              <input
                type="text"
                id="HIDEmailInput"
                disabled={!this.state.isEditable}
              ></input>
            </div>
          </div>
        </div>
        <div className="HIDAction">
          {!this.state.isEditable && (
            <button
              className="button"
              id="HIDEditButton"
              onClick={() => this.changeState(true)}
            >
              <BiSolidEditAlt /> Chỉnh sửa thông tin
            </button>
          )}
          {this.state.isEditable && (
            <>
              <button
                className="button"
                id="ChangePasswordButton"
                onClick={this.handleOpenCPD}
              >
                <BiSolidEditAlt /> Đổi mật khẩu
              </button>
              <button
                className="button"
                id="HIDSaveButton"
                onClick={() => this.changeState(false)}
              >
                <IoIosSave /> Lưu thông tin
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default HospitalInfoDialogue;
