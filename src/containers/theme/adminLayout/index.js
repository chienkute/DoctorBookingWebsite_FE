import SideMenu from "admin/SideMenu/SideMenu";
import { memo } from "react";
import "./AdminPage.scss";
const AdminLayout = ({ children, ...props }) => {
  return (
    <div {...props}>
      <div className="AdminPageContainer">
        <div className="AdminPageSideMenu">
          <SideMenu></SideMenu>
        </div>
        <div className="AdminPageContent">{children}</div>
      </div>
    </div>
  );
};
export default memo(AdminLayout);
