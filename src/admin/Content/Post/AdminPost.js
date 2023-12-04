import React, { useState } from "react";
import "./AdminPost.scss";
import { FaRegCheckSquare, FaEraser } from "react-icons/fa";
import { FcPrevious, FcNext } from "react-icons/fc";
import PostDeleteDialogue from "admin/AdminComponent/PostDelete/PostDelete";
import { IoInformation } from "react-icons/io5";
import PostViewDialogue from "admin/AdminComponent/PostView/PostView";

//class AdminPost extends React.Component {
const AdminPost = () => {
  const [dialogueList, setDialogueList] = useState([]);

  const addPWD = () => {
    setDialogueList([
      ...dialogueList,
      <PostViewDialogue
        key="PWD"
        close={(key) => closeD(key)}
        openPDD={() => addPDD()}
      />,
    ]);
  };

  const addPDD = () => {
    setDialogueList([
      ...dialogueList,
      <PostDeleteDialogue key="PDD" close={(key) => closeD(key)} />,
    ]);
  };

  const closeD = (key) => {
    const newLD = dialogueList.filter((dialogue) => dialogue.key !== key);
    setDialogueList(newLD);
  };

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
            <div className="Filter col-2"></div>
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
                <td>
                  <div className="Action">
                    <button className="InfoButton " onClick={() => addPWD()}>
                      <IoInformation />
                    </button>
                    <button className="DeleteButton" onClick={() => addPDD()}>
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
                <td>
                  <div className="Action">
                    <button className="InfoButton " onClick={() => addPWD()}>
                      <IoInformation />
                    </button>
                    <button className="DeleteButton" onClick={() => addPDD()}>
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

export default AdminPost;
