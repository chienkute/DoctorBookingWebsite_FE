import { memo, useState } from "react";
import "./register.scss";
import { MdEmail, MdAccountCircle } from "react-icons/md";
import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";
import imageLogin from "../../assets/image_1.png";
import imageLogin2 from "../../assets/image_2.png";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { registerUser } from "redux/apiRequest";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfPassword, setIsShowConfPassword] = useState(false);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
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
        .oneOf([Yup.ref("passwd"), null], "Mật khẩu phải trùng khớp với nhau"),
      email: Yup.string()
        .required("Bạn chưa nhập email")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng nhập đúng địa chỉ email"
        ),
    }),
    onSubmit: (values) => {
      // console.log(values);
      // const newUser = {
      //   email: values.email,
      //   password: values.password,
      //   username: values.username,
      // };
      // registerUser(newUser, dispatch, navigate);
    },
  });
  return (
    <div className="container">
      <div className="form shadow dark:border">
        <form className="w-100" onSubmit={formik.handleSubmit}>
          <h1 className="form__register_title">Đăng ký</h1>
          <div class="mb-3">
            <label for="username" class="form-label">
              Tài khoản
            </label>
            <div className="form__register_in">
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Nhập tài khoản của bạn"
                value={formik.values.username}
                onChange={formik.handleChange}
                {...formik.getFieldProps("username")}
              />
              <div>
                <MdAccountCircle></MdAccountCircle>
              </div>
              <div className="form__register_error">
                {formik.touched.username && formik.errors.username}
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label form__register_text">
              Email
            </label>
            <div className="form__register_in">
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
              <div className="form__register_error">
                {formik.touched.email && formik.errors.email}
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label form__register_text">
              Mật khẩu
            </label>
            <div className="form__register_in">
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
              <div className="form__register_error">
                {formik.touched.password && formik.errors.password}
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="confirmpasswd" class="form-label form__register_text">
              Nhập lại mật khẩu
            </label>
            <div className="form__register_in">
              <input
                type={`${isShowConfPassword ? "text" : "password"}`}
                class="form-control"
                id="confirmpasswd"
                placeholder="Nhập lại mật khẩu của bạn"
                value={formik.values.confirmpasswd}
                onChange={formik.handleChange}
                {...formik.getFieldProps("confirmpasswd")}
              />
              <div onClick={() => setIsShowConfPassword(!isShowConfPassword)}>
                {isShowConfPassword ? <AiFillEye /> : <AiOutlineEyeInvisible />}
              </div>
              <div className="form__register_error">
                {formik.touched.confirmpasswd && formik.errors.confirmpasswd}
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-block mb-4">
            Đăng ký
          </button>

          <div class="text-center">
            <p>Hoặc đăng nhập với:</p>
            <button type="button" class="btn btn-secondary btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-secondary btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>
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
