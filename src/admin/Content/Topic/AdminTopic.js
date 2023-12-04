import React from "react";
import "./AdminTopic.scss";
import { FaRegCheckSquare, FaEraser } from "react-icons/fa";
import { FcPrevious, FcNext } from "react-icons/fc";
import { FiEdit3 } from "react-icons/fi";
import TopicInfoDialogue from "admin/AdminComponent/TopicInfo/TopicInfo";
import TopicDeleteDialogue from "admin/AdminComponent/TopicDelete/TopicDelete";
import { FaPlus } from "react-icons/fa6";
class AdminTopic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogueList: [],
    };
  }

  addTID = (data = null) => {
    this.setState({
      dialogueList: [
        ...this.state.dialogueList,
        <TopicInfoDialogue
          key="TID"
          data={data}
          close={(key) => this.closeD(key)}
        />,
      ],
    });
  };

  addTDD = () => {
    this.setState({
      dialogueList: [
        ...this.state.dialogueList,
        <TopicDeleteDialogue key="TDD" close={(key) => this.closeD(key)} />,
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
        <div className="AdminTopicContainer">
          <div className="AdminTopicFilter">
            <div className="FilterRow">
              <div className="Filter col">
                <div className="FilterLabel">Tên chuyên mục</div>
                <div className="FilterInput FilterTextInput">
                  <input
                    type="text"
                    placeholder="Nhập tên chuyên mục"
                    id="TopicNameInput"
                    name="TopicNameInput"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="AdminTopicFunction">
            <button id="AdminTopicAddTopic" onClick={() => this.addTID()}>
              <FaPlus /> Thêm chuyên mục...
            </button>
          </div>
          <div className="AdminTopicResult">
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
                  <th>Tên chuyên đề</th>
                  <th>Số bài viết</th>
                  <th>Hành động</th>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>1</td>
                  <td>Chuyên đề 01</td>
                  <td>565</td>
                  <td>
                    <div className="Action">
                      <button
                        className="EditButton"
                        onClick={() => this.addTID({ name: "Chuyên đề 01" })}
                      >
                        <FiEdit3 />
                      </button>
                      <button
                        className="DeleteButton"
                        onClick={() => this.addTDD()}
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
                  <td>Chuyên đề 02</td>
                  <td>534</td>
                  <td>
                    <div className="Action">
                      <button
                        className="EditButton"
                        onClick={() => this.addTID({ name: "Chuyên đề 02" })}
                      >
                        <FiEdit3 />
                      </button>
                      <button
                        className="DeleteButton"
                        onClick={() => this.addTDD()}
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

export default AdminTopic;
