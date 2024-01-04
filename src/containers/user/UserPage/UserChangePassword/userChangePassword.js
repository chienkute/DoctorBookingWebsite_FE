import { memo, useEffect, useState } from "react";
import "./userChangePassword.scss";
import UserTab from "containers/user/UserTab/userTab";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { changePassword, getUserID } from "service/UserService";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
const UserChangePassword = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfPassword, setIsShowConfPassword] = useState(false);
  const [isShowNewPassword, setisShowNewPassword] = useState(false);
  const [idAccount, setIdAccount] = useState("");
  const { id } = useParams();
  const getUserByID = async () => {
    let res = await getUserID(id);
    if (res) {
      setIdAccount(res?.account?.id);
    }
  };
  useEffect(() => {
    getUserByID();
  // eslint-disable-next-line
  }, []);
  const formik = useFormik({
    initialValues: {
      password: "",
      newpasswd: "",
      confirmpasswd: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Bạn chưa nhập mật khẩu")
        .min(6, "Mật khẩu không được ít hơn 6 ký tự"),
      newpasswd: Yup.string()
        .required("Bạn chưa nhập mật khẩu mới")
        .min(6, "Mật khẩu không được ít hơn 6 ký tự"),
      confirmpasswd: Yup.string()
        .required("Bạn chưa nhập lại mật khẩu")
        .min(6, "Mật khẩu không được ít hơn 6 ký tự")
        .oneOf(
          [Yup.ref("newpasswd"), null],
          "Mật khẩu phải trùng khớp với nhau",
        ),
    }),
    onSubmit: async (values) => {
      const res = await changePassword(
        values.password,
        values.newpasswd,
        idAccount,
      );
      if (res?.message === "Password Changed") {
        console.log(res);
        formik.setValues({
          newpasswd: "",
          password: "",
          confirmpasswd: "",
        });
        toast.success("Đổi mật khẩu thành công");
      } else {
        toast.error("Mật khẩu cũ không chính xác !");
      }
    },
  });
  return (
    <div className="UserPageContainer">
      <div className="UserPageContent">
        <UserTab></UserTab>
        <div className="changePassword">
          <h1 className="changePassword__title">Cập nhật mật khẩu</h1>
          <form className="changePassword__form" onSubmit={formik.handleSubmit}>
            <div class="mb-4">
              <label
                for="password"
                class="form-label changePassword__form_text"
              >
                Mật khẩu hiện tại
              </label>
              <div className="form__login_in">
                <input
                  type={`${isShowPassword ? "text" : "password"}`}
                  class="form-control changePassword__form_input"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  {...formik.getFieldProps("password")}
                />
                <div
                  onClick={() => setIsShowPassword(!isShowPassword)}
                  className="changePassword__form_icon"
                >
                  {isShowPassword ? <AiFillEye /> : <AiOutlineEyeInvisible />}
                </div>
                <div className="form__login_error">
                  {formik.touched.password && formik.errors.password}
                </div>
              </div>
            </div>
            <div class="mb-4">
              <label
                for="newpasswd"
                class="form-label changePassword__form_text"
              >
                Mật khẩu mới
              </label>
              <div className="form__login_in">
                <input
                  type={`${isShowNewPassword ? "text" : "password"}`}
                  class="form-control changePassword__form_input"
                  id="newpasswd"
                  value={formik.values.newpasswd}
                  onChange={formik.handleChange}
                  {...formik.getFieldProps("newpasswd")}
                />
                <div
                  onClick={() => setisShowNewPassword(!isShowNewPassword)}
                  className="changePassword__form_icon"
                >
                  {isShowNewPassword ? (
                    <AiFillEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </div>
                <div className="form__login_error">
                  {formik.touched.newpasswd && formik.errors.newpasswd}
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label
                for="confirmpasswd"
                class="form-label changePassword__form_text"
              >
                Xác nhận mật khẩu
              </label>
              <div className="form__login_in">
                <input
                  type={`${isShowConfPassword ? "text" : "password"}`}
                  class="form-control changePassword__form_input"
                  id="confirmpasswd"
                  value={formik.values.confirmpasswd}
                  onChange={formik.handleChange}
                  {...formik.getFieldProps("confirmpasswd")}
                />
                <div
                  onClick={() => setIsShowConfPassword(!isShowConfPassword)}
                  className="changePassword__form_icon"
                >
                  {isShowConfPassword ? (
                    <AiFillEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </div>
                <div className="form__login_error">
                  {formik.touched.confirmpasswd && formik.errors.confirmpasswd}
                </div>
              </div>
            </div>

            <button
              type="submit"
              class="btn button changePassword__form_button"
            >
              Cập nhật mật khẩu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default memo(UserChangePassword);
