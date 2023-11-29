import { memo } from "react";
import "./tool.scss";
import { BiSolidCategory } from "react-icons/bi";
const Tool = () => {
  return (
    <div className="tool">
      <div className="tool__header category__header d-flex align-items-center">
        <div className="category__icon_header">
          <BiSolidCategory></BiSolidCategory>
        </div>
        <a href="/categories" className="color-black fs-normal-text">
          Công cụ kiểm tra sức khỏe
        </a>
      </div>
    </div>
  );
};
export default memo(Tool);
