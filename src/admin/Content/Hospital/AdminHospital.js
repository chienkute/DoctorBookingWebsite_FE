import React from "react";
import "./AdminHospital.scss";
import { FaRegCheckSquare, FaEraser } from "react-icons/fa";
import { FcPrevious, FcNext } from "react-icons/fc";
import { FiEdit3 } from "react-icons/fi";
import { IoClose, IoInformation } from "react-icons/io5";
import HospitalInfoDialogue from "admin/AdminComponent/HospitalInfo/HospitalInfo";
import HospitalDeleteDialogue from "admin/AdminComponent/HospitalDelete/HospitalDelete";
import AdminChangePasswordDialogue from "admin/AdminComponent/AdminChangePassword/AdminChangePassword";

class AdminHospital extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogueList: [],
    };
  }

  addHID = () => {
    this.setState({
      dialogueList: [
        ...this.state.dialogueList,
        <HospitalInfoDialogue
          key="HID"
          close={(key) => this.closeD(key)}
          openCPD={() => this.addCPD()}
          openHDD={() => this.addHDD()}
        />,
      ],
    });
  };

  addHDD = () => {
    this.setState({
      dialogueList: [
        ...this.state.dialogueList,
        <HospitalDeleteDialogue key="HDD" close={(key) => this.closeD(key)} />,
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
  render() {
    return (
      <>
        <div className="AdminHospitalContainer">
          <div className="AdminHospitalFilter">
            <div className="FilterRow">
              <div className="Filter col">
                <div className="FilterLabel">Tên cơ sở khám chữa bệnh</div>
                <div className="FilterInput FilterTextInput">
                  <input
                    type="text"
                    placeholder="Nhập tên cơ sở khám chữa bệnh"
                    id="HospitalNameInput"
                    name="HospitalNameInput"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="AdminHospitalResult">
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
                  <th>Tên cơ sở</th>
                  <th>Tên tài khoản</th>
                  <th>Số điện thoại liên hệ</th>
                  <th>Hành động</th>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>1</td>
                  <td>Bệnh viện A</td>
                  <td>benhviena</td>
                  <td>03 Hoà Khánh Bắc, Liên Chiểu, Đà Nẵng</td>
                  <td>
                    <div className="Action">
                      <button
                        className="ViewButton"
                        onClick={() => this.addHID()}
                      >
                        <IoInformation />
                      </button>
                      <button
                        className="DeleteButton"
                        onClick={() => this.addHDD()}
                      >
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
                  <td>Phòng khám B</td>
                  <td>phongkhamb</td>
                  <td>04 Hoà Khánh Nam, Liên Chiểu, Đà Nẵng</td>
                  <td>
                    <div className="Action">
                      <button
                        className="ViewButton"
                        onClick={() => this.addHID()}
                      >
                        <IoInformation />
                      </button>
                      <button
                        className="DeleteButton"
                        onClick={() => this.addHDD()}
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
        {this.state.dialogueList}
      </>
    );
  }
}

export default AdminHospital;
