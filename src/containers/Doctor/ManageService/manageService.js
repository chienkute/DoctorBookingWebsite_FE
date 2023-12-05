import { memo, useContext, useEffect, useState } from "react";
import "./manageService.scss";
import { FaEraser } from "react-icons/fa6";
import { IoInformation } from "react-icons/io5";
import { FaRegCheckSquare } from "react-icons/fa";
import avatar from "../../../assets/avatar.png";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ReactPaginate from "react-paginate";
import { useDebounce } from "@uidotdev/usehooks";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { UpdateContext } from "context/UpdateContext";
import { fetchAllService } from "service/UserService";
import {
  addService,
  getServiceByDoctorId,
  deleteSomeServiceDoctor,
} from "service/DoctorService";
const ManageService = () => {
  const { id } = useParams();
  const { update, setUpdate } = useContext(UpdateContext);
  const [showEditBlog, setShowEditBlog] = useState(false);
  const handleCloseEditBlog = () => setShowEditBlog(false);
  const handleShowEditBlog = () => setShowEditBlog(true);
  const [showDeleteBlog, setShowDeleteBlog] = useState(false);
  const handleCloseDeleteBlog = () => setShowDeleteBlog(false);
  const handleShowDeleteBlog = () => setShowDeleteBlog(true);
  const [query, setQuery] = useState("");
  const [serviceDoctors, setServiceDoctors] = useState([]);
  const [allService, setAllService] = useState([]);
  const [selectService, setSelectService] = useState("");
  const [count, setCount] = useState("");
  const [choosedCheckboxs, setChoosedCheckboxs] = useState([]);
  const queryDebounce = useDebounce(query, 500);
  const [defaultValue, setDefaultValue] = useState("");
  const [defaultDescribe, setDefaultDescribe] = useState("");
  const [icon, setIcon] = useState("");
  const searchService = async () => {
    let res = await getServiceByDoctorId(id);
    if (res) {
      console.log(res);
      setServiceDoctors(res?.results);
      setCount(res?.count);
    }
  };
  const getAllService = async () => {
    let res = await fetchAllService();
    if (res) {
      setAllService(res?.results);
    }
  };
  const addServiceByID = async () => {
    let res = await addService(selectService, id);
    if (res) {
      console.log(res);
      toast.success("Thêm dịch vụ thành công");
      searchService();
    } else {
      toast.error("Thêm thất bại");
    }
  };
  const filteredCategories = serviceDoctors.filter((item) =>
    item?.service?.name.toLowerCase().includes(query.toLowerCase()),
  );
  const deleteServiceDoctors = async (serviceDoctorIds) => {
    let res = await deleteSomeServiceDoctor(serviceDoctorIds);
    if (res) {
      console.log(res);
      toast.success("Xóa dịch vụ thành công");
      searchService();
    } else {
      toast.error("Xóa thất bại");
    }
  };
  useEffect(() => {
    searchService();
  }, [queryDebounce]);
  useEffect(() => {
    getAllService();
    searchService();
  }, []);
  return (
    <div>
      <div className="management">
        <div className="management__header">
          <div className="management__search">
            <div className="management__input flex-center">
              <input
                type="text"
                placeholder="Tìm kiếm theo tên dịch vụ"
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
                setSelectService(e.target.value);
              }}
            >
              <option value={""}>Chọn dịch vụ</option>
              {allService &&
                allService.length > 0 &&
                allService.map((item, index) => {
                  return <option value={`${item?.id}`}>{item?.name}</option>;
                })}
            </Form.Select>
          </div>
          <button
            className="btn button"
            onClick={() => {
              addServiceByID();
              setUpdate(!update);
              setQuery("");
            }}
          >
            Thêm
          </button>
        </div>
        <div className="management__content">
          <div className="AdminUserResult">
            <div className="ResultPerTable">
              {/* <label for="dropdown">Có {count} kết quả tìm được</label> */}
              <button
                className="btn button mt-4"
                onClick={async () => {
                  console.log(choosedCheckboxs);
                  deleteServiceDoctors(choosedCheckboxs);
                }}
              >
                Xoá các mục đã chọn
              </button>
            </div>
            <div className="Table">
              <table>
                <tr>
                  <th>
                    <FaRegCheckSquare />
                  </th>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Ảnh</th>
                  <th>Hành động</th>
                </tr>
                {serviceDoctors &&
                  serviceDoctors.length > 0 &&
                  filteredCategories.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <input
                            type="checkbox"
                            onChange={(e) => {
                              if (e.target.checked) {
                                setChoosedCheckboxs((prevChoosedCheckboxs) => {
                                  console.log(
                                    "prevChoosedCheckboxs",
                                    prevChoosedCheckboxs,
                                  );
                                  return [...prevChoosedCheckboxs, item.id];
                                });
                              } else {
                                setChoosedCheckboxs((prevChoosedCheckboxs) => {
                                  console.log(
                                    "prevChoosedCheckboxs",
                                    prevChoosedCheckboxs,
                                  );
                                  return prevChoosedCheckboxs.filter(
                                    (prevChoosedCheckbox) =>
                                      prevChoosedCheckbox !== item.id,
                                  );
                                });
                              }
                            }}
                          ></input>
                        </td>
                        <td>{index}</td>
                        <td style={{ transform: "translateY(10px)" }}>
                          <p>{item?.service.name}</p>
                        </td>
                        <td>
                          <img
                            src={item?.service?.icon || avatar}
                            alt=""
                            style={{ height: "50px", width: "50x" }}
                          />
                        </td>
                        <td>
                          <div className="Action">
                            <button
                              className="InfoButton"
                              onClick={() => {
                                handleShowEditBlog();
                                setDefaultValue(item?.service.name);
                                setDefaultDescribe(item?.service.descripe);
                                setIcon(item?.service?.icon);
                              }}
                            >
                              <IoInformation />
                            </button>
                            <Modal
                              show={showEditBlog}
                              onHide={handleCloseEditBlog}
                              centered
                            >
                              <Modal.Header closeButton>
                                <Modal.Title>Thông tin dịch vụ</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <div className="add__form">
                                  <form action="">
                                    <div className="form__avatar">
                                      <label htmlFor="">Ảnh dịch vụ</label>
                                      <div className="form__image">
                                        <img src={icon || avatar} alt="" />
                                      </div>
                                    </div>
                                    <div>
                                      <div className=" form__col">
                                        <label htmlFor="">
                                          Tiêu đề dịch vụ
                                        </label>
                                        <input
                                          type="text"
                                          id="nameEdit"
                                          class="form-control"
                                          autoComplete="off"
                                          defaultValue={defaultValue}
                                          disabled
                                        />
                                      </div>
                                      <div className="form__col">
                                        <label htmlFor="">
                                          Thông tin cơ bản
                                        </label>
                                        <textarea
                                          name=""
                                          id=""
                                          cols="30"
                                          rows="10"
                                          defaultValue={defaultDescribe}
                                          disabled
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
                                  Bạn có muốn xóa dịch vụ này không ?
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
                                    deleteServiceDoctors([item.id]);
                                    setUpdate(!update);
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
          {/* <button
            className="btn button mt-4"
            onClick={async () => {
              console.log(choosedCheckboxs);
              deleteServiceDoctors(choosedCheckboxs);
            }}
          >
            Xoá các mục đã chọn
          </button> */}
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
    </div>
  );
};
export default memo(ManageService);
