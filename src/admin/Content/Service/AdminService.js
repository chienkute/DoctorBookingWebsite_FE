import React, { useState } from "react";
import "./AdminService.scss";
import { FaRegCheckSquare, FaEraser } from "react-icons/fa";
import { FcPrevious, FcNext } from "react-icons/fc";
import { FiEdit3 } from "react-icons/fi";
import ServiceInfoDialogue from "admin/AdminComponent/ServiceInfo/ServiceInfo";
import ServiceDeleteDialogue from "admin/AdminComponent/ServiceDelete/ServiceDelete";
import { FaPlus } from "react-icons/fa6";
import ser_avt from "assets/service.png";

//class AdminService extends React.Component {
const AdminService = () => {
  const [dialogueList, setDialogueList] = useState([]);

  const addSID = (data = null) => {
    setDialogueList([
      ...dialogueList,
      <ServiceInfoDialogue
        key="SID"
        data={data}
        close={(key) => closeD(key)}
      />,
    ]);
  };

  const addSDD = () => {
    setDialogueList([
      ...dialogueList,
      <ServiceDeleteDialogue key="SDD" close={(key) => closeD(key)} />,
    ]);
  };

  const closeD = (key) => {
    const newLD = dialogueList.filter((dialogue) => dialogue.key !== key);
    setDialogueList(newLD);
  };

  return (
    <>
      <div className="AdminServiceContainer">
        <div className="AdminServiceFilter">
          <div className="FilterRow">
            <div className="Filter col">
              <div className="FilterLabel">Tên dịch vụ</div>
              <div className="FilterInput FilterTextInput">
                <input
                  type="text"
                  placeholder="Nhập tên dịch vụ"
                  id="ServiceNameInput"
                  name="ServiceNameInput"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="AdminServiceFunction">
          <button id="AdminServiceAddService" onClick={() => addSID()}>
            <FaPlus /> Thêm dịch vụ...
          </button>
        </div>
        <div className="AdminServiceResult">
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
                <th>Tên dịch vụ</th>
                <th>Số lượt sử dụng</th>
                <th>Hành động</th>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>1</td>
                <td>
                  <img src={ser_avt} alt="avt"></img>
                  Dịch vụ 01
                </td>
                <td>565</td>
                <td>
                  <div className="Action">
                    <button
                      className="EditButton"
                      onClick={() =>
                        addSID({
                          name: "Dịch vụ 01",
                          image: ser_avt,
                          description: "Description",
                        })
                      }
                    >
                      <FiEdit3 />
                    </button>
                    <button className="DeleteButton" onClick={() => addSDD()}>
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
                <td>
                  <img src={ser_avt} alt="avt"></img>
                  Dịch vụ 02
                </td>
                <td>534</td>
                <td>
                  <div className="Action">
                    <button
                      className="EditButton"
                      onClick={() =>
                        addSID({ name: "Dịch vụ 02", image: ser_avt })
                      }
                    >
                      <FiEdit3 />
                    </button>
                    <button className="DeleteButton" onClick={() => addSDD()}>
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

export default AdminService;
