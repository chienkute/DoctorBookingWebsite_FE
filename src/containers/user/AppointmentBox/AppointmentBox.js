import React from "react";
import "./AppointmentBox.scss";
import icon from "assets/icon.png";

class AppointmentBox extends React.Component {
  render() {
    return (
      <div className="AppointmentBoxContainer">
        <div className="AppointmentBoxHeader">
          <div className="AppointmentMethod selected">Tư vấn trực tiếp</div>
          <div className="AppointmentMethod">Tư vấn từ xa</div>
        </div>
        <div className="AppointmentBoxContent">
          <div className="AppointmentDate">
            <div className="Header">Đặt lịch hẹn</div>
            <div className="DateQuickPicker">
              <input type="date" />
            </div>
          </div>

          <div className="AppointmentHourSelect">
            <ul className="clear ListPartOfDay">
              <li className="PartOfDay">Sáng (0)</li>
              <li className="PartOfDay selected">Chiều (5)</li>
              <li className="PartOfDay">Tối (5)</li>
            </ul>
            <ul className=" clear ListTime">
              <li className="Time selected">13:00 - 13:30</li>
              <li className="Time">13:30 - 14:00</li>
              <li className="Time">14:00 - 14:30</li>
              <li className="Time">14:30 - 15:00</li>
              <li className="Time">15:00 - 15:30</li>
            </ul>
          </div>
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
  }
}

export default AppointmentBox;
