import "../../user/SearchDoctor/SearchDoctor.scss";
import "../../user/HospitalPage/hospitalPage.scss";
import ReactPaginate from "react-paginate";
import "../../user/SearchDoctor/DoctorSearchResult.scss";
import "../../../style/page.scss";
import hospavt from "../../../assets/hospital.jpg";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import "../ServiceSearch/serviceSearch.scss";
import { useEffect, useState } from "react";
import { fetchAllService } from "service/UserService";
import { useNavigate } from "react-router-dom";
const ServiceSearch = () => {
  const [service, setService] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getService = async () => {
      let res = await fetchAllService();
      if (res) {
        setService(res.results);
        console.log(res);
      }
    };
    getService();
  }, []);
  const filteredCategories = service.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="serviceSearch">
      <div className="SearchDoctorPageContent serviceSearch__page">
        <div className="SearchDoctorInputRows"></div>
        <div className="SearchDoctorResultContainer">
          <div className="SearchDoctorResultContent">
            <div className="care__banner_button">
              <div className="care__banner_input flex-center">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  id="care__ins"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div
              className="SearchDoctorResultLabel bold"
              style={{ marginTop: "30px" }}
            ></div>
            {service &&
              service.length > 0 &&
              filteredCategories.map((item, index) => {
                return (
                  <div className="hospital__body_dichvu_result" key={index}>
                    <div className="hospital__body_dichvu_info">
                      <a
                        href=""
                        onClick={() => {
                          navigate(`/care/service/${item.id}`);
                        }}
                      >
                        {item.name}
                      </a>
                      <div className="hospital__body_dichvu_price">
                        <div className="hospital__body_dichvu_price_icon">
                          <RiMoneyDollarCircleLine></RiMoneyDollarCircleLine>
                        </div>
                        <p>800.000</p>
                      </div>
                    </div>
                    <div className="hospital__body_dichvu_bottom">
                      <div className="hospital__body_dichvu_bottom_avtHosp">
                        <img src={hospavt} alt="" />
                      </div>
                      <div className="hospital__body_dichvu_bottom_descrip">
                        <a href="#">Phòng Khám ACC - Chiropractic Đà Nẵng</a>
                        <p>
                          112 Đường 2 Tháng 9, phường Bình Thuận, Hải Châu, Đà
                          Nẵng, Viet Nam
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn button hospital__body_dichvu_bottom_button"
                      >
                        Đặt Lịch Hẹn
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="DoctorResultPageMonitor">
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
              activeClassName="active"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSearch;
