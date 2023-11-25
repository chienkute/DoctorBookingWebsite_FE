import { memo, useContext, useState } from "react";
import { FaSistrix } from "react-icons/fa6";
import "../Categories/categories.scss";
import { BiSolidCategory } from "react-icons/bi";
import categoriesimage1 from "../../../assets/chuyenmuc/tooth.png";
import { fetchAllCategories } from "service/UserService";
import { useEffect } from "react";
import { LoadingContext } from "context/LoadingContext";
import { useNavigate } from "react-router-dom";
const Categories = () => {
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const { loading, setLoading } = useContext(LoadingContext);
  const navigate = useNavigate();
  const getAllCategories = async () => {
    let res = await fetchAllCategories();
    if (res) {
      setLoading(false);
      setCategory(res?.results);
    }
  };
  const filteredCategories = category.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <div className="categories">
      <div className="categories__header d-flex align-items-center">
        <div className="categories__icon_header">
          <BiSolidCategory></BiSolidCategory>
        </div>
        <a href="/categories" className="color-black fs-normal-text">
          Tất cả chuyên mục
        </a>
      </div>
      <div className="categories__body">
        <h1 className="categories__title">Không biết bắt đầu từ đâu?</h1>
        <div className="categories__button">
          <div className="categories__icon flex-center">
            <FaSistrix />
          </div>
          <div className="categories__input flex-center">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              id="categories__in"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div class="categories__list">
          {loading ? (
            <div className="lds lds-special">
              <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : (
            <div className="row">
              {category &&
                category.length > 0 &&
                filteredCategories.map((item, index) => {
                  return (
                    <a
                      className="col-md-2"
                      onClick={() => {
                        navigate(`/category/${item.id}`);
                      }}
                      key={index}
                    >
                      <div>
                        <img src={categoriesimage1} alt="" />
                      </div>
                      <p>{item.name}</p>
                    </a>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default memo(Categories);
