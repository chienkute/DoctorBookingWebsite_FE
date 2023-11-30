import React from "react";
import "./Introduce.scss";
import researchImage from "../../../../assets/Research.png";
import reviewImage from "../../../../assets/Reviewed.png";
import monitorImage from "../../../../assets/Monitored.png";
import Image from "../../../../assets/Trustworthy.png";
class Introduce extends React.Component {
  render() {
    return (
      <div className="IntroduceContainer">
        <div className="IntroduceHeader">
          <h1>HiBacsi đem đến thông tin sức khỏe mà bạn cần</h1>
        </div>
        <div className="IntroduceContentContainer">
          <div className="IntroduceContent col-4">
            <img src={researchImage} alt="Img"></img>
            <div className="IntroduceText">
              <h3>Dựa trên nguồn thông tin xác thực</h3>
              <p>
                Tất cả bài viết của chúng tôi đều dựa trên những tin tức y khoa,
                nghiên cứu và báo cáo khoa học đến từ các tổ chức giáo dục, y tế
                hàng đầu.
              </p>
            </div>
          </div>
          <div className="IntroduceContent col-4">
            <img src={reviewImage} alt="Img"></img>
            <div className="IntroduceText">
              <h3>Được tham vấn y khoa</h3>
              <p>
                Bài viết trên trang Hello Bacsi được đội ngũ bác sĩ và chuyên
                gia y tế của chúng tôi cẩn trọng tư vấn và kiểm duyệt.
              </p>
            </div>
          </div>
          <div className="IntroduceContent col-4">
            <img src={monitorImage} alt="Img"></img>
            <div className="IntroduceText">
              <h3>Được cập nhật thường xuyên</h3>
              <p>
                Chúng tôi làm việc với các bác sĩ và chuyên gia y tế để liên tục
                cập nhật các bài viết đảm bảo độ chính xác.
              </p>
            </div>
          </div>
          <div className="IntroduceContent col-4">
            <img src={Image} alt="Img"></img>
            <div className="IntroduceText">
              <h3>Đáng tin cậy</h3>
              <p>
                Tại HiBacsi, trang thông tin y tế, sức khỏe hàng đầu thị trường,
                chúng tôi cam kết đem đến những bài viết chính xác, dễ dàng tiếp
                cận và cập nhật nhất, giúp bạn đọc có thể đưa ra quyết định đúng
                đắn nhất cho sức khỏe của bản thân và gia đình.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduce;
