import UserTab from "containers/user/UserTab/userTab";
import { memo } from "react";
import { Accordion } from "react-bootstrap";
import "./userhelp.scss";
const UserHelp = () => {
  return (
    <div className="UserPageContainer">
      <div className="UserPageContent">
        <UserTab></UserTab>
        <div className="help">
          <h1>Trợ giúp</h1>
          <div className="help__content">
            <Accordion defaultActiveKey="0" style={{ width: "650px" }}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>HiBacSi là gì?</Accordion.Header>
                <Accordion.Body>
                  Hello Bacsi là một nền tảng chăm sóc sức khỏe trực tuyến.
                  Chúng tôi cung cấp thông tin, công cụ và dịch vụ hỗ trợ sức
                  khỏe - tất cả nội dung đều đã được tham vấn chuyên môn. Sứ
                  mệnh của chúng tôi là giúp bạn và người thân lựa chọn các
                  quyết định sáng suốt, từ đó sống khỏe mạnh và hạnh phúc hơn.
                  Hello Bacsi là công ty tư nhân thuộc sở hữu của Hello Health
                  Group Pte. Ltd. và hoạt động tại Việt Nam.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Vì sao tôi nên đăng ký tài khoản?
                </Accordion.Header>
                <Accordion.Body>
                  Đăng ký tài khoản thành viên ở HiBacsi đem lại cho bạn nhiều
                  lợi ích hơn như giúp bạn lưu trữ các thông tin sức khỏe cá
                  nhân, đặt lịch khám với bác sĩ, tham gia các cộng đồng sức
                  khỏe của HiBacsi cũng như hỗ trợ HiBacsi cá nhân hóa trải
                  nghiệm sử dụng nền tảng của bạn.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Đăng ký ở Hello Bacsi có mất phí không?
                </Accordion.Header>
                <Accordion.Body>
                  Miễn phí và luôn luôn miễn phí! Tuy nhiên, một số dịch vụ giúp
                  bạn kết nối với bên thứ ba có thể tính phí nhất định cho bạn.
                  Để biết thêm thông tin, vui lòng xem thêm tại chính sách Quảng
                  cáo & Tài trợ của chúng tôi
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(UserHelp);
