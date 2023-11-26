import { memo } from "react";
import "../../user/Blog/blog.scss";
import { BiSolidCategory } from "react-icons/bi";
import doctorAvt from "../../../assets/doctor/tat.jpg";
const Blog = () => {
  const htmlText = "<b>hello</b>";
  return (
    <div className="blog">
      <div className="categories__header d-flex align-items-center">
        <div className="categories__icon_header">
          <BiSolidCategory></BiSolidCategory>
        </div>
        <a href="/categories" className="color-black fs-normal-text">
          Tất cả chuyên mục
        </a>
      </div>
      <div className="blog__main">
        <div className="blog__main_content">
          <div dangerouslySetInnerHTML={{ __html: htmlText }} />
        </div>
        <div className="blog__main_author">
          <div className="blog__main_avatar">
            <img src={doctorAvt} alt="" />
          </div>
          <p className="blog__main_text">Tác giả :</p>
          <p className="blog__main_name">
            Bác sĩ Nguyễn Trần Diễm Châu Thanh Minh
          </p>
          <p className="blog__main_text">
            Nội khoa - Nội tổng quát · Bệnh Viện Đa Khoa Tỉnh Bắc Ninh
          </p>
          <p className="blog__main_text">Ngày cập nhật : 21/10/2002</p>
          <button className="btn button">Đặt lịch ngay</button>
        </div>
      </div>
    </div>
  );
};
export default memo(Blog);
