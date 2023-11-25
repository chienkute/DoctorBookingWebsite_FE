import UserTab from "containers/user/UserTab/userTab";
import { memo, useContext } from "react";
import "./userHistory.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { LoadingContext } from "context/LoadingContext";
const UserHistory = () => {
  const { loading, setLoading } = useContext(LoadingContext);
  return (
    <div className="UserPageContainer">
      <div className="UserPageContent">
        <UserTab></UserTab>
        {loading ? (
          <div className="lds lds-user">
            <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <div className="history">
            <h1>Lịch sử đặt chỗ</h1>
            <div className="history__tab">
              <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="home" title="Lịch hẹn sắp đến">
                  <table class="table align-middle mb-0 bg-white history__tab_table">
                    <thead class="bg-light">
                      <tr>
                        <th>Tên bác sĩ</th>
                        <th>Thời gian</th>
                        <th>Địa điểm</th>
                        <th className="history__tab_table_title">Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <img
                              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                              alt=""
                              class="rounded-circle"
                              style={{ width: "45px", height: "45px" }}
                            />
                            <div class="ms-3">
                              <p class="fw-bold mb-0">BS. Trần Thị A</p>
                              <p class="text-muted mb-0">Nha khoa</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="fw-normal mb-1">8:30 - 9:00</p>
                          <p class="text-muted mb-0">24/11/2023</p>
                        </td>
                        <td>
                          <p class="fw-normal mb-1">Đà Nẵng</p>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-link btn-sm btn-rounded"
                          >
                            Hủy
                          </button>
                          <button
                            type="button"
                            class="btn btn-link btn-sm btn-rounded"
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Tab>
                <Tab
                  eventKey="profile"
                  title="Lịch hẹn đã hoàn thành"
                  className="history__tab_title"
                >
                  Tab content for Profile
                </Tab>
              </Tabs>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default memo(UserHistory);
