import { memo, useState } from "react";
// import { MdEmail } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import imageLogin from "../../assets/image_1.png";
import imageLogin2 from "../../assets/image_2.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";
import "./login.scss";
import { login } from "service/UserService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  // useEffect(() => {
  //   let token = localStorage.getItem("token");
  //   if (token) {
  //     navigate("/");
  //   }
  // }, []);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      // email: Yup.string()
      //   .required("Bạn chưa nhập email")
      //   .matches(
      //     /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      //     "Vui lòng nhập đúng địa chỉ email"
      //   ),
      username: Yup.string().required("Bạn chưa nhập tài khoản"),
      // .min(6, "Tên tài khoản ít nhất phải chứa 6 ký tự hoặc hơn"),
      password: Yup.string()
        .required("Bạn chưa nhập mật khẩu")
        .min(6, "Mật khẩu không được ít hơn 6 ký tự"),
    }),
    onSubmit: async (values) => {
      const res = await login(values.username, values.password);
      if (res?.account?.role === "user" && res.access_token) {
        localStorage.setItem("token", res.access_token);
        localStorage.setItem("user", JSON.stringify(res?.user));
        localStorage.setItem("account", JSON.stringify(res?.user?.account));
        navigate("/");
        toast.success("Đăng nhập thành công");
      } else if (res?.account?.role === "hospital" && res.access_token) {
        localStorage.setItem("token", res.access_token);
        localStorage.setItem("hospital", JSON.stringify(res));
        navigate(`/hospital/information/${res?.hospital?.id}`);
        toast.success("Đăng nhập thành công");
      } else if (res?.account?.role === "admin" && res.access_token) {
        localStorage.setItem("token", res.access_token);
        localStorage.setItem("admin", JSON.stringify(res));
        navigate(`/admin/dashboard/${res?.admin?.id}`);
        toast.success("Đăng nhập thành công");
      } else if (res?.account?.role === "doctor" && res.access_token) {
        localStorage.setItem("token", res.access_token);
        localStorage.setItem("doctor", JSON.stringify(res));
        navigate(`/doctor/information/${res?.doctor?.id}`);
        toast.success("Đăng nhập thành công");
      } else {
        toast.error("Lỗi đăng nhập");
      }
    },
  });
  return (
    <div className="container">
      <div className="form shadow dark:border">
        <form className="w-100" onSubmit={formik.handleSubmit}>
          <h1 className="form__login_title">Đăng nhập</h1>
          {/* <div class="mb-3">
            <label for="email" class="form-label form__login_text">
              Email
            </label>
            <div className="form__login_in">
              <input
                type="email"
                class="form-control"
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
              <div className="form__login_error">
                {formik.touched.email && formik.errors.email}
              </div>
            </div>
          </div> */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Tài khoản
            </label>
            <div className="form__login_in">
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
              <div className="form__login_error">
                {formik.touched.username && formik.errors.username}
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label form__login_text">
              Mật khẩu
            </label>
            <div className="form__login_in">
              <input
                type={`${isShowPassword ? "text" : "password"}`}
                class="form-control"
                id="password"
                placeholder="Nhập mật khẩu của bạn"
                value={formik.values.password}
                onChange={formik.handleChange}
                {...formik.getFieldProps("password")}
              />
              <div onClick={() => setIsShowPassword(!isShowPassword)}>
                {isShowPassword ? <AiFillEye /> : <AiOutlineEyeInvisible />}
              </div>
              <div className="form__login_error">
                {formik.touched.password && formik.errors.password}
              </div>
            </div>
          </div>
          <div class="mb-4 d-flex justify-content-between">
            <div></div>
            <div>
              <a href="/register">Đăng ký</a>
            </div>
            {/* <div>
              <a href="#!">Quên mật khẩu ?</a>
            </div> */}
          </div>
          <button
            type="submit"
            class="btn btn-primary btn-block mb-2 mt-3 button-login"
          >
            {/* <i class="fas fa-sync fa-spin"></i> */}
            Đăng nhập
          </button>
        </form>
      </div>
      <div className="image1">
        <img src={imageLogin} alt="" />
      </div>
      <div className="image2">
        <img src={imageLogin2} alt="" />
      </div>
    </div>
  );
};
export default memo(Login);
