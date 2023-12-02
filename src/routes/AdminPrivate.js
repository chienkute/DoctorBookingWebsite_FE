import { Navigate } from "react-router-dom";

const AdminPrivate = ({ children }) => {
  if (!localStorage.getItem("token")) return <Navigate to="/login" />;
  return <div>{children}</div>;
};

export default AdminPrivate;
