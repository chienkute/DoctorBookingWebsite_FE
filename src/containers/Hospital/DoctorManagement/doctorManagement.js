import { memo, useEffect, useState } from "react";
import "./doctorManagement.scss";
// import { FaEraser } from "react-icons/fa6";
// import { FiEdit3 } from "react-icons/fi";
import { IoInformation } from "react-icons/io5";
import { FaRegCheckSquare } from "react-icons/fa";
// import avatar from "../../../assets/avatar.png";
import { Button, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
// import ReactPaginate from "react-paginate";
import { useDebounce } from "@uidotdev/usehooks";
import { useParams } from "react-router";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { addDoctor, deleteDocotor, getDoctor } from "service/HospitalService";
import { toast } from "react-toastify";
import { FaEraser } from "react-icons/fa6";
import ReactPaginate from "react-paginate";
// import ReactPaginate from "react-paginate";
// import { FaEraser } from "react-icons/fa6";
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
  const [isShowConfPassword, setIsShowConfPassword] = useState(false);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(false);
  const [doctor, setDoctor] = useState([]);
  const [cout, setCount] = useState("");
  const [query, setQuery] = useState("");
  const queryDebounce = useDebounce(query, 500);
  const [usernameDefault, setUsernameDefault] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [idAccout, setIdAccount] = useState("");
  const pageTotal = cout / 6 + 1;
  const handlePageClick = (event) => {
    console.log(+event.selected + 1);
    getDoctorById(+event.selected + 1);
  };
  const getDoctorById = async (page) => {
    let res = await getDoctor(queryDebounce, id, page);
    if (res) {
      console.log(res);
      setDoctor(res?.results);
      setCount(res?.count);
    }
  };
  const deleteAccouns = async (id) => {
    let res = await deleteDocotor(id);
    if (res) {
      console.log(res);
      getDoctorById();
      toast.success("Xóa thành công");
    } else {
      toast.error("Xóa thất bại");
    }
  };
  useEffect(() => {
    getDoctorById();
  }, []);
  useEffect(() => {
    getDoctorById();
  }, [queryDebounce]);
  useEffect(() => {
    getDoctorById();
  }, [update]);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Bạn chưa nhập tài khoản")
        .min(6, "Tên tài khoản ít nhất phải chứa 6 ký tự hoặc hơn"),
      password: Yup.string()
        .required("Bạn chưa nhập mật khẩu")
        .min(6, "Mật khẩu không được ít hơn 6 ký tự"),
      confirmpasswd: Yup.string()
        .required("Bạn chưa nhập lại mật khẩu")
        .min(6, "Mật khẩu không được ít hơn 6 ký tự")
        .oneOf(
          [Yup.ref("password"), null],
          "Mật khẩu phải trùng khớp với nhau",
        ),
      email: Yup.string()
        .required("Bạn chưa nhập email")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng nhập đúng địa chỉ email",
        ),
    }),
    onSubmit: async (values) => {
      let res = await addDoctor(values.username, values.password, values.email);
      if (res?.doctor) {
        formik.setValues({
          username: "",
          email: "",
          password: "",
        });
        console.log(res);
        getDoctorById();
        handleCloseAddNewDoctor();
        toast.success("Thêm thành công");
      } else {
        formik.setValues({
          username: "",
          email: "",
          password: "",
        });
        handleCloseAddNewDoctor();
        toast.error("Tên tài khoản hoặc email đã tồn tại");
      }
    },
  });
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
        <button className="btn button" onClick={handleShowAddNewDoctor}>
          Thêm
        </button>
        <Modal
          show={showAddNewDoctor}
          onHide={handleCloseAddNewDoctor}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Thêm mới bác sĩ</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="add__form">
              <form action="">
                <div>
                  <div className="form__col">
                    <label htmlFor="">
                      Tài khoản <span className="validate">*</span>
                    </label>
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
                  <div className="form__col">
                    <label htmlFor="">
                      Mật khẩu <span className="validate">*</span>
                    </label>
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
                  <div className="form__col">
                    <label htmlFor="confirmpasswd">
                      Nhập lại mật khẩu <span className="validate">*</span>
                    </label>
                    <div className="forms__register_in">
                      <input
                        type={`${isShowConfPassword ? "text" : "password"}`}
                        className="form-control"
                        id="confirmpasswd"
                        placeholder="Nhập lại mật khẩu của bạn"
                        value={formik.values.confirmpasswd}
                        onChange={formik.handleChange}
                        {...formik.getFieldProps("confirmpasswd")}
                      />
                      <div
                        onClick={() =>
                          setIsShowConfPassword(!isShowConfPassword)
                        }
                      >
                        {isShowConfPassword ? (
                          <AiFillEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </div>
                      <div className="forms__register_error">
                        {formik.touched.confirmpasswd &&
                          formik.errors.confirmpasswd}
                      </div>
                    </div>
                  </div>
                  <div className="form__col">
                    <label htmlFor="">
                      Email <span className="validate">*</span>
                    </label>
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
                </div>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                formik.setValues({
                  username: "",
                  email: "",
                  password: "",
                });
                handleCloseAddNewDoctor();
              }}
            >
              Đóng
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                formik.handleSubmit();
                getDoctorById();
                setUpdate(!update);
              }}
            >
              Lưu
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="management__content">
        <div className="AdminUserResult">
          <div className="ResultPerTable">
            <label for="dropdown">Có {cout || "0"} kết quả tìm được</label>
          </div>
          <div className="Table">
            <table>
              <tr>
                <th>
                  <FaRegCheckSquare />
                </th>
                <th>STT</th>
                <th>Họ tên bác sĩ</th>
                <th>Giới tính</th>
                <th>Địa chỉ</th>
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
                      <td>{index}</td>
                      <td
                        style={{
                          transform: "translateY(10px)",
                          display: "block",
                        }}
                      >
                        <p>{item?.name || "Chưa có tên"}</p>
                      </td>
                      <td>
                        {item?.gender === true
                          ? "Nam"
                          : item?.gender === false
                            ? "Nữ"
                            : "Giới tính thứ ba" || "Chưa có dữ liệu"}
                      </td>
                      <td>{item?.address || "Chưa có dữ liệu"}</td>
                      <td>
                        <div className="Action">
                          <button
                            className="InfoButton"
                            onClick={() => {
                              handleShowEditDoctor();
                              setEdit(true);
                              setUsernameDefault(item?.account?.username);
                              setEmail(item?.account?.email);
                              setName(item?.name);
                              setGender(item?.gender);
                              setBirthday(item?.birthday);
                              setAddress(item?.address);
                            }}
                          >
                            <IoInformation />
                          </button>
                          {/* <button
                            className="ChangeInfoButton"
                            onClick={() => {
                              handleShowEditDoctor();
                              setEdit(false);
                            }}
                          >
                            <FiEdit3 />
                          </button> */}
                          <Modal
                            show={showEditDoctor}
                            onHide={handleCloseEditDoctor}
                            centered
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Thông tin bác sĩ</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <div className="add__form">
                                <form action="">
                                  {/* <div className="form__avatar">
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
                                  </div> */}
                                  <div className="form__col">
                                    <label htmlFor="">Tên tài khoản</label>
                                    <input
                                      type="text"
                                      id="username"
                                      class="form-control"
                                      autoComplete="off"
                                      defaultValue={usernameDefault}
                                      disabled
                                    />
                                  </div>
                                  <div className="form__col">
                                    <label htmlFor="">Họ và tên</label>
                                    <input
                                      type="text"
                                      id="username"
                                      class="form-control"
                                      autoComplete="off"
                                      defaultValue={name}
                                      disabled
                                    />
                                  </div>
                                  <div className="form__col">
                                    <label htmlFor="">Giới tính</label>
                                    <input
                                      type="text"
                                      id="username"
                                      class="form-control"
                                      autoComplete="off"
                                      defaultValue={gender ? "Nam" : "Nữ"}
                                      disabled
                                    />
                                  </div>
                                  <div className="form__col">
                                    <label htmlFor="">Địa chỉ</label>
                                    <input
                                      type="text"
                                      id="username"
                                      class="form-control"
                                      autoComplete="off"
                                      defaultValue={address}
                                      disabled
                                    />
                                  </div>
                                  <div className="form__col">
                                    <label htmlFor="">Ngày sinh</label>
                                    <input
                                      type="text"
                                      id="username"
                                      class="form-control"
                                      autoComplete="off"
                                      defaultValue={birthday}
                                      disabled
                                    />
                                  </div>
                                  <div className="form__col">
                                    <label htmlFor="">Email</label>
                                    <input
                                      type="text"
                                      id="email"
                                      class="form-control"
                                      autoComplete="off"
                                      defaultValue={email}
                                      disabled
                                    />
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
                            onClick={() => {
                              handleShowDeleteDoctor();
                              setIdAccount(item?.id);
                            }}
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
                                onClick={() => {
                                  handleCloseDeleteDoctor();
                                  deleteAccouns(idAccout);
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
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageTotal}
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
