import { memo, useEffect, useRef, useState } from "react";
import "./manageBlog.scss";
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
import { useParams } from "react-router";
import {
  addBlog,
  deleteBlog,
  editAvatarBlog,
  editBlog,
  getBlog,
} from "service/DoctorService";
import { fetchAllCategories } from "service/UserService";
import { toast } from "react-toastify";
const ManageBlog = () => {
  const { id } = useParams();
  const [update, setUpdate] = useState(false);
  const [showAddNewBlog, setShowAddNewBlog] = useState(false);
  const handleCloseAddNewBlog = () => setShowAddNewBlog(false);
  const handleShowAddNewBlog = () => setShowAddNewBlog(true);
  const [showEditBlog, setShowEditBlog] = useState(false);
  const handleCloseEditBlog = () => setShowEditBlog(false);
  const handleShowEditBlog = () => setShowEditBlog(true);
  const [showDeleteBlog, setShowDeleteBlog] = useState(false);
  const handleCloseDeleteBlog = () => setShowDeleteBlog(false);
  const handleShowDeleteBlog = () => setShowDeleteBlog(true);
  const [edit, setEdit] = useState(false);
  const [blog, setBlog] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [idCategory, setIdCategory] = useState("");
  const [idCategorySearch, setIdCategorySearch] = useState("");
  const [count, setCount] = useState("");
  const queryDebounce = useDebounce(query, 500);
  const inputRef = useRef(null);
  const [titleAdd, setTitleAdd] = useState("");
  const [value, setValue] = useState("");
  const [defaultSelect, setDefaultSelect] = useState("");
  const [idEdit, setIdEdit] = useState("");
  const [image, setImage] = useState("");
  const [imageUpdate, setImageUpdate] = useState([]);
  const [imageOld, setImageOld] = useState("");
  const [formData, setFormData] = useState(new FormData());
  console.log(blog);
  // console.log(titleAdd);
  console.log(idCategory);
  console.log(imageUpdate);
  console.log(formData);
  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ["link", "image"],
    ["clean"],
  ];
  const module = {
    toolbar: toolbarOptions,
  };
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    setImageUpdate(event.target.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  const getBlogById = async () => {
    let res = await getBlog(id, queryDebounce, idCategorySearch);
    if (res) {
      console.log(res);
      setBlog(res?.results);
      setCount(res?.count);
    }
  };
  useEffect(() => {
    if (imageUpdate !== null) {
      const updatedFormData = new FormData();
      updatedFormData.append("picture", imageUpdate);
      setFormData(updatedFormData);
    }
  }, [imageUpdate]);
  const getAllCategory = async () => {
    let res = await fetchAllCategories();
    if (res) {
      setCategory(res?.results);
    }
  };
  const postBlog = async () => {
    let res = await addBlog(idCategory, id, titleAdd, value, imageUpdate);
    if (res) {
      console.log(res);
      toast.success("Thêm blog thành công");
    } else {
      toast.error("Thêm thất bại");
    }
  };
  const fixBlog = async (id_blog) => {
    let res = await editBlog(id_blog, idCategory, id, titleAdd, value);
    if (res) {
      console.log(res);
      toast.success("Sửa blog thành công");
    } else {
      toast.error("Sửa thất bại");
    }
  };
  const fixAvatatBlog = async (id_blog) => {
    let res = await editAvatarBlog(id_blog, formData);
    if (res) {
      console.log(res);
    }
  };
  const deleteBlogByID = async (id_blog) => {
    let res = await deleteBlog(id_blog, idCategory, id, titleAdd, value);
    if (res) {
      console.log(res);
      toast.success("Xóa blog thành công");
    } else {
      toast.error("Sửa thất bại");
    }
  };
  useEffect(() => {
    getAllCategory();
    getBlogById();
  }, []);
  useEffect(() => {
    getBlogById();
  }, [queryDebounce, idCategorySearch, update]);
  const formik = useFormik({
    initialValues: {
      nameAdd: "",
      categoryAdd: "",
      nameEdit: "",
      contentEdit: "",
    },
    validationSchema: Yup.object({
      nameAdd: Yup.string().required("Bạn chưa nhập tiêu đề blog"),
      contentAdd: Yup.string().required("Bạn chưa nhập nội dung blog"),
    }),
    onSubmit: (values) => {},
  });
  return (
    <div className="management">
      <div className="management__header">
        <div className="management__search">
          <div className="management__input flex-center">
            <input
              type="text"
              placeholder="Tìm kiếm theo tên blog"
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
              setIdCategorySearch(e.target.value);
            }}
          >
            <option value={""}>Chọn chuyên mục</option>
            {category &&
              category.length > 0 &&
              category.map((item, index) => {
                return <option value={`${item.id}`}>{item.name}</option>;
              })}
          </Form.Select>
        </div>
        <button
          className="btn button"
          onClick={() => {
            handleShowAddNewBlog();
            setValue("");
          }}
        >
          Thêm
        </button>
        <Modal
          show={showAddNewBlog}
          onHide={handleCloseAddNewBlog}
          centered
          size="xl"
        >
          <Modal.Header closeButton>
            <Modal.Title>Thêm mới blog</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="add__form">
              <form action="">
                <div className="form__avatar">
                  <label htmlFor="">Ảnh chủ đề Blog</label>
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
                <div className="row">
                  <div className="col-6 form__col">
                    <label htmlFor="">Tiêu đề blog</label>
                    <input
                      type="text"
                      // id="nameAdd"
                      placeholder="Nhập tên tiêu đề"
                      class="form-control"
                      onChange={(e) => {
                        setTitleAdd(e.target.value);
                      }}
                      // {...formik.getFieldProps("nameAdd")}
                      autoComplete="off"
                    />
                    <div className="form__error">
                      {formik.touched.nameAdd && formik.errors.nameAdd}
                    </div>
                  </div>
                  <div className="col-6 form__col">
                    <label htmlFor="">Chuyên mục</label>
                    <Form.Select
                      className="form__select"
                      id="categoryAdd"
                      onChange={(e) => {
                        setIdCategory(e.target.value);
                      }}
                    >
                      <option>Chọn chuyên mục</option>
                      {category &&
                        category.length > 0 &&
                        category.map((item, index) => {
                          return (
                            <option value={`${item.id}`}>{item.name}</option>
                          );
                        })}
                    </Form.Select>
                    <div className="form__error">
                      {formik.touched.categoryAdd && formik.errors.categoryAdd}
                    </div>
                  </div>
                  <div className="form__col quill__content">
                    <label htmlFor="">Nội dung Blog</label>
                    <ReactQuill
                      id="contentAdd"
                      theme="snow"
                      value={value}
                      onChange={setValue}
                      placeholder={"Nhập nội dung Blog"}
                      modules={module}
                    />
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
                postBlog();
                setUpdate(!update);
                setQuery("");
                getBlogById();
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
            <label for="dropdown">Có {count} kết quả tìm được</label>
          </div>
          <div className="Table">
            <table>
              <tr>
                <th>
                  <FaRegCheckSquare />
                </th>
                <th>STT</th>
                <th>Tiêu đề</th>
                <th>Chuyên mục</th>
                <th>Ngày tạo</th>
                <th>Hành động</th>
              </tr>
              {blog &&
                blog.length > 0 &&
                blog.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input type="checkbox"></input>
                      </td>
                      <td>{index}</td>
                      <td style={{ transform: "translateY(10px)" }}>
                        <p>{item?.title}</p>
                      </td>
                      <td>{item?.id_category.name}</td>
                      <td>{item?.created_at || "Không có dữ liệu"}</td>
                      <td>
                        <div className="Action">
                          <button
                            className="InfoButton"
                            onClick={() => {
                              handleShowEditBlog();
                              setEdit(true);
                              setValue(`${item?.content}`);
                              setTitleAdd(`${item?.title}`);
                              setDefaultSelect(`${item?.id_category?.id}`);
                              setImageOld(item?.picture);
                              console.log(item.picture);
                            }}
                          >
                            <IoInformation />
                          </button>
                          <button
                            className="ChangeInfoButton"
                            onClick={() => {
                              handleShowEditBlog();
                              setEdit(false);
                              setValue(`${item?.content}`);
                              setTitleAdd(`${item?.title}`);
                              setDefaultSelect(`${item?.id_category?.id}`);
                              setIdCategory(`${item?.id_category?.id}`);
                              setIdEdit(`${item?.id}`);
                              setImageOld(item?.picture);
                            }}
                          >
                            <FiEdit3 />
                          </button>
                          <Modal
                            show={showEditBlog}
                            onHide={handleCloseEditBlog}
                            centered
                            size="xl"
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Thông tin bài viết</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <div className="add__form">
                                <form action="">
                                  <div className="form__avatar">
                                    <label htmlFor="">
                                      Ảnh chủ đề Blog <span>*</span>
                                    </label>
                                    {/* {edit ? (
                                      <div className="form__image">
                                        <img src={imageOld} alt="" />
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
                                    /> */}
                                    {/* <div className="form__image"> */}
                                    {edit ? (
                                      <div className="form__image">
                                        {imageOld ? (
                                          <img
                                            src={imageOld}
                                            alt="BlogImg"
                                            className="avatarAfter"
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
                                    ) : (
                                      <div className="form__image">
                                        {imageOld ? (
                                          <img
                                            src={imageOld}
                                            alt="BlogImg"
                                            className="avatarAfter"
                                            onClick={handleImageClick}
                                          ></img>
                                        ) : image ? (
                                          <img
                                            src={image}
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
                                    )}
                                    {/* </div> */}
                                    <input
                                      type="file"
                                      accept="image/*"
                                      style={{ display: "none" }}
                                      ref={inputRef}
                                      onChange={handleImageChange}
                                    />
                                  </div>
                                  <div className="row">
                                    <div className="col-6 form__col">
                                      <label htmlFor="">Tiêu đề blog</label>
                                      <input
                                        type="text"
                                        id="nameEdit"
                                        placeholder="Nhập tên tiêu đề"
                                        class="form-control"
                                        onChange={(e) => {
                                          setTitleAdd(e.target.value);
                                        }}
                                        defaultValue={titleAdd}
                                        autoComplete="off"
                                        disabled={edit ? true : false}
                                      />
                                      <div className="form__error">
                                        {formik.touched.nameEdit &&
                                          formik.errors.nameEdit}
                                      </div>
                                    </div>
                                    <div className="col-6 form__col">
                                      <label htmlFor="">Chuyên mục</label>
                                      <Form.Select
                                        aria-label="Default select example"
                                        className="form__select"
                                        id="categoryEdit"
                                        name="categoryEdit"
                                        disabled={edit ? true : false}
                                        // defaultValue={`${item?.id_category?.id}`}
                                        // defau={"Chiến Kute"}
                                        onChange={(e) => {
                                          setIdCategory(e.target.value);
                                        }}
                                      >
                                        <option value={""}>
                                          Chọn chuyên mục
                                        </option>
                                        {category &&
                                          category.length > 0 &&
                                          category.map((item, index) => {
                                            return (
                                              <option
                                                value={`${item.id}`}
                                                selected={
                                                  defaultSelect
                                                    ? defaultSelect ===
                                                      `${item?.id}`
                                                      ? true
                                                      : false
                                                    : false
                                                }
                                              >
                                                {item.name}
                                              </option>
                                            );
                                          })}
                                      </Form.Select>
                                      <div className="form__error">
                                        {formik.touched.categoryEdit &&
                                          formik.errors.categoryEdit}
                                      </div>
                                    </div>
                                    <div className="form__col quill__content">
                                      <label htmlFor="">Nội dung Blog</label>
                                      <ReactQuill
                                        id="contentAdd"
                                        theme="snow"
                                        defaultValue={value}
                                        onChange={setValue}
                                        placeholder={"Nhập nội dung Blog"}
                                        modules={module}
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
                                onClick={handleCloseEditBlog}
                              >
                                Đóng
                              </Button>
                              {edit ? (
                                <div></div>
                              ) : (
                                <Button
                                  variant="primary"
                                  onClick={() => {
                                    handleCloseEditBlog();
                                    fixBlog(idEdit);
                                    fixAvatatBlog(idEdit);
                                    setUpdate(!update);
                                    setQuery("");
                                    getBlogById();
                                  }}
                                >
                                  Lưu
                                </Button>
                              )}
                            </Modal.Footer>
                          </Modal>
                          <button
                            className="DeleteAccount"
                            onClick={handleShowDeleteBlog}
                          >
                            <FaEraser />
                          </button>
                          <Modal
                            show={showDeleteBlog}
                            onHide={handleCloseDeleteBlog}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>
                                Bạn muốn xóa bài viết này không?
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
                                  deleteBlogByID(item?.id);
                                  setUpdate(!update);
                                  getBlogById();
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
export default memo(ManageBlog);
