import { memo } from "react";
import { FaSistrix } from "react-icons/fa6";
import "../Categories/categories.scss";
import { BiSolidCategory } from "react-icons/bi";
import banner from "../../../assets/categoriesBackground.svg";
import categoriesimage1 from "../../../assets/chuyenmuc/tooth.png";
const categories = () => {
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
        {/* <div className="categories__banner">
          <img src={banner} alt="" />
        </div> */}
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
            ></input>
          </div>
        </div>
        <div class="categories__list">
          <div className="row">
            <a className="col-md-2" href="/">
              <div>
                <img src={categoriesimage1} alt="" />
              </div>
              <p>Sức khỏe răng miệng</p>
            </a>
            <a className="col-md-2" href="/">
              <div>
                <img src={categoriesimage1} alt="" />
              </div>
              <p>Sức khỏe răng miệng</p>
            </a>
            <a className="col-md-2" href="/">
              <div>
                <img src={categoriesimage1} alt="" />
              </div>
              <p>Sức khỏe răng miệng</p>
            </a>
            <a className="col-md-2" href="/">
              <div>
                <img src={categoriesimage1} alt="" />
              </div>
              <p>Sức khỏe răng miệng</p>
            </a>
            <a className="col-md-2" href="/">
              <div>
                <img src={categoriesimage1} alt="" />
              </div>
              <p>Sức khỏe răng miệng</p>
            </a>
            <a className="col-md-2" href="/">
              <div>
                <img src={categoriesimage1} alt="" />
              </div>
              <p>Sức khỏe răng miệng</p>
            </a>
          </div>
          <div className="row mt-3">
            <a className="col-md-2" href="/">
              <div>
                <img src={categoriesimage1} alt="" />
              </div>
              <p>Sức khỏe răng miệng</p>
            </a>
            <a className="col-md-2" href="/">
              <div>
                <img src={categoriesimage1} alt="" />
              </div>
              <p>Sức khỏe răng miệng</p>
            </a>
            <a className="col-md-2" href="/">
              <div>
                <img src={categoriesimage1} alt="" />
              </div>
              <p>Sức khỏe răng miệng</p>
            </a>
            <a className="col-md-2" href="/">
              <div>
                <img src={categoriesimage1} alt="" />
              </div>
              <p>Sức khỏe răng miệng</p>
            </a>
            <a className="col-md-2" href="/">
              <div>
                <img src={categoriesimage1} alt="" />
              </div>
              <p>Sức khỏe răng miệng</p>
            </a>
            <a className="col-md-2" href="/">
              <div>
                <img src={categoriesimage1} alt="" />
              </div>
              <p>Sức khỏe răng miệng</p>
            </a>
          </div>
          <div className="row mt-3">
            <a className="col-md-2" href="/">
              <div>
                <img src={categoriesimage1} alt="" />
              </div>
              <p>Sức khỏe răng miệng</p>
            </a>
            <a className="col-md-2" href="/">
              <div>
                <img src={categoriesimage1} alt="" />
              </div>
              <p>Sức khỏe răng miệng</p>
            </a>
            <a className="col-md-2" href="/">
              <div>
                <img src={categoriesimage1} alt="" />
              </div>
              <p>Sức khỏe răng miệng</p>
            </a>
            <a className="col-md-2" href="/">
              <div>
                <img src={categoriesimage1} alt="" />
              </div>
              <p>Sức khỏe răng miệng</p>
            </a>
            <a className="col-md-2" href="/">
              <div>
                <img src={categoriesimage1} alt="" />
              </div>
              <p>Sức khỏe răng miệng</p>
            </a>
            <a className="col-md-2" href="/">
              <div>
                <img src={categoriesimage1} alt="" />
              </div>
              <p>Sức khỏe răng miệng</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(categories);
