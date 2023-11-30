import React from "react";
import "./UserInfo.scss";
import { BiSolidEditAlt } from "react-icons/bi";
import { IoIosSave } from "react-icons/io";

class UserInfoDialogue extends React.Component {
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
              <select id="UIDRoleSelect" disabled={!this.state.isEditable}>
                <option value="user">Thành viên</option>
                <option value="doctor">Bác sĩ</option>
              </select>
            </div>
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
          </div>
        </div>
        <div className="UIDAction">
          <button className="button" id="ChangePasswordButton">
            <BiSolidEditAlt /> Đổi mật khẩu
          </button>
          {!this.state.isEditable && (
            <button
              className="button"
              id="UIDEditButton"
              onClick={() => this.changeState(true)}
            >
              <BiSolidEditAlt /> Chỉnh sửa thông tin
            </button>
          )}
          {this.state.isEditable && (
            <button
              className="button"
              id="UIDSaveButton"
              onClick={() => this.changeState(false)}
            >
              <IoIosSave /> Lưu thông tin
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default UserInfoDialogue;
