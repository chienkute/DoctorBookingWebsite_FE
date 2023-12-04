import React from "react";
import "./AdminUser.scss";
import { FaRegCheckSquare, FaEraser } from "react-icons/fa";
import { FcPrevious, FcNext } from "react-icons/fc";
import { IoInformation } from "react-icons/io5";
import UserInfoDialogue from "admin/AdminComponent/UserInfo/UserInfo";
import UserDeleteDialogue from "admin/AdminComponent/UserDelete/UserDelete";
import AdminChangePasswordDialogue from "admin/AdminComponent/AdminChangePassword/AdminChangePassword";
import { FaLock, FaPlus, FaUnlock } from "react-icons/fa6";
import UserLockAccountDialogue from "admin/AdminComponent/UserLockAccount/UserLockAccount";
import AdminAddAccountDialogue from "admin/AdminComponent/AdminAddAccount/AdminAddAccount";

class AdminUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      filterType: 0,
      dialogueList: [],
    };
  }

  addAAD = () => {
    this.setState({
      dialogueList: [
        ...this.state.dialogueList,
        <AdminAddAccountDialogue
          key="AAD"
          accType={0}
          close={(key) => this.closeD(key)}
        />,
      ],
    });
  };

  addUID = () => {
    this.setState({
      dialogueList: [
        ...this.state.dialogueList,
        <UserInfoDialogue
          key="UID"
          close={(key) => this.closeD(key)}
          openCPD={() => this.addCPD()}
          openULD={(isLocked) => this.addULD(isLocked)}
          openUDD={() => this.addUDD()}
        />,
      ],
    });
  };

  addUDD = () => {
    this.setState({
      dialogueList: [
        ...this.state.dialogueList,
        <UserDeleteDialogue key="UDD" close={(key) => this.closeD(key)} />,
      ],
    });
  };

  addULD = (isLocked) => {
    this.setState({
      dialogueList: [
        ...this.state.dialogueList,
        <UserLockAccountDialogue
          key="ULD"
          isLocked={isLocked}
          close={(key) => this.closeD(key)}
        />,
      ],
    });
  };

  addCPD = () => {
    this.setState({
      dialogueList: [
        ...this.state.dialogueList,
        <AdminChangePasswordDialogue
          key="CPD"
          close={(key) => this.closeD(key)}
        />,
      ],
    });
  };

  closeD = (key) => {
    const newLD = this.state.dialogueList.filter(
      (dialogue) => dialogue.key !== key,
    );
    this.setState({ dialogueList: newLD });
  };

  changeFilterType(value) {
    this.setState({ filterType: value });
  }

  render() {
    return (
      <>
        <div className="AdminUserContainer">
          <div className="AdminUserFilter">
            <div className="FilterRow">
              <div className="Filter col-2">
                <div className="FilterLabel">Tên người dùng</div>
                <div className="FilterInput FilterTextInput">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Nhập họ và tên người dùng"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="Filter col-2">
                <div className="FilterLabel">Vai trò</div>
                <div className="FilterInput FilterSelectInput">
                  <select
                    className="RoleSelect"
                    id="role"
                    onChange={(event) =>
                      this.changeFilterType(event.target.value)
                    }
                  >
                    <option value="0">Tất cả</option>
                    <option value="1">Người dùng</option>
                    <option value="2">Bác sĩ</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="FilterRow">
              <div className="Filter col-2">
                <div className="FilterLabel">Tên tài khoản</div>
                <div className="FilterInput FilterTextInput">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Nhập tên tài khoản"
                    autoComplete="off"
                  />
                </div>
              </div>
              {!(this.state.filterType == 1) && (
                <div className="Filter col-2">
                  <div className="FilterLabel">Tên cơ sở KCB </div>
                  <div className="FilterInput FilterTextInput">
                    <input
                      type="text"
                      className="form-control"
                      id="kcbname"
                      placeholder="Nhập tên cơ sở KCB"
                      autoComplete="off"
                    />
                  </div>
                </div>
              )}
            </div>
            {!(this.state.filterType == 1) && (
              <div className="FilterRow">
                <div className="Filter col-2"></div>
                <div className="Filter col-2">
                  <div className="FilterLabel">Chuyên khoa</div>
                  <div className="FilterInput FilterSelectInput">
                    <select className="RoleSelect" id="specialist">
                      <option value="0">Tất cả</option>
                      <option value="1">Chuyên khoa 1</option>
                      <option value="2">Chuyên khoa 2</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="AdminUserFunction">
            <button id="AdminUserAddAccount" onClick={() => this.addAAD()}>
              <FaPlus /> Thêm tài khoản...
            </button>
          </div>
          <div className="AdminUserResult">
            <div className="ResultPerTable">
              <label for="dropdown">Có 5 kết quả tìm được</label>
            </div>
            <div className="Table">
              <table>
                <tr>
                  <th>
                    <FaRegCheckSquare />
                  </th>
                  <th>STT</th>
                  <th>Họ tên người dùng</th>
                  <th>Tên tài khoản</th>
                  <th>Vai trò</th>
                  <th>Hành động</th>
                </tr>
                <tr className="UnlockedAccount">
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>1</td>
                  <td>Nguyễn Hoàng Anh</td>
                  <td>hoanganh07</td>
                  <td>Thành viên</td>
                  <td>
                    <div className="Action">
                      <button
                        className="InfoButton"
                        onClick={() => this.addUID(false)}
                      >
                        <IoInformation />
                      </button>
                      <button
                        className="UnlockButton"
                        onClick={() => this.addULD(true)}
                      >
                        <FaUnlock />
                      </button>
                      <button
                        className="LockButton"
                        onClick={() => this.addULD(false)}
                      >
                        <FaLock />
                      </button>
                      <button
                        className="DeleteAccount"
                        onClick={() => this.addUDD()}
                      >
                        <FaEraser />
                      </button>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div className="PageMonitor">
              <div className="PrevPage flex-center disabled">
                <FcPrevious />
              </div>
              <ul className="Pages clear">
                <li className="Page flex-center bold selected">1</li>
                <li className="Page flex-center bold">2</li>
                <li className="Page flex-center bold">3</li>
                <li className="Page flex-center bold">4</li>
                <li className="Page flex-center bold">5</li>
              </ul>
              <div className="NextPage flex-center">
                <FcNext />
              </div>
            </div>
          </div>
        </div>
        <div className="CPDOverlayContainer">
          <div className="CPDClose"></div>
          <div className="CPDOverlayContent">
            <AdminChangePasswordDialogue
              closeCPDmethod={(value, field) =>
                this.changeEditable(value, field)
              }
            />
          </div>
        </div>
        {this.state.dialogueList}
      </>
    );
  }
}

export default AdminUser;
