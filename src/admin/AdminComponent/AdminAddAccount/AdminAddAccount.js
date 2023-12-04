import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./AdminAddAccount.scss";

const AdminAddAccountDialogue = (props) => {
  const getAccountType = () => {
    switch (props.accType) {
      case 0:
        return "Bác sĩ";
      case 1:
        return "Cơ sở KCB";
      default:
        break;
    }
  };

  const closeAAD = () => {
    const { close } = props;
    close("AAD");
  };

  const initialValues = {
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Tên tài khoản không được để trống"),
    password: Yup.string().required("Mật khẩu không được để trống"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp")
      .required("Xác nhận mật khẩu không được để trống"),
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Email không được để trống"),
  });

  const onSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <div className="OverlayContainer">
      <div className="Close"></div>
      <div className="OverlayContent">
        <div className="AdminAddAccountDialogueContainer">
          <div className="AADHeader">
            <h3 className="bold">Đăng kí tài khoản mới</h3>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="AADContent">
              <div className="AADField AADType">
                <div className="AADTypeLabel">Loại tài khoản</div>
                <input
                  type="text"
                  id="AADTypeInput"
                  disabled
                  value={getAccountType()}
                ></input>
              </div>
              <div className="AADField AADUsername">
                <div className="AADUsernameLabel">Tên tài khoản</div>
                <Field type="text" id="AADUsernameInput" name="username" />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error"
                  style={{ color: "red" }}
                />
              </div>
              <div className="AADField AADPassword">
                <div className="AADPasswordLabel">Mật khẩu</div>
                <Field type="password" id="AADPasswordInput" name="password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                  style={{ color: "red" }}
                />
              </div>
              <div className="AADField AADPasswordConfirm">
                <div className="AADPasswordConfirmLabel">Xác nhận mật khẩu</div>
                <Field
                  type="password"
                  id="AADPasswordConfirmInput"
                  name="passwordConfirm"
                />
                <ErrorMessage
                  name="passwordConfirm"
                  component="div"
                  className="error"
                  style={{ color: "red" }}
                />
              </div>
              <div className="AADField AADEmail">
                <div className="AADEmailLabel">Email</div>
                <Field type="email" id="AADEmailInput" name="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error"
                  style={{ color: "red" }}
                />
              </div>
              <div className="AADActions">
                <div className="AADButtons">
                  <button id="AADCancelButton" onClick={closeAAD}>
                    Huỷ
                  </button>
                  <button type="submit" id="AADConfirmButton">
                    Xác nhận
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AdminAddAccountDialogue;
