import React, { useState } from "react";
import "./AdminHospital.scss";
import { FaRegCheckSquare, FaEraser } from "react-icons/fa";
import { FcPrevious, FcNext } from "react-icons/fc";
import { IoInformation } from "react-icons/io5";
import HospitalInfoDialogue from "admin/AdminComponent/HospitalInfo/HospitalInfo";
import HospitalDeleteDialogue from "admin/AdminComponent/HospitalDelete/HospitalDelete";
import AdminChangePasswordDialogue from "admin/AdminComponent/AdminChangePassword/AdminChangePassword";
import { FaPlus } from "react-icons/fa6";
import AdminAddAccountDialogue from "admin/AdminComponent/AdminAddAccount/AdminAddAccount";

const AdminHospital = () => {
  const [dialogueList, setDialogueList] = useState([]);

  const addAAD = () => {
    setDialogueList([
      ...dialogueList,
      <AdminAddAccountDialogue
        key="AAD"
        accType={1}
        close={(key) => closeD(key)}
      />,
    ]);
  };

  const addHID = () => {
    setDialogueList([
      ...dialogueList,
      <HospitalInfoDialogue
        key="HID"
        close={(key) => closeD(key)}
        openCPD={() => addCPD()}
        openHDD={() => addHDD()}
      />,
    ]);
  };

  const addHDD = () => {
    setDialogueList([
      ...dialogueList,
      <HospitalDeleteDialogue key="HDD" close={(key) => closeD(key)} />,
    ]);
  };

  const addCPD = () => {
    setDialogueList([
      ...dialogueList,
      <AdminChangePasswordDialogue key="CPD" close={(key) => closeD(key)} />,
    ]);
  };

  const closeD = (key) => {
    const newLD = dialogueList.filter((dialogue) => dialogue.key !== key);
    setDialogueList(newLD);
  };
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
        <div className="AdminHospitalFunction">
          <button id="AdminHospitalAddAccount" onClick={() => addAAD()}>
            <FaPlus /> Thêm cơ sở KCB...
          </button>
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
                    <button className="ViewButton" onClick={() => addHID()}>
                      <IoInformation />
                    </button>
                    <button className="DeleteButton" onClick={() => addHDD()}>
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
                    <button className="ViewButton" onClick={() => addHID()}>
                      <IoInformation />
                    </button>
                    <button className="DeleteButton" onClick={() => addHDD()}>
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
      {dialogueList}
    </>
  );
};

export default AdminHospital;
