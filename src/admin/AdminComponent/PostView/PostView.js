import React from "react";
import "./PostView.scss";
import { FaTrashAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const PostViewDialogue = (props) => {
  const closePWD = () => {
    const { close } = props;
    close("PWD");
  };

  const openPDD = () => {
    const { openPDD } = props;
    openPDD();
  };

  return (
    <div className="OverlayContainer">
      <div className="Close">
        <button id="UIDCloseButton" onClick={() => closePWD()}>
          <IoClose />
        </button>
      </div>
      <div className="OverlayContent">
        <div className="PostViewDialogueContainer">
          <div className="PWDActions">
            <div className="PWDButtons">
              <button id="PWDDeleteButton" onClick={openPDD}>
                <FaTrashAlt /> Xóa bài viết
              </button>
            </div>
          </div>
          <div className="PWDContent">{/* HTML Content Here*/}</div>
        </div>
      </div>
    </div>
  );
};

export default PostViewDialogue;
