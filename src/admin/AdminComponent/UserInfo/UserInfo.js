import React from "react";
import "./UserInfo.scss";
import { BiSolidEditAlt } from "react-icons/bi";
import { IoIosSave } from "react-icons/io";
import { Button, Modal } from "react-bootstrap";
class UserInfoDialogue extends React.Component {
  // const { show, handleClose } = props;
  constructor(props) {
    super(props);

    this.state = {
      isEditable: props.editable,
      accType: false,
    };
  }

  handleOpenCPD = () => {
    const { openCPDmethod } = this.props;
    openCPDmethod(true, ".CPDOverlayContainer");
  };

  changeEditable(value) {
    this.setState({
      isEditable: value,
    });
  }

  changeType(value) {
    this.setState({
      accType: !(value == 0),
    });
  }
  render() {
    return (
      <div className="UserInfoDialogueContainer">
        <header className="UIDHeader">
          <h3 className="bold">Thông tin người dùng</h3>
        </header>
        <div className="UIDContent">
          <div className="UIDCols col-2">
            <div className="UIDAccount UIDField">
              <div className="UIDAccountLabel UIDLabel">Tên tài khoản</div>
              <input type="text" id="UIDAccountInput" disabled></input>
            </div>
            <div className="UIDName UIDField">
              <div className="UIDNameLabel UIDLabel">Tên người dùng</div>
              <input
                type="text"
                id="UIDNameInput"
                disabled={!this.state.isEditable}
              ></input>
            </div>

            <div className="UIDGender UIDField">
              <label htmlFor="UIDGenderSelect">Giới tính:</label>
              <select id="UIDGenderSelect" disabled={!this.state.isEditable}>
                <option value="yes">Nam</option>
                <option value="no">Nữ</option>
              </select>
            </div>
            <div className="UIDRole UIDField">
              <label htmlFor="UIDRoleSelect">Vai trò:</label>
              <select
                id="UIDRoleSelect"
                disabled={!this.state.isEditable}
                onChange={(event) => this.changeType(event.target.value)}
              >
                <option value="0">Thành viên</option>
                <option value="1">Bác sĩ</option>
              </select>
            </div>
            {this.state.accType && (
              <div className="UIDKCBAddress UIDField">
                <div className="UIDKCBAddressLabel UIDLabel">
                  Đơn vị công tác
                </div>
                <input
                  type="text"
                  id="UIDKCBAddressInput"
                  disabled={!this.state.isEditable}
                ></input>
              </div>
            )}
          </div>
          <div className="UIDCols col-2">
            <div className="UIDBirthday UIDField">
              <div className="UIDBirthdayLabel UIDLabel">Ngày sinh</div>
              <input
                type="date"
                id="UIDBirthdayInput"
                value={"1970-01-01"}
                disabled={!this.state.isEditable}
              ></input>
            </div>
            <div className="UIDAddress UIDField">
              <div className="UIDAddressLabel UIDLabel">Địa chỉ</div>
              <input
                type="text"
                id="UIDAddressInput"
                disabled={!this.state.isEditable}
              ></input>
            </div>

            <div className="UIDPhone UIDField">
              <div className="UIDPhoneLabel UIDLabel">SĐT</div>
              <input
                type="text"
                id="UIDPhoneInput"
                disabled={!this.state.isEditable}
              ></input>
            </div>
            <div className="UIDEmail UIDField">
              <div className="UIDEmailLabel UIDLabel">Email</div>
              <input
                type="text"
                id="UIDEmailInput"
                disabled={!this.state.isEditable}
              ></input>
            </div>
            {this.state.accType && (
              <div className="UIDSpeciality UIDField">
                <label htmlFor="UIDSpecialitySelect">Chuyên khoa:</label>
                <select
                  id="UIDSpecialitySelect"
                  disabled={!this.state.isEditable}
                >
                  <option value="0">Chuyên khoa 0</option>
                  <option value="1">Chuyên khoa 1</option>
                </select>
              </div>
            )}
          </div>
        </div>
        <div className="UIDAction">
          {!this.state.isEditable && (
            <button
              className="button"
              id="UIDEditButton"
              onClick={() => this.changeEditable(true)}
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
                id="UIDSaveButton"
                onClick={() => this.changeEditable(false)}
              >
                <IoIosSave /> Lưu thông tin
              </button>
            </>
          )}
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
