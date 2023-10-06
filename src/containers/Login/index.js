import { memo, useState, useEffect } from "react";
import "./style.scss";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";
import imageLogin from "../../assets/image_1.png";
import imageLogin2 from "../../assets/image_2.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginUser } from "redux/apiRequest";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    onSubmit: (values) => {
      const newUser = {
        email: values.email,
        password: values.password,
      };
      loginUser(newUser, dispatch, navigate);
    },
  });
  return (
    <div className="container">
      <div className="form shadow dark:border form__wrapper">
        <Form className="form__login" onSubmit={formik.handleSubmit}>
          <h1 className="form__login_title">Đăng nhập</h1>
          <div>
            <Form.Label className="form__login_text" htmlFor="email">
              Email
            </Form.Label>
            <Form.Group className="mb-3 form__login_in">
              <Form.Control
                id="email"
                type="email"
                placeholder="Nhập email của bạn"
                className="form__login_input"
                size="lg"
                value={formik.values.email}
                onChange={formik.handleChange}
                {...formik.getFieldProps("email")}
              />
              <div>
                <MdEmail></MdEmail>
              </div>
            </Form.Group>
            <div className="form__login_error">
              {formik.touched.email && formik.errors.email}
            </div>
          </div>
          <div>
            <Form.Label className="form__login_text" htmlFor="password">
              Mật khẩu
            </Form.Label>
            <Form.Group className="mb-3 form__login_in">
              <Form.Control
                type={`${isShowPassword ? "text" : "password"}`}
                className="form__login_input"
                size="lg"
                placeholder="Nhập mật khẩu của bạn"
                id="password"
                onChange={formik.handleChange}
                {...formik.getFieldProps("password")}
              />
              <div onClick={() => setIsShowPassword(!isShowPassword)}>
                {isShowPassword ? <AiFillEye /> : <AiOutlineEyeInvisible />}
              </div>
            </Form.Group>
            <div className="form__login_error">
              {formik.touched.password && formik.errors.password}
            </div>
          </div>
          <div className="form__login_link">
            <Link to={"/register"}>Đăng kí ngay</Link>
            <Link to={"/forgotpasswd"}>Quên mật khẩu?</Link>
          </div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="form__login_btn1"
          >
            <span>Đăng nhập</span>
          </Button>
          <div>
            <Button
              type="submit"
              variant="light  "
              className="form__login_google"
            >
              <div>
                <FcGoogle></FcGoogle>
              </div>
              <span>Đăng nhập bằng Google</span>
            </Button>
          </div>
          <div>
            <Button
              type="submit"
              variant="light"
              className="form__login_facebook"
            >
              <div>
                <BsFacebook></BsFacebook>
              </div>
              <span>Đăng nhập bằng Facebook</span>
            </Button>
          </div>
        </Form>
        {/* <form className="form__login">
          <div class="form-outline mb-4">
            <input type="email" id="form2Example1" class="form-control" />
            <label class="form-label" for="form2Example1">
              Email address
            </label>
          </div>

          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" />
            <label class="form-label" for="form2Example2">
              Password
            </label>
          </div>

          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example34"
                  checked
                />
                <label class="form-check-label" for="form2Example34">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div class="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-block mb-4">
            Sign in
          </button>

          <div class="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>
            <button type="button" class="btn btn-secondary btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-secondary btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-secondary btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-secondary btn-floating mx-1">
              <i class="fab fa-github"></i>
            </button>
          </div>
        </form> */}
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
