import { memo } from "react";
import "./hospitalPage.scss";
import HospitalSide from "../../Hospital/HospitalSide/hospitalSide";
const AdminLayout = ({ children, ...props }) => {
  return (
    <div {...props}>
      <div className="AdminPageContainer">
        <div className="AdminPageSideMenu">
          <HospitalSide></HospitalSide>
        </div>
        <div className="AdminPageContent">{children}</div>
      </div>
    </div>
  );
};
export default memo(AdminLayout);
