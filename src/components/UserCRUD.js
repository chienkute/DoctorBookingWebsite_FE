import { memo, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const { useEffect } = require("react");
const { fetchAllUser, postCreateUser, login } = require("service/UserService");
const UserCRUD = (props) => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  // logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    toast.success("Log out success!");
  };
  // phân trang
  const handlePageClick = (event) => {
    getUser(+event.selected + 1);
  };
  // thêm user
  const handleSaveUser = async () => {
    let res = await postCreateUser(name, job);
    if (res && res.id) {
      setName("");
      setJob("");
      handleUpdateTable({ first_name: name, id: res.id });
    } else {
    }
  };
  const handleUpdateTable = (user) => {
    setList([user, ...list]);
  };
  useEffect(() => {
    getUser(1);
  }, []);
  // lấy danh sách user
  const getUser = async (page) => {
    let res = await fetchAllUser(page);
    if (res && res.data) {
      setTotal(res.total);
      setList(res.data);
      setTotalPage(res.total_pages);
    }
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>First name</th>
              <th>First name</th>
            </tr>
          </thead>
          <tbody>
            {list &&
              list.length > 0 &&
              list.map((item, index) => {
                return (
                  <tr key={`users-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.id}</td>
                    <td>{item.id}</td>
                  </tr>
                );
              })}
          </tbody>
          {/* PHÂN TRANG */}
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalPage}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
          />
        </table>
        <form action="">
          <input
            type="text"
            value={name}
            onClick={(event) => setName(event.target.value)}
          />
          <button onClick={() => handleSaveUser()}></button>
        </form>
      </div>
    );
  };
};
export default memo(UserCRUD);
