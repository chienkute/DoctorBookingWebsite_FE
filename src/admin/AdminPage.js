import React from "react";
import "./AdminPage.scss";
import SideMenu from "./SideMenu/SideMenu";
import AdminUser from "./Content/User/AdminUser";
import AdminDashboard from "./Content/Dashboard/AdminDashboard";
import AdminTopic from "./Content/Topic/AdminTopic";
import AdminPost from "./Content/Post/AdminPost";
import AdminTool from "./Content/Tools/AdminTools";
import AdminHospital from "./Content/Hospital/AdminHospital";
import AdminSpecialList from "./Content/Specialist/AdminSpecialist";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: "AdminMenuDashboard",
    };
  }

  changeActiveMenu = (menuName) => {
    this.setState({ activeMenu: menuName });
  };

  renderContent = () => {
    switch (this.state.activeMenu) {
      case "AdminMenuDashboard":
        return <AdminDashboard />;
      case "AdminMenuUser":
        return <AdminUser />;
      case "AdminMenuTopic":
        return <AdminTopic />;
      case "AdminMenuPost":
        return <AdminPost />;
      case "AdminMenuTool":
        return <AdminTool />;
      case "AdminMenuHospital":
        return <AdminHospital />;
      case "AdminMenuSpecialist":
        return <AdminSpecialList />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="AdminPageContainer">
        <div className="AdminPageSideMenu">
          <SideMenu changeAdminMenu={this.changeActiveMenu} />
        </div>
        <div className="AdminPageContent">{this.renderContent()}</div>
      </div>
    );
  }
}

export default AdminPage;
