import React, { useContext, useEffect, useRef, useState } from "react";
import "./AdminSpeciality.scss";
import { FaRegCheckSquare, FaEraser } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import avatar from "../../../assets/avatar.jpg";
import { UpdateContext } from "context/UpdateContext";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import {
  addSepcialties,
  deleteSpecialty,
  editSpecialty,
  fetchAllSpecialtiess,
} from "service/AdminService";
const AdminSpeciality = () => {
  const { update, setUpdate } = useContext(UpdateContext);
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
    let res = await fetchAllSpecialtiess((page - 1) * 6);
    if (res?.results) {
      console.log(res);
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
  const addNewCategory = async () => {
    let res = await addSepcialties(nameAdd, describeAdd, imageUpdate);
    if (res) {
      console.log(res);
      toast.success("Thêm thành công");
      getAllCategories();
    }
  };
  const fixCategory = async (id) => {
    let res = await editSpecialty(id, nameAdd, describeAdd, imageUpdate);
    if (res) {
      console.log(res);
      toast.success("Thêm thành công");
      getAllCategories();
    }
  };
  const deleteCategories = async (id) => {
    let res = await deleteSpecialty(id);
    if (res) {
      console.log(res);
      getAllCategories();
      toast.success("Xóa thành công");
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <>
      <div className="AdminSpecialityContainer">
        <div className="AdminSpecialityFilter">
          <div className="FilterRow">
            <div className="Filter col">
              <div className="FilterLabel">Tên chuyên khoa</div>
              <div className="FilterInput FilterTextInput">
                <input
                  type="text"
                  placeholder="Nhập tên chuyên khoa"
                  id="SpecialityNameInput"
                  name="SpecialityNameInput"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="AdminSpecialityFunction">
          <button
            id="AdminSpecialityAddSpeciality"
            onClick={() => {
              handleShowAddNewBlog();
              setImage("");
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
                    <label htmlFor="">Ảnh chuyên khoa</label>
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
                      <label htmlFor="">Tiêu đề chuyên khoa</label>
                      <input
                        type="text"
                        id="nameEdit"
                        class="form-control"
                        autoComplete="off"
                        onChange={(e) => {
                          setNameAdd(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form__col">
                      <label htmlFor="">Thông tin cơ bản</label>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
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
              <Button variant="secondary" onClick={handleCloseAddNewBlog}>
                Đóng
              </Button>
              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  handleCloseAddNewBlog();
                  setUpdate(!update);
                  addNewCategory();
                }}
              >
                Lưu
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="AdminSpecialityResult">
          <div className="ResultPerTable">
            <label for="dropdown">Số kết quả mỗi trang: 6</label>
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
                              setUpdate(!update);
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
                              <Modal.Title>Thông tin chuyên khoa</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <div className="add__form">
                                <form action="">
                                  <div className="form__avatar">
                                    <label htmlFor="">Ảnh chuyên khoa</label>
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
                                        Tiêu đề chuyên khoa
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
                                      <label htmlFor="">Thông tin cơ bản</label>
                                      <textarea
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
                                  setUpdate(!update);
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
                                  setUpdate(!update);
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
              pageRangeDisplayed={totalPage}
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
      </div>
    </>
  );
};

export default AdminSpeciality;
