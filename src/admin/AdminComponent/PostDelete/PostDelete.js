import React from "react";
import "./PostDelete.scss";

class PostDeleteDialogue extends React.Component {
  closePDD = () => {
    const { close } = this.props;
    close("PDD");
  };
  render() {
    return (
      <div className="OverlayContainer">
        <div className="Close"></div>
        <div className="OverlayContent">
          <div className="PostDeleteDialogueContainer">
            <div className="PDDHeader">
              <h3 className="bold">Xoá bài viết</h3>
            </div>
            <div className="PDDContent">
              <div className="PDDField PDDName">
                <div className="PDDNameLabel">Tiêu đề bài viết</div>
                <input type="text" id="PDDNameInput" disabled></input>
              </div>
              <div className="PDDField PDDAuthor">
                <div className="PDDAuthorLabel">Tác giả</div>
                <input type="text" id="PDDAuthorInput" disabled></input>
              </div>
              <div className="PDDField PDDLink">
                <div className="PDDLink">Link bài viết</div>
                <div id="PDDAuthorInput">
                  <a href="#">hibacsi.com/post/.....</a>
                </div>
              </div>
            </div>
            <div className="PDDActions">
              <div className="PDDWarning bold">
                Bạn chắc chắn muốn xoá bài viết này chứ này chứ?{" "}
                <span className="bold" style={{ color: "red" }}>
                  Hành động này không thể hoàn tác
                </span>
              </div>
              <div className="PDDButtons">
                <button id="PDDCancelButton" onClick={this.closePDD}>
                  Huỷ
                </button>
                <button id="PDDConfirmButton">Xác nhận</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostDeleteDialogue;
