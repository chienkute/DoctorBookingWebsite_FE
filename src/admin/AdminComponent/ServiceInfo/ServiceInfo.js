import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ServiceInfo.scss";
import { MdCancel } from "react-icons/md";
import { IoIosSave } from "react-icons/io";

const ServiceInfoDialogue = (props) => {
  const [isNew, setIsNew] = useState(true);
  const [data, setData] = useState({});
  const [image, setImage] = useState("");

  useEffect(() => {
    const { data } = props;
    if (data) {
      setIsNew(false);
      setData({ ...data });
      setImage(data.image || "");
    }
  }, [props]);

  const handleImageChange = (e, setFieldValue) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFieldValue("image", reader.result);
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const closeSID = () => {
    const { close } = props;
    close("SID");
  };

  const initialValues = {
    name: data.name || "",
    description: data.description || "",
    image: data.image || "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Tên dịch vụ là bắt buộc"),
    description: Yup.string().required("Mô tả dịch vụ là bắt buộc"),
    image: Yup.mixed().required("Ảnh đại diện là bắt buộc"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="OverlayContainer">
      <div className="Close"></div>
      <div className="OverlayContent">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form className="ServiceInfoDialogueContainer">
              <header className="SIDHeader">
                <h3 className="bold">Thông tin dịch vụ</h3>
              </header>
              <div className="SIDContent">
                <div className="SIDCols">
                  <div className="SIDAvt SIDField">
                    <div className="SIDAvtLabel SIDLabel">Ảnh đại diện</div>
                    <div className="SIDAvtInput">
                      <div className="SIDAvtDisplay">
                        {image && <img src={image} alt="" />}
                      </div>
                      <div className="SIDAvtChangeInput">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(e, setFieldValue)}
                        />
                        <ErrorMessage
                          name="image"
                          component="div"
                          className="error"
                          style={{ color: "red" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="SIDAccount SIDField">
                    <div className="SIDAccountLabel SIDLabel">Tên dịch vụ</div>
                    <Field type="text" id="SIDAccountInput" name="name" />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                      style={{ color: "red" }}
                    />
                  </div>
                  <div className="SIDDescription SIDField">
                    <div className="SIDDescriptionLabel SIDLabel">
                      Mô tả dịch vụ
                    </div>
                    <Field
                      as="textarea"
                      id="SIDDescriptioInput"
                      rows={5}
                      name="description"
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="error"
                      style={{ color: "red" }}
                    />
                  </div>
                </div>
              </div>
              <div className="SIDAction">
                <button id="CancelButton" onClick={closeSID} type="button">
                  <MdCancel /> Huỷ
                </button>
                <button id="SaveButton" type="submit" disabled={isSubmitting}>
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

export default ServiceInfoDialogue;
