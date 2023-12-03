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
import { useFormik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import ReactQuill from "react-quill";
import ReactPaginate from "react-paginate";
import { useDebounce } from "@uidotdev/usehooks";
import { searchDoctor } from "service/UserService";
import { useParams } from "react-router";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlinePending } from "react-icons/md";
const ManageAppointment = () => {
  const { id } = useParams();
  const [showAddNewDoctor, setShowAddNewDoctor] = useState(false);
  const handleCloseAddNewDoctor = () => setShowAddNewDoctor(false);
  const handleShowAddNewDoctor = () => setShowAddNewDoctor(true);
  const [showEditDoctor, setShowEditDoctor] = useState(false);
  const handleCloseEditDoctor = () => setShowEditDoctor(false);
  const handleShowEditDoctor = () => setShowEditDoctor(true);
  const [showDeleteDoctor, setShowDeleteDoctor] = useState(false);
  const handleCloseDeleteDoctor = () => setShowDeleteDoctor(false);
  const handleShowDeleteDoctor = () => setShowDeleteDoctor(true);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [edit, setEdit] = useState(false);
  const [query, setQuery] = useState("");
  const queryDebounce = useDebounce(query, 500);
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
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
            <label for="dropdown">Có 5 kết quả tìm được</label>
          </div>
          <div className="Table">
            <table>
              <tr>
                <th>
                  <FaRegCheckSquare />
                </th>
                <th>STT</th>
                <th>Họ tên người đặt</th>
                <th>Dịch vụ</th>
                <th>Thời Gian</th>
                <th>Tình trạng</th>
                <th>Hành động</th>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>1</td>
                <td style={{ transform: "translateY(10px)" }}>
                  <p>Phạm Sĩ Chiến</p>
                </td>
                <td>Khám da mặt</td>
                <td>8:30 - 9:30, 21/10/2022</td>
                <td
                  className="approvedPost"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    transform: "translate(30px,10px)",
                  }}
                >
                  <FaRegCheckCircle />
                  <span>Đã hoàn thành</span>
                </td>
                <td>
                  <div className="Action">
                    <button
                      className="InfoButton"
                      onClick={() => {
                        handleShowEditDoctor();
                        setEdit(true);
                      }}
                    >
                      <IoInformation />
                    </button>
                    <button className="ApproveButton ">
                      <FaRegCheckCircle />
                    </button>
                    <button
                      className="ChangeInfoButton"
                      onClick={() => {
                        handleShowEditDoctor();
                        setEdit(false);
                      }}
                    >
                      <FiEdit3 />
                    </button>
                    <Modal
                      show={showEditDoctor}
                      onHide={handleCloseEditDoctor}
                      centered
                      size="lg"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Thông tin bác sĩ</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="add__form">
                          <div className="form__avatar">
                            <label htmlFor="">
                              Ảnh đại diện <span>*</span>
                            </label>
                            <div className="form__image">
                              <img src={avatar} alt="" />
                            </div>
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={handleCloseEditDoctor}
                        >
                          Đóng
                        </Button>
                        {edit ? (
                          <div></div>
                        ) : (
                          <Button
                            variant="primary"
                            onClick={handleCloseEditDoctor}
                          >
                            Lưu
                          </Button>
                        )}
                      </Modal.Footer>
                    </Modal>
                    <button className="DenyButton">
                      <FaRegTimesCircle />
                    </button>
                    <Modal
                      show={showDeleteDoctor}
                      onHide={handleCloseDeleteDoctor}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Bạn muốn xóa bác sĩ này?</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Thao tác này không thể hoàn tác!!!
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={handleCloseDeleteDoctor}
                        >
                          Hủy
                        </Button>
                        <Button
                          variant="primary"
                          onClick={handleCloseDeleteDoctor}
                        >
                          Xác nhận
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>1</td>
                <td style={{ transform: "translateY(10px)" }}>
                  <p>Phạm Sĩ Chiến</p>
                </td>
                <td>Khám da mặt</td>
                <td>8:30 - 9:30, 21/10/2022</td>
                <td
                  className="waitingPost"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    transform: "translate(20px,10px)",
                  }}
                >
                  <MdOutlinePending />
                  <span>Chưa xác nhận hẹn</span>
                </td>
                <td>
                  <div className="Action">
                    <button
                      className="InfoButton"
                      onClick={() => {
                        handleShowEditDoctor();
                        setEdit(true);
                      }}
                    >
                      <IoInformation />
                    </button>
                    <button className="ApproveButton ">
                      <FaRegCheckCircle />
                    </button>
                    <button
                      className="ChangeInfoButton"
                      onClick={() => {
                        handleShowEditDoctor();
                        setEdit(false);
                      }}
                    >
                      <FiEdit3 />
                    </button>
                    <Modal
                      show={showEditDoctor}
                      onHide={handleCloseEditDoctor}
                      centered
                      size="lg"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Thông tin bác sĩ</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="add__form">
                          <div className="form__avatar">
                            <label htmlFor="">
                              Ảnh đại diện <span>*</span>
                            </label>
                            <div className="form__image">
                              <img src={avatar} alt="" />
                            </div>
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={handleCloseEditDoctor}
                        >
                          Đóng
                        </Button>
                        {edit ? (
                          <div></div>
                        ) : (
                          <Button
                            variant="primary"
                            onClick={handleCloseEditDoctor}
                          >
                            Lưu
                          </Button>
                        )}
                      </Modal.Footer>
                    </Modal>
                    <button className="DenyButton">
                      <FaRegTimesCircle />
                    </button>
                    <Modal
                      show={showDeleteDoctor}
                      onHide={handleCloseDeleteDoctor}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Bạn muốn xóa bác sĩ này?</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Thao tác này không thể hoàn tác!!!
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={handleCloseDeleteDoctor}
                        >
                          Hủy
                        </Button>
                        <Button
                          variant="primary"
                          onClick={handleCloseDeleteDoctor}
                        >
                          Xác nhận
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>1</td>
                <td style={{ transform: "translateY(10px)" }}>
                  <p>Phạm Sĩ Chiến</p>
                </td>
                <td>Khám da mặt</td>
                <td>8:30 - 9:30, 21/10/2022</td>
                <td
                  className="approvedPost"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    transform: "translate(30px,10px)",
                  }}
                >
                  <FaRegCheckCircle />
                  <span>Đã xác nhận hẹn</span>
                </td>
                <td>
                  <div className="Action">
                    <button
                      className="InfoButton"
                      onClick={() => {
                        handleShowEditDoctor();
                        setEdit(true);
                      }}
                    >
                      <IoInformation />
                    </button>
                    <button className="ApproveButton ">
                      <FaRegCheckCircle />
                    </button>
                    <button
                      className="ChangeInfoButton"
                      onClick={() => {
                        handleShowEditDoctor();
                        setEdit(false);
                      }}
                    >
                      <FiEdit3 />
                    </button>
                    <Modal
                      show={showEditDoctor}
                      onHide={handleCloseEditDoctor}
                      centered
                      size="lg"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Thông tin bác sĩ</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="add__form">
                          <div className="form__avatar">
                            <label htmlFor="">
                              Ảnh đại diện <span>*</span>
                            </label>
                            <div className="form__image">
                              <img src={avatar} alt="" />
                            </div>
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={handleCloseEditDoctor}
                        >
                          Đóng
                        </Button>
                        {edit ? (
                          <div></div>
                        ) : (
                          <Button
                            variant="primary"
                            onClick={handleCloseEditDoctor}
                          >
                            Lưu
                          </Button>
                        )}
                      </Modal.Footer>
                    </Modal>
                    <button className="DenyButton">
                      <FaRegTimesCircle />
                    </button>
                    <Modal
                      show={showDeleteDoctor}
                      onHide={handleCloseDeleteDoctor}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Bạn muốn xóa bác sĩ này?</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Thao tác này không thể hoàn tác!!!
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={handleCloseDeleteDoctor}
                        >
                          Hủy
                        </Button>
                        <Button
                          variant="primary"
                          onClick={handleCloseDeleteDoctor}
                        >
                          Xác nhận
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </td>
              </tr>
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
