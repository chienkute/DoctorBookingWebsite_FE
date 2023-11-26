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
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
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
