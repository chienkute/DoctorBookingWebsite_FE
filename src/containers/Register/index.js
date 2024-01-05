import { memo, useState } from "react";
import "./register.scss";
import { MdEmail, MdAccountCircle } from "react-icons/md";
import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";
import imageLogin from "../../assets/banner_4.png";
import imageLogin2 from "../../assets/banner__3.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signup } from "service/UserService";
const Register = () => {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfPassword, setIsShowConfPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmpasswd: "",
      email: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Bạn chưa nhập tài khoản")
        .min(6, "Tên tài khoản ít nhất phải chứa 6 ký tự hoặc hơn"),
      password: Yup.string()
        .required("Bạn chưa nhập mật khẩu")
        .min(6, "Mật khẩu không được ít hơn 6 ký tự"),
      confirmpasswd: Yup.string()
        .required("Bạn chưa nhập lại mật khẩu")
        .min(6, "Mật khẩu không được ít hơn 6 ký tự")
        .oneOf(
          [Yup.ref("password"), null],
          "Mật khẩu phải trùng khớp với nhau",
        ),
      email: Yup.string()
        .required("Bạn chưa nhập email")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng nhập đúng địa chỉ email",
        ),
    }),
    onSubmit: async (values) => {
      const res = await signup(values.username, values.email, values.password);
      if (res?.user) {
        console.log(res);
        toast.success("Đăng ký thành công");
        navigate("/login");
      } else {
        toast.error("Tài khoản hoặc email đã tồn tại !!");
      }
    },
  });
  return (
    <div className="container">
      <div className="forms shadow dark:border">
        <form className="w-100" onSubmit={formik.handleSubmit}>
          <h1 className="forms__register_title">Đăng ký</h1>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Tài khoản
            </label>
            <div className="forms__register_in">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Nhập tài khoản của bạn"
                value={formik.values.username}
                onChange={formik.handleChange}
                {...formik.getFieldProps("username")}
              />
              <div>
                <MdAccountCircle></MdAccountCircle>
              </div>
              <div className="forms__register_error">
                {formik.touched.username && formik.errors.username}
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label forms__register_text">
              Email
            </label>
            <div className="forms__register_in">
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Nhập email của bạn"
                value={formik.values.email}
                onChange={formik.handleChange}
                {...formik.getFieldProps("email")}
              />
              <div>
                <MdEmail></MdEmail>
              </div>
              <div className="forms__register_error">
                {formik.touched.email && formik.errors.email}
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label forms__register_text"
            >
              Mật khẩu
            </label>
            <div className="forms__register_in">
              <input
                type={`${isShowPassword ? "text" : "password"}`}
                className="form-control"
                id="password"
                placeholder="Nhập mật khẩu của bạn"
                value={formik.values.password}
                onChange={formik.handleChange}
                {...formik.getFieldProps("password")}
              />
              <div onClick={() => setIsShowPassword(!isShowPassword)}>
                {isShowPassword ? <AiFillEye /> : <AiOutlineEyeInvisible />}
              </div>
              <div className="forms__register_error">
                {formik.touched.password && formik.errors.password}
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="confirmpasswd"
              className="form-label forms__register_text"
            >
              Nhập lại mật khẩu
            </label>
            <div className="forms__register_in">
              <input
                type={`${isShowConfPassword ? "text" : "password"}`}
                className="form-control"
                id="confirmpasswd"
                placeholder="Nhập lại mật khẩu của bạn"
                value={formik.values.confirmpasswd}
                onChange={formik.handleChange}
                {...formik.getFieldProps("confirmpasswd")}
              />
              <div onClick={() => setIsShowConfPassword(!isShowConfPassword)}>
                {isShowConfPassword ? <AiFillEye /> : <AiOutlineEyeInvisible />}
              </div>
              <div className="forms__register_error">
                {formik.touched.confirmpasswd && formik.errors.confirmpasswd}
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Đăng ký
          </button>
          <div className="text-center">
            <p>Bạn đã có tài khoản ?</p>
            <Link to={"/login"}>Đăng nhập</Link>
          </div>
        </form>
      </div>
      <div className="register_image1">
        <img src={imageLogin} alt="" />
      </div>
      <div className="register_image2">
        <img src={imageLogin2} alt="" />
      </div>
    </div>
  );
};
export default memo(Register);
