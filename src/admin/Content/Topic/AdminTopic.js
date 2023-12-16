import React, { useEffect, useRef, useState } from "react";
import "./AdminTopic.scss";
import { FaRegCheckSquare, FaEraser } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { useFormik } from "formik";
import * as Yup from "yup";
import avatar from "../../../assets/avatar.jpg";
import { Button, Modal } from "react-bootstrap";
import {
  addCategory,
  deleteCategory,
  editCategory,
  fetchAllCategoriess,
} from "service/AdminService";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
const AdminTopic = () => {
  const [showAddNewBlog, setShowAddNewBlog] = useState(false);
  const handleCloseAddNewBlog = () => setShowAddNewBlog(false);
  const handleShowAddNewBlog = () => setShowAddNewBlog(true);
  const [showEditBlog, setShowEditBlog] = useState(false);
  const handleCloseEditBlog = () => setShowEditBlog(false);
  const handleShowEditBlog = () => setShowEditBlog(true);
  const [showDeleteBlog, setShowDeleteBlog] = useState(false);
  const handleCloseDeleteBlog = () => setShowDeleteBlog(false);
  const handleShowDeleteBlog = () => setShowDeleteBlog(true);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [defaultValue, setDefaultValue] = useState("");
  const [defaultDescribe, setDefaultDescribe] = useState("");
  const [icon, setIcon] = useState("");
  const [nameAdd, setNameAdd] = useState("");
  const [describeAdd, setDescribeAdd] = useState("");
  const [image, setImage] = useState("");
  const [imageUpdate, setImageUpdate] = useState([]);
  const [id, setId] = useState("");
  const inputRef = useRef(null);
  const [totalPage, setTotalPage] = useState(0);
  const handlePageClick = (event) => {
    console.log(+event.selected + 1);
    getAllCategories(+event.selected + 1);
  };
  const getAllCategories = async (page) => {
    let res = await fetchAllCategoriess((page - 1) * 6);
    if (res?.results) {
      setTotalPage(res?.total_page);
      setCategory(res?.results);
    }
  };
  const filteredCategories = category.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    setImageUpdate(event.target.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  const fixCategory = async (id) => {
    let res = await editCategory(id, nameAdd, describeAdd, imageUpdate);
    if (res) {
      console.log(res);
      getAllCategories();
      toast.success("Sửa thành công");
    } else {
      toast.error("Sửa thất bại");
    }
  };
  const deleteCategories = async (id) => {
    let res = await deleteCategory(id);
    if (res) {
      console.log(res);
      getAllCategories();
      toast.success("Xóa thành công");
    } else {
      toast.error("Xóa thất bại");
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      describe: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Bạn chưa nhập tiêu đề"),
      describe: Yup.string().required("Bạn chưa nhập thông tin cơ bản"),
    }),
    onSubmit: async (values) => {
      let res = await addCategory(values.name, values.describe, imageUpdate);
      if (res) {
        console.log(res);
        toast.success("Thêm thành công");
        getAllCategories();
        formik.setValues({
          name: "",
          describe: "",
        });
      } else {
        toast.error("Thêm thất bại");
      }
    },
  });
  return (
    <>
      <div className="AdminTopicContainer">
        <div className="AdminTopicFilter">
          <div className="management__search">
            <div className="management__input flex-center">
              <input
                type="text"
                placeholder="Tìm kiếm theo tên chuyên mục"
                id="care__ins"
                autoComplete="off"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="AdminTopicFunction">
          <button
            id="AdminTopicAddTopic"
            onClick={() => {
              handleShowAddNewBlog();
              setImage("");
            }}
          >
            <FaPlus /> Thêm chuyên mục...
          </button>
          <Modal show={showAddNewBlog} onHide={handleCloseAddNewBlog} centered>
            <Modal.Header closeButton>
              <Modal.Title>Thêm mới chuyên mục</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="add__form">
                <form action="">
                  <div className="form__avatar">
                    <label htmlFor="">
                      Ảnh chuyên mục <span className="validate">*</span>
                    </label>
                    <div className="form__image">
                      {image ? (
                        <img
                          src={image}
                          alt="BlogImg"
                          className="avatarAfter"
                          onClick={handleImageClick}
                        ></img>
                      ) : (
                        <img
                          src={avatar}
                          alt="BlogImg"
                          className="avatarBefore"
                          onClick={handleImageClick}
                        ></img>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      ref={inputRef}
                      onChange={handleImageChange}
                    />
                  </div>
                  <div>
                    <div className=" form__col">
                      <label htmlFor="">
                        Tiêu đề chuyên mục <span className="validate">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        class="form-control"
                        autoComplete="off"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        {...formik.getFieldProps("name")}
                      />
                      <div
                        className="form__login_error"
                        style={{ marginTop: "-7px" }}
                      >
                        {formik.touched.name && formik.errors.name}
                      </div>
                    </div>
                    <div className="form__col">
                      <label htmlFor="">
                        Thông tin cơ bản <span className="validate">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        name="describe"
                        id="describe"
                        cols="30"
                        rows="10"
                        value={formik.values.describe}
                        onChange={formik.handleChange}
                        {...formik.getFieldProps("describe")}
                      ></textarea>
                      <div
                        className="form__login_error"
                        style={{ marginTop: "-7px" }}
                      >
                        {formik.touched.describe && formik.errors.describe}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAddNewBlog}>
                Đóng
              </Button>
              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  handleCloseAddNewBlog();
                  formik.handleSubmit();
                }}
              >
                Lưu
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="AdminTopicResult">
          <div className="ResultPerTable">
            <label for="dropdown">Số kết quả mỗi trang: 6</label>
          </div>
          <div className="Table">
            <table>
              <tr>
                <th>
                  <FaRegCheckSquare />
                </th>
                <th>STT</th>
                <th>Tên chuyên mục</th>
                <th>Ảnh</th>
                <th>Hành động</th>
              </tr>
              {category &&
                category.length > 0 &&
                filteredCategories.map((item, index) => {
                  return (
                    <tr>
                      <td>
                        <input type="checkbox"></input>
                      </td>
                      <td>{index}</td>
                      <td>{item?.name}</td>
                      <td>
                        <img
                          src={item?.icon || avatar}
                          alt=""
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                          }}
                        />
                      </td>
                      <td>
                        <div className="Action">
                          <button
                            className="EditButton"
                            onClick={() => {
                              setDefaultValue(item?.name);
                              setDefaultDescribe(item?.describe);
                              setIcon(item?.icon);
                              setId(item?.id);
                              handleShowEditBlog();
                              setImage("");
                              setNameAdd(item?.name);
                              setDescribeAdd(item?.describe);
                            }}
                          >
                            <FiEdit3 />
                          </button>
                          <Modal
                            show={showEditBlog}
                            onHide={handleCloseEditBlog}
                            centered
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Thông tin chuyên mục</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <div className="add__form">
                                <form action="">
                                  <div className="form__avatar">
                                    <label htmlFor="">
                                      Ảnh chuyên mục{" "}
                                      <span className="validate">*</span>
                                    </label>
                                    <div className="form__image">
                                      {image ? (
                                        <img
                                          src={image}
                                          alt="BlogImg"
                                          className="avatarAfter"
                                          onClick={handleImageClick}
                                        ></img>
                                      ) : icon ? (
                                        <img
                                          src={icon}
                                          alt="BlogImg"
                                          className="avatarBefore"
                                          onClick={handleImageClick}
                                        ></img>
                                      ) : (
                                        <img
                                          src={avatar}
                                          alt="BlogImg"
                                          className="avatarBefore"
                                          onClick={handleImageClick}
                                        ></img>
                                      )}
                                    </div>
                                    <input
                                      type="file"
                                      accept="image/*"
                                      style={{ display: "none" }}
                                      ref={inputRef}
                                      onChange={handleImageChange}
                                    />
                                  </div>
                                  <div>
                                    <div className=" form__col">
                                      <label htmlFor="">
                                        Tiêu đề chuyên mục{" "}
                                        <span className="validate">*</span>
                                      </label>
                                      <input
                                        type="text"
                                        id="nameEdit"
                                        class="form-control"
                                        autoComplete="off"
                                        defaultValue={defaultValue}
                                        onChange={(e) => {
                                          setNameAdd(e.target.value);
                                        }}
                                      />
                                    </div>
                                    <div className="form__col">
                                      <label htmlFor="">
                                        Thông tin cơ bản{" "}
                                        <span className="validate">*</span>
                                      </label>
                                      <textarea
                                        className="form-control"
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="10"
                                        defaultValue={defaultDescribe}
                                        onChange={(e) => {
                                          setDescribeAdd(e.target.value);
                                        }}
                                      ></textarea>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button
                                variant="secondary"
                                onClick={handleCloseEditBlog}
                              >
                                Đóng
                              </Button>
                              <Button
                                variant="primary"
                                onClick={() => {
                                  fixCategory(id);
                                  handleCloseEditBlog();
                                }}
                              >
                                Lưu
                              </Button>
                            </Modal.Footer>
                          </Modal>
                          <button
                            className="DeleteButton"
                            onClick={() => {
                              handleShowDeleteBlog();
                              setId(item?.id);
                            }}
                          >
                            <FaEraser />
                          </button>
                          <Modal
                            show={showDeleteBlog}
                            onHide={handleCloseDeleteBlog}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>
                                Bạn muốn xóa chuyên mục này không?
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              Thao tác này không thể hoàn tác!!!
                            </Modal.Body>
                            <Modal.Footer>
                              <Button
                                variant="secondary"
                                onClick={handleCloseDeleteBlog}
                              >
                                Hủy
                              </Button>
                              <Button
                                variant="primary"
                                onClick={() => {
                                  handleCloseDeleteBlog();
                                  deleteCategories(id);
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
      </div>
      {/* {dialogueList} */}
    </>
  );
};

export default AdminTopic;
