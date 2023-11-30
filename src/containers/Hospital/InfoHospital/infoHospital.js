import { memo, useRef } from "react";
import "./infoHospital.scss";
import avatar from "../../../assets/avatar.jpg";
import upload from "../../../assets/upload 1.svg";
const InfoHospital = () => {
  const inputRef = useRef(null);
  const handleImageClick = () => {
    inputRef.current.click();
  };
  return (
    <div className="information">
      <h1>Hồ sơ cá nhân</h1>
      <div className="information__header">
        <div className="information__avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="information__upload">
          <input type="file" style={{ display: "none" }} ref={inputRef} />
          <button className="btn button" onClick={handleImageClick}>
            <img src={upload} alt="" />
            Tải ảnh lên
          </button>
          <div>Cho phép tệp loại JPG, GIF hoặc PNG. Kích cỡ 2MB</div>
        </div>
      </div>
      <div className="information__content">
        <div className="information__content1">
          <div className="information__name">
            <label htmlFor="">Tên bệnh viện</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div className="information__content2">
          <div className="information__phone">
            <label htmlFor="">Tên bệnh viện</label>
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(InfoHospital);
