import { memo, useState } from "react";
import { MdEmail } from "react-icons/md";
import imageLogin from "../../assets/image_1.png";
import imageLogin2 from "../../assets/image_2.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";
import "./login.scss";
import { postSignIn } from "service/authService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { loginUser } from "redux/apiRequest";
// import { useDispatch } from "react-redux";
const Login = () => {
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  // const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Bạn chưa nhập email")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng nhập đúng địa chỉ email"
        ),
      password: Yup.string()
        .required("Bạn chưa nhập mật khẩu")
        .min(6, "Mật khẩu không được ít hơn 6 ký tự"),
    }),
    onSubmit: async (values) => {
      const res = await postSignIn(values.email, values.password);
      if (res) {
        console.log(res);
        // toast.success("Dang nhap thanh cong");
        navigate("/");
      }
    },
  });
  return (
    <div className="container">
      <div className="form shadow dark:border">
        <form className="w-100" onSubmit={formik.handleSubmit}>
          <h1 className="form__login_title">Đăng nhập</h1>
          <div class="mb-3">
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
            <div>
              <a href="/register">Đăng ký</a>
            </div>
            <div>
              <a href="#!">Quên mật khẩu ?</a>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-block mb-4">
            Đăng nhập
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
