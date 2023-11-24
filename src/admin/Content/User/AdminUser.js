import React from "react";
import "./AdminUser.scss";
import { FaRegCheckSquare, FaEraser } from "react-icons/fa";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";
import { FcPrevious, FcNext } from "react-icons/fc";
import { IoInformation } from "react-icons/io5";
import { MdLockOutline, MdLockOpen } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";

class AdminUser extends React.Component {
  render() {
    return (
      <div className="AdminUserContainer">
        <div className="AdminUserFilter">
          <div className="FilterRow">
            <div className="Filter col-2">
              <div className="FilterLabel">Tên người dùng</div>
              <div className="FilterInput FilterTextInput">
                <input
                  type="text"
                  placeholder="Nhập tên người dùng"
                  id="usernameInput"
                  name="usernameInput"
                ></input>
              </div>
            </div>
            <div className="Filter col-2">
              <div className="FilterLabel">Vai trò</div>
              <div className="FilterInput FilterRadioInput">
                <div className="RadioButton">
                  <input type="checkbox" id="UserRole" value="UserRole"></input>
                  <label htmlFor="UserRole">Thành viên</label>
                </div>
                <div className="RadioButton">
                  <input
                    type="checkbox"
                    id="DoctorRole"
                    value="DoctorRole"
                  ></input>
                  <label htmlFor="DoctorRole">Bác sĩ</label>
                </div>
              </div>
            </div>
          </div>
          <div className="FilterRow">
            <div className="Filter col-2">
              <div className="FilterLabel">Tên tài khoản</div>
              <div className="FilterInput FilterTextInput">
                <input
                  type="text"
                  placeholder="Nhập tên tài khoản"
                  id="accountnameInput"
                  name="accountnameInput"
                ></input>
              </div>
            </div>
            <div className="Filter col-2">
              <div className="FilterLabel">Tình trạng tài khoản</div>
              <div className="FilterInput FilterRadioInput">
                <div className="RadioButton">
                  <input
                    type="radio"
                    name="status"
                    id="normal"
                    value="normal"
                  ></input>
                  <label htmlFor="normal">Bình thường</label>
                </div>
                <div className="RadioButton">
                  <input
                    type="radio"
                    name="status"
                    id="banned"
                    value="banned"
                  ></input>
                  <label htmlFor="banned">Đã khoá</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="AdminUserResult">
          <div className="ResultPerTable">
            <label for="dropdown">Số kết quả mỗi trang:</label>
            <select id="dropdown">
              <option value="5">5</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
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
                <th>Tình trạng</th>
                <th>Hành động</th>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>1</td>
                <td>Nguyễn Hoàng Anh</td>
                <td>hoanganh07</td>
                <td>Thành viên</td>
                <td className="normalAcc">
                  <IoIosCheckmarkCircleOutline />
                </td>
                <td>
                  <div className="Action">
                    <button className="InfoButton">
                      <IoInformation />
                    </button>
                    <button className="ChangePasswordButton">
                      <FiEdit3 />
                    </button>
                    <button className="LockButton">
                      <MdLockOutline />
                    </button>
                    <button className="DeleteAccount">
                      <FaEraser />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>2</td>
                <td>Nguyễn Hoàng Anh</td>
                <td>hoanganh07</td>
                <td>Thành viên</td>
                <td className="bannedAcc">
                  <IoIosCloseCircleOutline />
                </td>
                <td>
                  <div className="Action">
                    <button className="InfoButton">
                      <IoInformation />
                    </button>
                    <button className="ChangePasswordButton">
                      <FiEdit3 />
                    </button>
                    <button className="UnlockButton">
                      <MdLockOpen />
                    </button>
                    <button className="DeleteAccount">
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
    );
  }
}

export default AdminUser;
