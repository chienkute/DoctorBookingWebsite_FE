import { memo, useState } from "react";
import "./style.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdAccountCircle } from "react-icons/md";
import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";
import imageLogin from "../../assets/image_1.png";
import imageLogin2 from "../../assets/image_2.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser } from "redux/apiRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfPassword, setIsShowConfPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      console.log(values);
      const newUser = {
        email: values.email,
        password: values.password,
        username: values.username,
      };
      registerUser(newUser, dispatch, navigate);
    },
  });
  return (
    <div className="container">
      <div className="forms shadow dark:border">
        <Form className="forms__register" onSubmit={formik.handleSubmit}>
          <h1 className="forms__register_title">Đăng ký</h1>
          <Form.Label className="forms__register_text" htmlFor="username">
            Tài khoản
          </Form.Label>
          <Form.Group className="mb-3 forms__register_in">
            <Form.Control
              id="username"
              type="text"
              placeholder="Nhập tài khoản của bạn"
              className="forms__register_input"
              size="lg"
              onChange={formik.handleChange}
              {...formik.getFieldProps("username")}
            />
            <div>
              <MdAccountCircle></MdAccountCircle>
            </div>
          </Form.Group>
          <div className="form__login_error">
            {formik.touched.username && formik.errors.username}
          </div>
          <Form.Label className="forms__register_text" htmlFor="password">
            Mật khẩu
          </Form.Label>
          <Form.Group className="mb-3 forms__register_in">
            <Form.Control
              id="password"
              type={`${isShowPassword ? "text" : "password"}`}
              className="forms__register_input"
              size="lg"
              placeholder="Nhập mật khẩu của bạn"
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
          <Form.Label className="forms__register_text" htmlFor="confirmpasswd">
            Nhập lại mật khẩu
          </Form.Label>
          <Form.Group className="mb-3 forms__register_in">
            <Form.Control
              id="confirmpasswd"
              type={`${isShowConfPassword ? "text" : "password"}`}
              className="forms__register_input"
              size="lg"
              placeholder="Nhập lại mật khẩu của bạn"
              onChange={formik.handleChange}
              {...formik.getFieldProps("confirmpasswd")}
            />
            <div onClick={() => setIsShowConfPassword(!isShowConfPassword)}>
              {isShowConfPassword ? <AiFillEye /> : <AiOutlineEyeInvisible />}
            </div>
          </Form.Group>
          <div className="form__login_error">
            {formik.touched.confirmpasswd && formik.errors.confirmpasswd}
          </div>
          <Form.Label className="forms__register_text" htmlFor="email">
            Email
          </Form.Label>
          <Form.Group className="mb-3 forms__register_in">
            <Form.Control
              id="email"
              type="email"
              placeholder="Nhập email của bạn"
              className="forms__register_input"
              size="lg"
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
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="forms__register_btn1"
          >
            <span>Đăng ký</span>
          </Button>
          <div>
            <Button
              type="submit"
              variant="light  "
              className="forms__register_google"
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
              className="forms__register_facebook"
            >
              <div>
                <BsFacebook></BsFacebook>
              </div>
              <span>Đăng nhập bằng Facebook</span>
            </Button>
          </div>
        </Form>
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
