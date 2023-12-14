import React, { memo, useState, useEffect } from "react";
import "./AccountManager.scss";
import { FaRegCheckSquare, FaEraser } from "react-icons/fa";
import { IoInformation } from "react-icons/io5";
import { FaLock, FaPlus, FaUnlock } from "react-icons/fa6";
import { toast } from "react-toastify";
import { getAllAcount } from "service/AdminService";
import ReactPaginate from "react-paginate";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Button, Modal } from "react-bootstrap";
const AccountManager = () => {
  const { id } = useParams();
  const [showAddNewHospital, setShowAddNewHospital] = useState(false);
  const handleCloseAddNewHospital = () => setShowAddNewHospital(false);
  const handleShowAddNewHospital = () => setShowAddNewHospital(true);
  // const [showAddNewBlog, setShowAddNewBlog] = useState(false);
  // const handleCloseAddNewBlog = () => setShowAddNewBlog(false);
  // const handleShowAddNewBlog = () => setShowAddNewBlog(true);
  // const [showEditBlog, setShowEditBlog] = useState(false);
  // const handleCloseEditBlog = () => setShowEditBlog(false);
  // const handleShowEditBlog = () => setShowEditBlog(true);
  // const [showDeleteBlog, setShowDeleteBlog] = useState(false);
  // const handleCloseDeleteBlog = () => setShowDeleteBlog(false);
  // const handleShowDeleteBlog = () => setShowDeleteBlog(true);
  // const [category, setCategory] = useState([]);
  // const [defaultValue, setDefaultValue] = useState("");
  // const [defaultDescribe, setDefaultDescribe] = useState("");
  // const [icon, setIcon] = useState("");
  // const [nameAdd, setNameAdd] = useState("");
  // const [describeAdd, setDescribeAdd] = useState("");
  const [search, setSearch] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfPassword, setIsShowConfPassword] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [accounts, setAccounts] = useState([]);
  const handlePageClick = (event) => {
    getAccount(+event.selected + 1);
  };
  const getAccount = async (page) => {
    let res = await getAllAcount((page - 1) * 6);
    if (res) {
      console.log(res);
      setTotalPage(res?.total_page);
      setAccounts(res?.results);
    }
  };
  useEffect(() => {
    getAccount();
  }, []);
  const filteredElements = accounts.filter((element) => {
    const allowedRoles = ["user", "hospital", "doctor"];
    return allowedRoles.includes(element.role) && element.role !== "admin";
  });
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
    onSubmit: async (values) => {},
  });
  return (
    <div className="AdminUserContainer">
      <div className="AdminUserFilter">
        <div className="management__search">
          <div className="management__input flex-center">
            <input
              type="text"
              placeholder="Tìm kiếm theo tên tài khoản"
              id="care__ins"
              autoComplete="off"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="AdminUserFunction">
        <button id="AdminUserAddAccount" onClick={handleShowAddNewHospital}>
          <FaPlus /> Thêm tài khoản...
        </button>
        <Modal
          show={showAddNewHospital}
          onHide={handleCloseAddNewHospital}
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
                  <div className="form__col">
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
                  <div className="form__col">
                    <label htmlFor="confirmpasswd">Nhập lại mật khẩu</label>
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
                </div>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAddNewHospital}>
              Đóng
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleCloseAddNewHospital();
                formik.handleSubmit();
              }}
            >
              Lưu
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="AdminUserResult">
        <div className="ResultPerTable">
          <label for="dropdown">Có {accounts?.count} kết quả tìm được</label>
        </div>
        <div className="Table">
          <table>
            <tr>
              <th>
                <FaRegCheckSquare />
              </th>
              <th>STT</th>
              <th>Tên tài khoản</th>
              <th>Email</th>
              <th>Vai trò</th>
              <th>Hành động</th>
            </tr>
            {accounts &&
              accounts.length > 0 &&
              filteredElements.map((item, index) => {
                return (
                  <tr className="UnlockedAccount">
                    <td>
                      <input type="checkbox"></input>
                    </td>
                    <td>{index}</td>
                    <td>{item?.username}</td>
                    <td>{item?.email}</td>
                    {item?.role === "user" && <td>Thành viên</td>}
                    {item?.role === "doctor" && <td>Bác sĩ</td>}
                    {item?.role === "hospital" && <td>Bệnh viện</td>}
                    <td>
                      <div className="Action">
                        <button className="InfoButton">
                          <IoInformation />
                        </button>
                        <button className="UnlockButton">
                          <FaUnlock />
                        </button>
                        <button className="LockButton">
                          <FaLock />
                        </button>
                        <button className="DeleteAccount">
                          <FaEraser />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
      <div className="management__pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={totalPage}
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

export default memo(AccountManager);
