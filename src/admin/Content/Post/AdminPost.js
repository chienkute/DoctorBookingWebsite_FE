import React from "react";
import "./AdminPost.scss";
import {
  FaRegCheckSquare,
  FaEraser,
  FaRegCheckCircle,
  FaRegTimesCircle,
} from "react-icons/fa";
import { FcPrevious, FcNext } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { MdOutlinePending } from "react-icons/md";
import PostDenyDialogue from "admin/AdminComponent/PostDeny/PostDeny";
import PostDeleteDialogue from "admin/AdminComponent/PostDelete/PostDelete";

class AdminPost extends React.Component {
  changeState(value, field) {
    let UID = document.querySelector(field);
    if (value) UID.style.display = "flex";
    else UID.style.display = "none";
  }
  render() {
    return (
      <>
        <div className="AdminPostContainer">
          <div className="AdminPostFilter">
            <div className="FilterRow">
              <div className="Filter col-2">
                <div className="FilterLabel">Tên bài viết</div>
                <div className="FilterInput FilterTextInput">
                  <input
                    type="text"
                    placeholder="Nhập tên bài viết"
                    id="titleInput"
                    name="titleInput"
                  ></input>
                </div>
              </div>
              <div className="Filter col-2">
                <div className="FilterLabel">Trạng thái</div>
                <div className="FilterInput FilterRadioInput">
                  <div className="RadioButton">
                    <input
                      type="radio"
                      name="postStatus"
                      id="pendingPost"
                      value="pendingPost"
                      checked="true"
                    ></input>
                    <label htmlFor="pendingPost">Đang chờ duyệt</label>
                  </div>
                  <div className="RadioButton">
                    <input
                      type="radio"
                      name="postStatus"
                      id="approvedPost"
                      value="approvedPost"
                    ></input>
                    <label htmlFor="approvedPost">Đã duyệt</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="FilterRow">
              <div className="Filter col">
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
            </div>
          </div>
          <div className="AdminPostResult">
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
                  <th>Tiêu đề bài viết</th>
                  <th>Tác giả bài viết</th>
                  <th>Link bài viết</th>
                  <th>Tình trạng</th>
                  <th>Hành động</th>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>1</td>
                  <td>Tiêu đề Tiêu đề Tiêu...</td>
                  <td>hoanganh07</td>
                  <td>
                    <a href="#">hibacsi.com/post/.....</a>
                  </td>
                  <td className="waitingPost">
                    <MdOutlinePending />
                    <span>Đang chờ duyệt</span>
                  </td>
                  <td>
                    <div className="Action">
                      <button className="ApproveButton ">
                        <FaRegCheckCircle />
                      </button>
                      <button
                        className="DenyButton"
                        onClick={() =>
                          this.changeState(true, ".PdDOverlayContainer")
                        }
                      >
                        <FaRegTimesCircle />
                      </button>
                      <button
                        className="DeleteButton"
                        onClick={() =>
                          this.changeState(true, ".PDDOverlayContainer")
                        }
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
                  <td>Tiêu đề Tiêu đề Tiêu...</td>
                  <td>hoanganh07</td>
                  <td>
                    <a href="#">hibacsi.com/post/.....</a>
                  </td>
                  <td className="approvedPost">
                    <FaRegCheckCircle />
                    <span>Đã duyệt bài</span>
                  </td>
                  <td>
                    <div className="Action">
                      <button className="ApproveButton disabled">
                        <FaRegCheckCircle />
                      </button>
                      <button className="DenyButton disabled">
                        <FaRegTimesCircle />
                      </button>
                      <button
                        className="DeleteButton"
                        onClick={() =>
                          this.changeState(true, ".PDDOverlayContainer")
                        }
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
        <div className="PdDOverlayContainer">
          <div className="PdDClose"></div>
          <div className="PdDOverlayContent">
            <PostDenyDialogue
              closePdDMethod={(value, field) => this.changeState(value, field)}
            />
          </div>
        </div>
        <div className="PDDOverlayContainer">
          <div className="PDDClose">
            <button
              id="PDDCloseButton"
              onClick={() => this.changeState(false, ".PDDOverlayContainer")}
            >
              <IoClose />
            </button>
          </div>
          <div className="PDDOverlayContent">
            <PostDeleteDialogue
              closePDDMethod={(value, field) => this.changeState(value, field)}
            />
          </div>
        </div>
      </>
    );
  }
}

export default AdminPost;
