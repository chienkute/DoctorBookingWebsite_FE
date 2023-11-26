import React from "react";
import "./AdminSpecialist.scss";
import { FaRegCheckSquare, FaEraser } from "react-icons/fa";
import { FcPrevious, FcNext } from "react-icons/fc";
import { FiEdit3 } from "react-icons/fi";

class AdminSpecialist extends React.Component {
  render() {
    return (
      <div className="AdminSpecialistContainer">
        <div className="AdminSpecialistFilter">
          <div className="FilterRow">
            <div className="Filter col">
              <div className="FilterLabel">Tên chuyên khoa</div>
              <div className="FilterInput FilterTextInput">
                <input
                  type="text"
                  placeholder="Nhập tên chuyên khoa"
                  id="SpecialistNameInput"
                  name="SpecialistNameInput"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="AdminSpecialistResult">
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
                <th>Tên chuyên khoa</th>
                <th>Số bác sĩ trong chuyên khoa</th>
                <th>Hành động</th>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>1</td>
                <td>Chuyên khoa 01</td>
                <td>565</td>
                <td>
                  <div className="Action">
                    <button className="EditButton">
                      <FiEdit3 />
                    </button>
                    <button className="DeleteButton">
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
                <td>Chuyên khoa 02</td>
                <td>534</td>
                <td>
                  <div className="Action">
                    <button className="EditButton">
                      <FiEdit3 />
                    </button>
                    <button className="DeleteButton">
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

export default AdminSpecialist;
