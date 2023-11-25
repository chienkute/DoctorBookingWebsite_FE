import { memo } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MasterLayout = ({ children, ...props }) => {
  return (
    <div {...props}>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};
export default memo(MasterLayout);
