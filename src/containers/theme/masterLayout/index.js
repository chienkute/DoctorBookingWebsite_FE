import { memo } from "react";
import Header from "../Header/Header";
const MasterLayout = ({ children, ...props }) => {
  return (
    <div {...props}>
      {/* <Header></Header> */}
      {children}
    </div>
  );
};
export default memo(MasterLayout);
