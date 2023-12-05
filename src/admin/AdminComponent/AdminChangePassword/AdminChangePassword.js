import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./AdminChangePassword.scss";
class AdminChangePasswordDialogue extends React.Component {
  closeCPD = () => {
    const { close } = this.props;
    close("CPD");
  };
  render() {
    const initialValues = {
      newPassword: "",
      confirmPassword: "",
    };
    const validationSchema = Yup.object().shape({
      newPassword: Yup.string().required("Mật khẩu mới là bắt buộc"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Xác nhận mật khẩu không khớp")
        .required("Xác nhận mật khẩu là bắt buộc"),
    });
    const onSubmit = (values) => {
      console.log(values);
    };
    return (
      <div className="OverlayContainer">
        <div className="Close"></div>
        <div className="OverlayContent">
          <div className="AdminChangePasswordDialogueContainer">
            <header className="ACPDHeader">
              <h3 className="bold">Đổi mật khẩu</h3>
            </header>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="ACPDContent">
                  <div className="ACPDCols">
                    <div className="ACPDNewPassword ACPDField">
                      <div className="ACPDNewPasswordLabel ACPDLabel">
                        Mật khẩu mới
                      </div>
                      <Field
                        type="password"
                        id="ACPDNewPasswordInput"
                        name="newPassword"
                      />
                      <ErrorMessage
                        name="newPassword"
                        component="div"
                        className="error"
                        style={{ color: "red" }}
                      />
                    </div>
                  </div>
                  <div className="ACPDCols">
                    <div className="ACPDNewPasswordConfirm ACPDField">
                      <div className="ACPDNewPasswordConfirmLabel ACPDLabel">
                        Xác nhận mật khẩu mới
                      </div>
                      <Field
                        type="password"
                        id="ACPDNewPasswordConfirmInput"
                        name="confirmPassword"
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="error"
                        style={{ color: "red" }}
                      />
                    </div>
                  </div>
                  <div className="ACPDActions">
                    <div className="ACPDWarning bold">
                      Bạn chắc chắn muốn đổi mật khẩu chứ?{" "}
                    </div>
                    <div className="ACPDButtons">
                      <button
                        id="ACPDCancelButton"
                        type="button"
                        onClick={this.closeCPD}
                      >
                        Huỷ
                      </button>
                      <button
                        id="ACPDConfirmButton"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Xác nhận
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminChangePasswordDialogue;
