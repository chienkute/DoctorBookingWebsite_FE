import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./TopicInfo.scss";
import { IoIosSave } from "react-icons/io";
import { MdCancel } from "react-icons/md";

const TopicInfoDialogue = ({ data, close }) => {
  const initialValues = {
    name: data ? data.name || "" : "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Tên chuyên mục là bắt buộc"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const closeTID = () => {
    close("TID");
  };

  useEffect(() => {
    if (data) {
      initialValues.name = data.name || "";
    }
  }, [data]);

  return (
    <div className="OverlayContainer">
      <div className="Close"></div>
      <div className="OverlayContent">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="TopicInfoDialogueContainer">
              <header className="TIDHeader">
                <h3 className="bold">
                  {data ? "Sửa đổi chuyên mục" : "Thêm chuyên mục"}
                </h3>
              </header>
              <div className="TIDContent">
                <div className="TIDCols">
                  <div className="TIDAccount TIDField">
                    <div className="TIDAccountLabel TIDLabel">
                      Tên chuyên mục
                    </div>
                    <Field type="text" id="TIDAccountInput" name="name" />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                      style={{ color: "red" }}
                    />
                  </div>
                </div>
              </div>
              <div className="TIDAction">
                <button id="CancelButton" type="button" onClick={closeTID}>
                  <MdCancel /> Huỷ
                </button>
                <button
                  className="button"
                  id="SaveButton"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <IoIosSave /> Lưu
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default TopicInfoDialogue;
