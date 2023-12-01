import { memo } from "react";
import "./doctorPage.scss";
import DoctorSide from "../../Doctor/DoctorSide/DoctorSide";
const AdminLayout = ({ children, ...props }) => {
  return (
    <div {...props}>
      <div className="AdminPageContainer">
        <div className="AdminPageSideMenu">
          <DoctorSide></DoctorSide>
        </div>
        <div className="AdminPageContent">{children}</div>
      </div>
    </div>
  );
};
export default memo(AdminLayout);