import { React, useEffect, useState } from "react";
import "./AppointmentBox.scss";
import icon from "assets/icon.png";
import Day from "./Day/day";

const AppointmentBox = (props) => {
  const [id, setId] = useState(null);
  useEffect(() => {
    setId(props.id);
  }, []);
  return (
    <div className="AppointmentBoxContainer">
      <div className="AppointmentBoxHeader">
        <div className="AppointmentMethod selected">Tư vấn trực tiếp</div>
      </div>
      <div className="AppointmentBoxContent">
        <Day id={id}></Day>
        <div className="AppointmentFee">
          <span className="Icon">
            <img src={icon} alt="Icon"></img>
          </span>
          <span>Phí tư vấn ban đầu từ</span>
          <span className="Fee"> 150.000đ</span>
        </div>
      </div>
      <div className="AppointmentBoxButton">
        <button>Tiếp tục đặt lịch</button>
      </div>
    </div>
  );
};

export default AppointmentBox;
