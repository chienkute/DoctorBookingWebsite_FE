import React from "react";
import "./HospitalInfo.scss";
import { BiSolidEditAlt } from "react-icons/bi";
import { FaEraser } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

class HospitalInfoDialogue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  closeHID = () => {
    const { close } = this.props;
    close("HID");
  };

  openCPD = () => {
    const { openCPD } = this.props;
    openCPD();
  };

  openHDD = () => {
    const { openHDD } = this.props;
    openHDD();
  };

  render() {
    return (
      <div className="OverlayContainer">
        <div className="Close">
          <button id="HIDCloseButton" onClick={() => this.closeHID()}>
            <IoClose />
          </button>
        </div>
        <div className="OverlayContent">
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
                  <input type="text" id="HIDNameInput" disabled></input>
                </div>
                <div className="HIDDescription HIDField">
                  <div className="HIDDescriptionLabel HIDLabel">Mô tả</div>
                  <textarea
                    id="HIDDescriptionInput"
                    disabled
                    rows={5}
                  ></textarea>
                </div>
              </div>
              <div className="HIDCols col-2">
                <div className="HIDAddress HIDField">
                  <div className="HIDAddressLabel HIDLabel">Địa chỉ</div>
                  <input type="text" id="HIDAddressInput" disabled></input>
                </div>
                <div className="HIDEmail HIDField">
                  <div className="HIDEmailLabel HIDLabel">Email</div>
                  <input type="text" id="HIDEmailInput" disabled></input>
                </div>
              </div>
            </div>
            <div className="HIDAction">
              <button id="HIDChangePasswordButton" onClick={this.openCPD}>
                <BiSolidEditAlt /> Đổi mật khẩu
              </button>
              <button id="HIDDeleteButton" onClick={this.openHDD}>
                <FaEraser />
                Xoá tài khoản
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HospitalInfoDialogue;
