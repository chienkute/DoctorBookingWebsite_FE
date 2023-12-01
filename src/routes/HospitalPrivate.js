import { Navigate } from "react-router-dom";

const HospitalPrivate = ({ children }) => {
  if (!localStorage.getItem("hospital_token")) return <Navigate to="/login" />;
  return <div>{children}</div>;
};

export default HospitalPrivate;
