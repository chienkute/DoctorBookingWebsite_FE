import { memo, useEffect, useRef, useState } from "react";
import "./doctorManagement.scss";
import { FaEraser } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { IoInformation } from "react-icons/io5";
import { FaRegCheckSquare } from "react-icons/fa";
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
const DoctorManagement = () => {
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
  const [doctor, setDoctor] = useState([]);
  console.log(doctor);
  const [query, setQuery] = useState("");
  const queryDebounce = useDebounce(query, 500);
  const getDoctorById = async () => {
    let res = await searchDoctor(queryDebounce, "", id, "", "");
    if (res) {
      setDoctor(res?.results);
    }
  };
  useEffect(() => {
    getDoctorById();
  }, []);
  useEffect(() => {
    getDoctorById();
  }, [queryDebounce]);
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Bạn chưa nhập tên bệnh viện"),
      year: Yup.string().required("Bạn chưa nhập số năm làm việc"),
      password: Yup.string()
        .required("Bạn chưa nhập mật khẩu")
        .min(6, "Mật khẩu không được ít hơn 6 ký tự"),
      email: Yup.string()
        .required("Bạn chưa nhập email")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng nhập đúng địa chỉ email",
        ),
    }),
    onSubmit: async (values) => {},
  });
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  return (
    <div className="management">
      <div className="management__header">
        <div className="management__search">
          <div className="management__input flex-center">
            <input
              type="text"
              placeholder="Tìm kiếm theo tên bác sĩ"
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
            <option>Chọn chuyên khoa</option>
            <option value="Đa khoa">Đa khoa</option>
            <option value="2">Nha khoa</option>
            <option value="3">Y học</option>
          </Form.Select>
        </div>
        <button className="btn button" onClick={handleShowAddNewDoctor}>
          Thêm
        </button>
        <Modal
          show={showAddNewDoctor}
          onHide={handleCloseAddNewDoctor}
          centered
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Thêm mới bác sĩ</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="add__form">
              <form action="">
                <div className="row">
                  <div className="col-6 form__col">
                    <label htmlFor="">Tài khoản</label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Nhập tài khoản"
                      class="form-control"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps("username")}
                      autoComplete="off"
                    />
                    <div className="form__error">
                      {formik.touched.username && formik.errors.username}
                    </div>
                  </div>
                  <div className="col-6 form__col">
                    <label htmlFor="">Mật khẩu</label>
                    <div className="form__login_in">
                      <input
                        type={`${isShowPassword ? "text" : "password"}`}
                        id="password"
                        placeholder="Nhập mật khẩu"
                        class="form-control changePassword__form_input"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        {...formik.getFieldProps("password")}
                        autoComplete="off"
                      />
                      <div
                        onClick={() => setIsShowPassword(!isShowPassword)}
                        className="changePassword__form_icon"
                      >
                        {isShowPassword ? (
                          <AiFillEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </div>
                      <div className="form__error">
                        {formik.touched.password && formik.errors.password}
                      </div>
                    </div>
                  </div>
                  <div className="col-6 form__col">
                    <label htmlFor="">Email</label>
                    <input
                      type="text"
                      id="email"
                      placeholder="Nhập email của bác sĩ"
                      class="form-control"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps("email")}
                      autoComplete="off"
                    />
                    <div className="form__error">
                      {formik.touched.email && formik.errors.email}
                    </div>
                  </div>
                  <div className="col-6 form__col">
                    <label htmlFor="">Tên bác sĩ</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Nhập tên bệnh viện"
                      class="form-control"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps("name")}
                      autoComplete="off"
                    />
                    <div className="form__error">
                      {formik.touched.name && formik.errors.name}
                    </div>
                  </div>
                  {/* <div className="col-6 form__col">
                    <label htmlFor="">Số năm làm việc</label>
                    <input
                      type="number"
                      id="year"
                      placeholder="Nhập số năm làm việc"
                      class="form-control"
                      value={formik.values.year}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps("year")}
                      autoComplete="off"
                    />
                    <div className="form__error">
                      {formik.touched.year && formik.errors.year}
                    </div>
                  </div> */}
                  {/* <div className="col-6 form__col">
                    <label htmlFor="">Chuyên khoa</label>
                    <Form.Select
                      aria-label="Default select example"
                      className="form__select"
                    >
                      <option>Chọn chuyên khoa</option>
                      <option value="1">Đa khoa</option>
                      <option value="2">Nha khoa</option>
                      <option value="3">Y học</option>
                    </Form.Select>
                  </div> */}
                  {/* <div className="col-6 form__col">
                    <label htmlFor="">Kinh nghiệm</label>
                    <ReactQuill
                      value={value}
                      onChange={setValue}
                      placeholder={"Mô tả sơ qua kinh nghiệm của bác sĩ"}
                    />
                  </div> */}
                </div>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAddNewDoctor}>
              Đóng
            </Button>
            <Button variant="primary" onClick={handleCloseAddNewDoctor}>
              Lưu
            </Button>
          </Modal.Footer>
        </Modal>
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
                <th>Họ tên bác sĩ</th>
                <th>Tài khoản</th>
                <th>Email</th>
                <th>Chuyên khoa</th>
                <th>Hành động</th>
              </tr>
              {doctor &&
                doctor.length > 0 &&
                doctor.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input type="checkbox"></input>
                      </td>
                      <td>1</td>
                      <td className="name__row">
                        <p>{item.name}</p>
                      </td>
                      <td>hoanganh07</td>
                      <td>doctor1@gmail.com</td>
                      <td>Nha khoa</td>
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
                                <form action="">
                                  <div className="form__avatar">
                                    <label htmlFor="">
                                      Ảnh đại diện <span>*</span>
                                    </label>
                                    {edit ? (
                                      <div className="form__image">
                                        <img src={avatar} alt="" />
                                      </div>
                                    ) : (
                                      <div className="form__image">
                                        <img
                                          src={avatar}
                                          alt=""
                                          onClick={handleImageClick}
                                        />
                                      </div>
                                    )}

                                    <input
                                      type="file"
                                      style={{ display: "none" }}
                                      ref={inputRef}
                                    />
                                  </div>
                                  <div className="row">
                                    <div className="col-6 form__col">
                                      <label htmlFor="">Tên bác sĩ</label>
                                      <input
                                        type="text"
                                        id="nameEdit"
                                        placeholder="Nhập tên bệnh viện"
                                        class="form-control"
                                        value={formik.values.nameEdit}
                                        onChange={formik.handleChange}
                                        {...formik.getFieldProps("nameEdit")}
                                        autoComplete="off"
                                        disabled={edit ? true : false}
                                      />
                                      <div className="form__error">
                                        {formik.touched.nameEdit &&
                                          formik.errors.nameEdit}
                                      </div>
                                    </div>
                                    <div className="col-6 form__col">
                                      <label htmlFor="">Số năm làm việc</label>
                                      <input
                                        type="number"
                                        id="yearEdit"
                                        placeholder="Nhập số năm làm việc"
                                        class="form-control"
                                        disabled={edit ? true : false}
                                        value={formik.values.yearEdit}
                                        onChange={formik.handleChange}
                                        {...formik.getFieldProps("yearEdit")}
                                        autoComplete="off"
                                      />
                                      <div className="form__error">
                                        {formik.touched.yearEdit &&
                                          formik.errors.yearEdit}
                                      </div>
                                    </div>
                                    <div className="col-6 form__col">
                                      <label htmlFor="">Chuyên khoa</label>
                                      <Form.Select
                                        aria-label="Default select example"
                                        className="form__select"
                                        disabled={edit ? true : false}
                                      >
                                        <option>Chọn chuyên khoa</option>
                                        <option value="1">Đa khoa</option>
                                        <option value="2">Nha khoa</option>
                                        <option value="3">Y học</option>
                                      </Form.Select>
                                    </div>
                                    <div className="col-6 form__col">
                                      <label htmlFor="">Kinh nghiệm</label>
                                      <ReactQuill
                                        value={value}
                                        onChange={setValue}
                                        placeholder={
                                          "Mô tả sơ qua kinh nghiệm của bác sĩ"
                                        }
                                        readOnly={edit ? true : false}
                                      />
                                    </div>
                                  </div>
                                </form>
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
                          <button
                            className="DeleteAccount"
                            onClick={handleShowDeleteDoctor}
                          >
                            <FaEraser />
                          </button>
                          <Modal
                            show={showDeleteDoctor}
                            onHide={handleCloseDeleteDoctor}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>
                                Bạn muốn xóa bác sĩ này?
                              </Modal.Title>
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
export default memo(DoctorManagement);
