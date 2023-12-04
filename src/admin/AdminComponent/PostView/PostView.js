import React from "react";
import "./PostView.scss";
import { FaTrashAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

class PostViewDialogue extends React.Component {
  closePWD = () => {
    const { close } = this.props;
    close("PWD");
  };

  openPDD = () => {
    const { openPDD } = this.props;
    openPDD();
  };
  render() {
    return (
      <div className="OverlayContainer">
        <div className="Close">
          <div className="Close">
            <button id="UIDCloseButton" onClick={() => this.closePWD()}>
              <IoClose />
            </button>
          </div>
        </div>
        <div className="OverlayContent">
          <div className="PostViewDialogueContainer">
            <div className="PWDActions">
              <div className="PWDButtons">
                <button id="PWDDeleteButton" onClick={this.openPDD}>
                  <FaTrashAlt /> Xóa bài viết
                </button>
              </div>
            </div>
            <div className="PWDContent">
              {/* HTML Content Here, Below is Demo which width/height are too high */}
              <p>
                Line Line Line Line Line Line Line Line Line Line Line Line Line
                Line Line Line Line Line Line Line Line Line Line Line Line Line
                Line Line Line Line Line Line Line Line Line Line Line Line Line
                Line Line Line Line Line Line Line Line Line Line Line Line Line
                Line Line Line Line Line Line Line Line Line Line Line Line Line
                Line Line Line Line Line Line Line Line Line Line Line Line Line
              </p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>
              <p>Line</p>v
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostViewDialogue;
