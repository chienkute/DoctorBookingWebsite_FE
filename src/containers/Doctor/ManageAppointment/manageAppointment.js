import { memo, useEffect, useRef, useState } from "react";
import "./manageAppointment.scss";
import { FaEraser } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { IoInformation } from "react-icons/io5";
import {
  FaRegCheckSquare,
  FaRegCheckCircle,
  FaRegTimesCircle,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import avatar from "../../../assets/avatar.png";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ReactPaginate from "react-paginate";
import { useDebounce } from "@uidotdev/usehooks";
import { useParams } from "react-router";
import { MdOutlinePending } from "react-icons/md";
import { getDoctorAppoinment } from "service/DoctorService";
import { statusAppoinment } from "service/UserService";
import { toast } from "react-toastify";
const ManageAppointment = () => {
  const { id } = useParams();
  const [update, setUpdate] = useState(false);
  const [showAppointmentInfor, setShowAppoinmentInfor] = useState(false);
  const handleCloseAppointmentInfor = () => setShowAppoinmentInfor(false);
  const handleShowAppointmentInfor = () => setShowAppoinmentInfor(true);
  const [showConfirmAppointment, setShowConfirmAppointment] = useState(false);
  const handleCloseConfirmAppointment = () => setShowConfirmAppointment(false);
  const handleShowConfirmAppointment = () => setShowConfirmAppointment(true);
  const [showApproveAppointment, setShowApproveAppointment] = useState(false);
  const handleCloseApproveAppointment = () => setShowApproveAppointment(false);
  const handleShowApproveAppointment = () => setShowApproveAppointment(true);
  const [showCancelAppointment, setShowCancelAppointment] = useState(false);
  const handleCloseCancelAppointment = () => setShowCancelAppointment(false);
  const handleShowCancelAppointment = () => setShowCancelAppointment(true);
  const [edit, setEdit] = useState(false);
  const [query, setQuery] = useState("");
  const [count, setCount] = useState("");
  const [appointment, setAppoinment] = useState([]);
  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState("");
  const [birhtday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAddress] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [date, setDate] = useState("");
  console.log(appointment);
  const queryDebounce = useDebounce(query, 500);
  const getAppoinment = async () => {
    let res = await getDoctorAppoinment(3);
    if (res) {
      console.log(res);
      setAppoinment(res?.results);
      setCount(res?.count);
    }
  };
  const setStatus = async (id, status) => {
    let res = await statusAppoinment(id, status);
    if (res) {
      console.log(res);
      toast.success("Thay đổi thành công");
    } else {
      toast.error("Thay đổi thất bại");
    }
  };
  const filteredCategories = appointment.filter((item) =>
    item?.user?.name.toLowerCase().includes(queryDebounce.toLowerCase()),
  );
  useEffect(() => {
    getAppoinment();
  }, []);
  useEffect(() => {
    getAppoinment();
  }, [update]);
  const formatTime = (time) => {
    if (time) {
      const timeParts = time.split(":");
      return `${timeParts[0]}:${timeParts[1]}`;
    }
    return "";
  };
  return (
    <div className="management">
      <div className="management__header">
        <div className="management__search">
          <div className="management__input flex-center">
            <input
              type="text"
              placeholder="Tìm kiếm theo tên người dùng"
              id="care__ins"
              autoComplete="off"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="">
          <Form.Select
            aria-label="Default select example"
            className="form__select"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          >
            <option>Chọn tình trạng lịch hẹn</option>
            <option value="">Tất cả</option>
            <option value="Đa khoa">Chưa xác nhận</option>
            <option value="2">Đã hoàn thành</option>
            <option value="3">Đã xác nhận</option>
          </Form.Select>
        </div>
      </div>
      <div className="management__content">
        <div className="AdminUserResult">
          <div className="ResultPerTable">
            <label for="dropdown">Có {count} kết quả tìm được</label>
          </div>
          <div className="Table">
            <table>
              <tr>
                <th>
                  <FaRegCheckSquare />
                </th>
                <th>STT</th>
                <th>Họ tên người đặt</th>
                <th>SĐT</th>
                <th>Thời Gian</th>
                <th>Tình trạng</th>
                <th>Hành động</th>
              </tr>
              {appointment &&
                appointment.length > 0 &&
                filteredCategories.map((item, index) => {
                  return (
                    <tr>
                      <td>
                        <input type="checkbox"></input>
                      </td>
                      <td>{index}</td>
                      <td style={{ transform: "translateY(10px)" }}>
                        <p>{item?.user?.name || "Chưa có tên bệnh nhân"}</p>
                      </td>
                      <td>{item?.user?.phone || "Chưa có số điện thoại"}</td>
                      <td>
                        {formatTime(`${item?.schedule_doctor?.schedule.start}`)}
                        -{formatTime(`${item?.schedule_doctor?.schedule?.end}`)}
                        , {item?.date || "--"}
                      </td>
                      <td
                        className="waitingPost"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          transform: "translate(20px,10px)",
                        }}
                      >
                        {item?.status === 0 && (
                          <div>
                            <MdOutlinePending />
                            <span>Chưa xác nhận hẹn</span>
                          </div>
                        )}
                        {item?.status === 1 && (
                          <div>
                            {/* <FaRegCheckCircle />
                            <span>Đã hoàn thành</span> */}
                            <FaRegCheckCircle style={{ color: "#33E423" }} />
                            <span>Đã xác nhận hẹn</span>
                          </div>
                        )}
                      </td>
                      <td>
                        <div className="Action">
                          <button
                            className="InfoButton"
                            onClick={() => {
                              handleShowAppointmentInfor();
                              setEdit(true);
                              setUserName(item?.user?.name);
                              setPhone(item?.user?.phone);
                              setGender(item?.user?.gender);
                              setBirthday(item?.user?.birthday);
                              setAddress(item?.user?.address);
                              setTimeStart(
                                item?.schedule_doctor?.schedule.start,
                              );
                              setTimeEnd(item?.schedule_doctor?.schedule?.end);
                              setDate(item?.date);
                            }}
                          >
                            <IoInformation />
                          </button>
                          <button
                            className="ApproveButton"
                            onClick={() => {
                              handleShowApproveAppointment();
                            }}
                          >
                            <FaRegCheckCircle />
                          </button>
                          <button
                            className="ChangeInfoButton"
                            onClick={() => {
                              setEdit(false);
                            }}
                          >
                            <FiEdit3 />
                          </button>
                          <Modal
                            show={showAppointmentInfor}
                            onHide={handleCloseAppointmentInfor}
                            centered
                            size="lg"
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Thông tin lịch hẹn</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <div className="add__form">
                                <div className="form__avatar">
                                  <label htmlFor="">Ảnh đại diện</label>
                                  <div className="form__image">
                                    <img src={avatar} alt="" />
                                  </div>
                                </div>
                                <div className="appointmentManage_content">
                                  <div className="appointmentManage">
                                    <div className="appointmentManage_header">
                                      Thông tin bệnh nhân
                                    </div>
                                    <div className="appointmentManage_info">
                                      <span>Họ và tên : </span>
                                      <p>{userName}</p>
                                    </div>
                                    <div className="appointmentManage_info">
                                      <span>Giới tính : </span>
                                      {gender === true ? (
                                        <p>Nam</p>
                                      ) : gender === false ? (
                                        <p>Nữ</p>
                                      ) : (
                                        <p></p>
                                      )}
                                    </div>
                                    <div className="appointmentManage_info">
                                      <span>Ngày sinh : </span>
                                      <p>{birhtday}</p>
                                    </div>
                                    <div className="appointmentManage_info">
                                      <span>Số điện thoại : </span>
                                      <p>{phone}</p>
                                    </div>
                                    <div className="appointmentManage_info">
                                      <span>Email : </span>
                                      <p>chienkute@gmail.com</p>
                                    </div>
                                    <div className="appointmentManage_info">
                                      <span>Địa điểm : </span>
                                      <p>{adress}</p>
                                    </div>
                                  </div>
                                  <div className="appointmentManage">
                                    <div className="appointmentManage_header">
                                      Chi tiết lịch hẹn
                                    </div>
                                    <div className="appointmentManage_info">
                                      <span>Dịch vụ : </span>
                                      <p>Đau răng</p>
                                    </div>
                                    <div className="appointmentManage_info">
                                      <span>Thời gian : </span>
                                      <p>
                                        {formatTime(timeStart)}-
                                        {formatTime(timeEnd)}
                                      </p>
                                    </div>
                                    <div className="appointmentManage_info">
                                      <span>Ngày : </span>
                                      <p>{date}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button
                                variant="secondary"
                                onClick={handleCloseAppointmentInfor}
                              >
                                Đóng
                              </Button>
                            </Modal.Footer>
                          </Modal>
                          <button
                            className="DenyButton"
                            onClick={() => {
                              handleShowCancelAppointment();
                            }}
                          >
                            <FaRegTimesCircle />
                          </button>
                          <Modal
                            show={showCancelAppointment}
                            onHide={handleCloseCancelAppointment}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Bạn muốn hủy lịch hẹn ?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              Thao tác này không thể hoàn tác!!!
                            </Modal.Body>
                            <Modal.Footer>
                              <Button
                                variant="secondary"
                                onClick={handleCloseCancelAppointment}
                              >
                                Hủy
                              </Button>
                              <Button
                                variant="primary"
                                onClick={() => {
                                  handleCloseCancelAppointment();
                                  setStatus(item?.id, 2);
                                }}
                              >
                                Xác nhận
                              </Button>
                            </Modal.Footer>
                          </Modal>
                          <Modal
                            show={showApproveAppointment}
                            onHide={handleCloseApproveAppointment}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>
                                Bạn muốn xác nhận cuộc hẹn ?
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              Thao tác này không thể hoàn tác!!!
                            </Modal.Body>
                            <Modal.Footer>
                              <Button
                                variant="secondary"
                                onClick={handleCloseApproveAppointment}
                              >
                                Hủy
                              </Button>
                              <Button
                                variant="primary"
                                onClick={() => {
                                  handleCloseApproveAppointment();
                                  setStatus(item?.id, 1);
                                }}
                              >
                                Xác nhận
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
      <div className="management__pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          // onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={3}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item previous"
          previousLinkClassName="page-link"
          nextClassName="page-item previous"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active active-pagination"
        />
      </div>
    </div>
  );
};
export default memo(ManageAppointment);
