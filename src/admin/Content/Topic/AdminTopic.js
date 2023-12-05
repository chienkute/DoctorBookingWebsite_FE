import React, { useContext, useEffect, useRef, useState } from "react";
import "./AdminTopic.scss";
import { FaRegCheckSquare, FaEraser } from "react-icons/fa";
import { FcPrevious, FcNext } from "react-icons/fc";
import { FiEdit3 } from "react-icons/fi";
import TopicInfoDialogue from "admin/AdminComponent/TopicInfo/TopicInfo";
import TopicDeleteDialogue from "admin/AdminComponent/TopicDelete/TopicDelete";
import { FaPlus } from "react-icons/fa6";
import { fetchAllCategories } from "service/UserService";
import avatar from "../../../assets/avatar.jpg";
import { UpdateContext } from "context/UpdateContext";
import { Button, Modal } from "react-bootstrap";
import {
  addCategory,
  deleteCategory,
  editCategory,
} from "service/AdminService";
import { toast } from "react-toastify";
const AdminTopic = () => {
  const { update, setUpdate } = useContext(UpdateContext);
  const [dialogueList, setDialogueList] = useState([]);
  const addTID = (data) => {
    setDialogueList([
      ...dialogueList,
      <TopicInfoDialogue key="TID" data={data} close={(key) => closeD(key)} />,
    ]);
  };
  const addTDD = () => {
    setDialogueList([
      ...dialogueList,
      <TopicDeleteDialogue key="TDD" close={(key) => closeD(key)} />,
    ]);
  };
  const closeD = (key) => {
    const newLD = dialogueList.filter((dialogue) => dialogue.key !== key);
    setDialogueList(newLD);
  };
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
  const getAllCategories = async () => {
    let res = await fetchAllCategories();
    if (res?.results) {
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
    let res = await addCategory(nameAdd, describeAdd, imageUpdate);
    if (res) {
      console.log(res);
      toast.success("Thêm thành công");
      getAllCategories();
    }
  };
  const fixCategory = async (id) => {
    let res = await editCategory(id, nameAdd, describeAdd, imageUpdate);
    if (res) {
      console.log(res);
      toast.success("Thêm thành công");
      getAllCategories();
    }
  };
  const deleteCategories = async (id) => {
    let res = await deleteCategory(id);
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
      <div className="AdminTopicContainer">
        <div className="AdminTopicFilter">
          <div className="FilterRow">
            <div className="Filter col">
              <div className="FilterLabel">Tên chuyên mục</div>
              <div className="FilterInput FilterTextInput">
                <input
                  type="text"
                  placeholder="Nhập tên chuyên mục"
                  id="TopicNameInput"
                  name="TopicNameInput"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                ></input>
              </div>
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
                    <label htmlFor="">Ảnh chuyên mục</label>
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
                      <label htmlFor="">Tiêu đề chuyên mục</label>
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
        <div className="AdminTopicResult">
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
                              setUpdate(!update);
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
                              <Modal.Title>Thông tin chuyên mục</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <div className="add__form">
                                <form action="">
                                  <div className="form__avatar">
                                    <label htmlFor="">Ảnh chuyên mục</label>
                                    <div className="form__image">
                                      {icon ? (
                                        <img
                                          src={icon}
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
                                        Tiêu đề chuyên mục
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
          <div className="PageMonitor">
            <div className="PrevPage flex-center disabled">
              <FcPrevious />
            </div>
            <ul className="Pages clear">
              <li className="Page flex-center bold selected">1</li>
              <li className="Page flex-center bold">2</li>
              <li className="Page flex-center bold">3</li>
              <li className="Page flex-center bold">4</li>
              <li className="Page flex-center bold">5</li>
            </ul>
            <div className="NextPage flex-center">
              <FcNext />
            </div>
          </div>
        </div>
      </div>
      {dialogueList}
    </>
  );
};

export default AdminTopic;
