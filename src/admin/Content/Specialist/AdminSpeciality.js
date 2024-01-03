import React, { useEffect, useRef, useState } from "react";
import "./AdminSpeciality.scss";
import { FaRegCheckSquare, FaEraser } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import avatar from "../../../assets/avatar.jpg";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReactPaginate from "react-paginate";
import {
  addSepcialties,
  deleteSpecialty,
  editSpecialty,
  fetchAllSpecialtiess,
} from "service/AdminService";
const AdminSpeciality = () => {
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
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [urlImage, setUrlImage] = useState("");
  const toDataURL = (url) =>
    fetch(urlImage)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          }),
      );
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  const changeFileObejct = () => {
    toDataURL(urlImage).then((dataUrl) => {
      var fileData = dataURLtoFile(dataUrl, "icon.jpg");
      setImageUpdate(fileData);
    });
  };
  useEffect(() => {
    changeFileObejct();
  }, [urlImage]);
  const handlePageClick = (event) => {
    console.log(+event.selected + 1);
    setPage(+event.selected + 1);
    getAllCategories(+event.selected + 1);
  };
  const getAllCategories = async (page) => {
    let res = await fetchAllSpecialtiess((page - 1) * 6);
    if (res?.results) {
      console.log(res);
      setTotalPage(res?.total_page);
      setCurrentPage(res?.current_page);
      setCount(res?.count);
      setTotal(res?.count);
      setCategory(res?.results);
    }
  };
  const filteredCategories = category.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
  useEffect(() => {
    if (search === "") {
      setCount(total);
    } else {
      setCount(filteredCategories.length);
    }
  }, [search]);
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    setImageUpdate(event.target.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  const fixCategory = async (id) => {
    let res = await editSpecialty(id, nameAdd, describeAdd, imageUpdate);
    if (res?.id) {
      console.log(res);
      toast.success("Sửa thành công");
      getAllCategories(page);
      handleCloseEditBlog();
    } else {
      toast.error("Các trường không được để trống!");
    }
  };
  const deleteCategories = async (id) => {
    let res = await deleteSpecialty(id);
    if (res) {
      console.log(res);
      getAllCategories(page);
      toast.success("Xóa thành công");
    } else {
      toast.error("Xóa thất bại");
    }
  };
  useEffect(() => {
    getAllCategories(1);
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
      let res = await addSepcialties(values.name, values.describe, imageUpdate);
      if (res?.name) {
        toast.success("Thêm thành công");
        handleCloseAddNewBlog();
        getAllCategories(page);
        formik.setValues({
          name: "",
          describe: "",
        });
      } else {
        toast.error("Các trường không được để trống !");
      }
    },
  });
  return (
    <>
      <div className="AdminSpecialityContainer">
        <div className="AdminSpecialityFilter">
          <div className="management__search">
            <div className="management__input flex-center">
              <input
                type="text"
                placeholder="Tìm kiếm theo tên chuyên khoa"
                id="care__ins"
                autoComplete="off"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="AdminSpecialityFunction">
          <button
            id="AdminSpecialityAddSpeciality"
            onClick={() => {
              handleShowAddNewBlog();
              setImage("");
              setImageUpdate("");
            }}
          >
            <FaPlus /> Thêm chuyên khoa...
          </button>
          <Modal show={showAddNewBlog} onHide={handleCloseAddNewBlog} centered>
            <Modal.Header closeButton>
              <Modal.Title>Thêm mới chuyên khoa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="add__form">
                <form action="">
                  <div className="form__avatar">
                    <label htmlFor="">
                      Ảnh chuyên khoa <span className="validate">*</span>
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
                        Tiêu đề chuyên khoa <span className="validate">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        class="form-control"
                        autoComplete="off"
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
                  formik.handleSubmit();
                }}
              >
                Lưu
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="AdminSpecialityResult">
          <div className="ResultPerTable">
            <label for="dropdown">Có {count} kết quả tìm được</label>
            {/* <select id="dropdown">
              <option value="5">5</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select> */}
          </div>
          <div className="Table">
            <table>
              <tr>
                <th>
                  <FaRegCheckSquare />
                </th>
                <th>STT</th>
                <th>Tên chuyên khoa</th>
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
                      <td>{index + 1 + (currentPage - 1) * 6}</td>
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
                              setNameAdd(item?.name);
                              setDescribeAdd(item?.describe);
                              setUrlImage(item?.icon);
                              setImage("");
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
                              <Modal.Title>Thông tin chuyên khoa</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <div className="add__form">
                                <form action="">
                                  <div className="form__avatar">
                                    <label htmlFor="">
                                      Ảnh chuyên khoa{" "}
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
                                        Tiêu đề chuyên khoa{" "}
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
                                Bạn muốn xóa chuyên khoa này không?
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
    </>
  );
};

export default AdminSpeciality;
