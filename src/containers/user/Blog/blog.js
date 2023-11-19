import { memo } from "react";
import "../../user/Blog/blog.scss";
const Blog = () => {
  return (
    <div className="blog">
      <div className="blog__header"></div>
      <div className="blog__main">
        <div className="blog__main_content"></div>
        <div className="blog__main_author">
          <div className="blog__main_avatar">
            <img src="" alt="" />
          </div>
          <p className="blog__main_text">Tác giả :</p>
          <p className="blog__main_name">Bác sĩ Nguyễn Hườn Thanh</p>
          <p className="blog__main_text">
            Nội khoa - Nội tổng quát · Bệnh Viện Đa Khoa Tỉnh Bắc Ninh
          </p>
          <button>Đặt lịch ngay</button>
        </div>
      </div>
    </div>
  );
};
export default memo(Blog);
