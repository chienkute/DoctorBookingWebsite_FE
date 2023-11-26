import React from "react";
import "./AdminTools.scss";
import {
  FaRegCheckSquare,
  FaEraser,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import { FcPrevious, FcNext } from "react-icons/fc";

class AdminTool extends React.Component {
  render() {
    return (
      <div className="AdminToolContainer">
        <div className="AdminToolResult">
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
                <th>Tên công cụ</th>
                <th>Số lượt sử dụng</th>
                <th>Tình trạng</th>
                <th>Hành động</th>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>1</td>
                <td>Công cụ 01</td>
                <td>4981</td>
                <td className="displayedTool">
                  <FaRegEye />
                  <span>Đang hiển thị</span>
                </td>
                <td>
                  <div className="Action">
                    <button className="HiddenButton">
                      <FaRegEyeSlash />
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
                <td>Công cụ 02</td>
                <td>340</td>
                <td className="hiddenTool">
                  <FaRegEyeSlash />
                  <span>Đang ẩn</span>
                </td>
                <td>
                  <div className="Action">
                    <button className="DisplayButton">
                      <FaRegEye />
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

export default AdminTool;
