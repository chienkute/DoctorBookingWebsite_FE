import React from "react";
import "./PostDeny.scss";

class PostDenyDialogue extends React.Component {
  closePdD = () => {
    const { close } = this.props;
    close("PdD");
  };
  render() {
    return (
      <div className="OverlayContainer">
        <div className="Close"></div>
        <div className="OverlayContent">
          <div className="PostDenyDialogueContainer">
            <div className="PdDHeader">
              <h3 className="bold">Từ chối bài viết</h3>
            </div>
            <div className="PdDContent">
              <div className="PdDField PdDName">
                <div className="PdDNameLabel">Tiêu đề bài viết</div>
                <input type="text" id="PdDNameInput" disabled></input>
              </div>
              <div className="PdDField PdDAuthor">
                <div className="PdDAuthorLabel">Tác giả</div>
                <input type="text" id="PdDAuthorInput" disabled></input>
              </div>
              <div className="PdDField PdDLink">
                <div className="PdDLink">Link bài viết</div>
                <div id="PdDAuthorInput">
                  <a href="#">hibacsi.com/post/.....</a>
                </div>
              </div>
            </div>

            <div className="PdDActions">
              <div className="PdDWarning bold">
                Bạn chắc chắn muốn từ chối bài viết này chứ?
              </div>
              <div className="PdDButtons">
                <button id="PdDCancelButton" onClick={this.closePdD}>
                  Huỷ
                </button>
                <button id="PdDConfirmButton">Từ chối</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostDenyDialogue;
