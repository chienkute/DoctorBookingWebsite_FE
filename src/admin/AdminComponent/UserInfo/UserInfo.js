import React from "react";
import "./UserInfo.scss";
import { BiSolidEditAlt } from "react-icons/bi";
import { Button, Modal } from "react-bootstrap";
import { FaEraser, FaLock, FaUnlock } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
class UserInfoDialogue extends React.Component {
  // const { show, handleClose } = props;
  constructor(props) {
    super(props);

    this.state = {
      isLocked: false,
      accType: 1,
    };
  }

  getAccType = () => {
    switch (this.state.accType) {
      case 0:
        return "Thành viên";
      case 1:
        return "Bác sĩ";
      default:
        break;
    }
  };

  closeUID = () => {
    const { close } = this.props;
    close("UID");
  };

  openCPD = () => {
    const { openCPD } = this.props;
    openCPD();
  };

  openULD = () => {
    const { openULD } = this.props;
    openULD(this.state.isLocked);
  };

  openUDD = () => {
    const { openUDD } = this.props;
    openUDD();
  };
  render() {
    return (
      <div className="OverlayContainer">
        <div className="Close">
          <button id="UIDCloseButton" onClick={() => this.closeUID()}>
            <IoClose />
          </button>
        </div>
        <div className="OverlayContent">
          <div className="UserInfoDialogueContainer">
            <header className="UIDHeader">
              <h3 className="bold">Thông tin người dùng</h3>
            </header>
            <div className="UIDContent">
              <div className="UIDCols col-2">
                <div className="UIDAccountStatus UIDField">
                  <span>
                    <div className="UIDLabel">Tình trạng tài khoản:</div>
                  </span>
                  {!this.state.isLocked && (
                    <span id="SpanUnlocked">Bình thường</span>
                  )}
                  {this.state.isLocked && <span id="SpanLocked">Đã khoá</span>}
                </div>
                <div className="UIDAccount UIDField">
                  <div className="UIDAccountLabel UIDLabel">Tên tài khoản</div>
                  <input type="text" id="UIDAccountInput" disabled></input>
                </div>
                <div className="UIDName UIDField">
                  <div className="UIDNameLabel UIDLabel">Tên người dùng</div>
                  <input type="text" id="UIDNameInput" disabled></input>
                </div>

                <div className="UIDGender UIDField">
                  <div className="UIDGenderLabel UIDLabel">Giới tính</div>
                  <input
                    type="text"
                    id="UIDGenderInput"
                    disabled
                    value={"Nam"}
                  ></input>
                </div>
                <div className="UIDRole UIDField">
                  <div className="UIDRoleLabel UIDLabel">Vai trò</div>
                  <input
                    type="text"
                    id="UIDRoleInput"
                    disabled
                    value={"Thành viên"}
                  ></input>
                </div>
                {this.state.accType === 1 && (
                  <>
                    <div className="UIDKCBAddress UIDField">
                      <div className="UIDKCBAddressLabel UIDLabel">
                        Đơn vị công tác
                      </div>
                      <input
                        type="text"
                        id="UIDKCBAddressInput"
                        disabled
                      ></input>
                    </div>
                    <div
                      className="UIDSpeciality UIDField"
                      style={{ display: "block", height: "fit-content" }}
                    >
                      <div
                        className="UIDSpecialityLabel UIDLabel"
                        style={{ width: "100%" }}
                      >
                        Chuyên khoa
                      </div>
                      <ul className="UIDListSpeciality">
                        <li className="Speicality">Đa khoa</li>
                        <li className="Speicality">Nội tổng quát</li>
                        <li className="Speicality">Nội tổng quát</li>
                        <li className="Speicality">Nội tổng quát</li>
                        <li className="Speicality">Nội tổng quát</li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
              <div className="UIDCols col-2">
                <div className="UIDField"></div>
                <div className="UIDBirthday UIDField">
                  <div className="UIDBirthdayLabel UIDLabel">Ngày sinh</div>
                  <input
                    type="date"
                    id="UIDBirthdayInput"
                    value={"1970-01-01"}
                    disabled
                  ></input>
                </div>
                <div className="UIDAddress UIDField">
                  <div className="UIDAddressLabel UIDLabel">Địa chỉ</div>
                  <input type="text" id="UIDAddressInput" disabled></input>
                </div>

                <div className="UIDPhone UIDField">
                  <div className="UIDPhoneLabel UIDLabel">SĐT</div>
                  <input type="text" id="UIDPhoneInput" disabled></input>
                </div>
                <div className="UIDEmail UIDField">
                  <div className="UIDEmailLabel UIDLabel">Email</div>
                  <input type="text" id="UIDEmailInput" disabled></input>
                </div>
                {this.state.accType === 1 && (
                  <>
                    <div className="UIDField"></div>
                    <div className="UIDField"></div>
                  </>
                )}
              </div>
            </div>
            <div className="UIDAction">
              <button
                className="button"
                id="ChangePasswordButton"
                onClick={this.openCPD}
              >
                <BiSolidEditAlt /> Đổi mật khẩu
              </button>
              {!this.state.isLocked && (
                <button id="UIDLockButton" onClick={this.openULD}>
                  <FaLock /> Khoá tài khoản
                </button>
              )}
              {this.state.isLocked && (
                <button id="UIDUnlockButton" onClick={this.openULD}>
                  <FaUnlock /> Mở khoá tài khoản
                </button>
              )}
              <button id="UIDDeleteButton" onClick={this.openUDD}>
                <FaEraser />
                Xoá tài khoản
              </button>
            </div>
          </div>
        </div>
      </div>

      // <Modal show={show} onHide={handleClose} centered>
      //   <Modal.Header closeButton>
      //     <Modal.Title>Chỉnh sửa thông tin người dùng</Modal.Title>
      //   </Modal.Header>
      //   <Modal.Body>
      //     <div className="UIDContent">
      //       <div className="UIDCols col-2">
      //         <div className="UIDAccount UIDField">
      //           <div className="UIDAccountLabel UIDLabel">Tên tài khoản</div>
      //           <input type="text" id="UIDAccountInput" disabled></input>
      //         </div>
      //         <div className="UIDName UIDField">
      //           <div className="UIDNameLabel UIDLabel">Tên người dùng</div>
      //           <input type="text" id="UIDNameInput"></input>
      //         </div>

      //         <div className="UIDGender UIDField">
      //           <label htmlFor="UIDGenderSelect">Giới tính:</label>
      //           <select id="UIDGenderSelect">
      //             <option value="yes">Nam</option>
      //             <option value="no">Nữ</option>
      //           </select>
      //         </div>
      //         <div className="UIDRole UIDField">
      //           <label htmlFor="UIDRoleSelect">Vai trò:</label>
      //           <select id="UIDRoleSelect">
      //             <option value="user">Thành viên</option>
      //             <option value="doctor">Bác sĩ</option>
      //           </select>
      //         </div>
      //       </div>
      //       <div className="UIDCols col-2">
      //         <div className="UIDBirthday UIDField">
      //           <div className="UIDBirthdayLabel UIDLabel">Ngày sinh</div>
      //           <input
      //             type="date"
      //             id="UIDBirthdayInput"
      //             value={"1970-01-01"}
      //           ></input>
      //         </div>
      //         <div className="UIDAddress UIDField">
      //           <div className="UIDAddressLabel UIDLabel">Địa chỉ</div>
      //           <input type="text" id="UIDAddressInput"></input>
      //         </div>
      //         <div className="UIDPhone UIDField">
      //           <div className="UIDPhoneLabel UIDLabel">SĐT</div>
      //           <input type="text" id="UIDPhoneInput"></input>
      //         </div>
      //         <div className="UIDEmail UIDField">
      //           <div className="UIDEmailLabel UIDLabel">Email</div>
      //           <input type="text" id="UIDEmailInput"></input>
      //         </div>
      //       </div>
      //     </div>
      //   </Modal.Body>
      //   <Modal.Footer>
      //     <Button variant="secondary" onClick={handleClose}>
      //       Close
      //     </Button>
      //     <Button variant="primary" onClick={handleClose}>
      //       Save Changes
      //     </Button>
      //   </Modal.Footer>
      // </Modal>
    );
  }
}

export default UserInfoDialogue;
