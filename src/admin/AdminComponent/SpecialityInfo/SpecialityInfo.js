import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SpecialityInfo.scss";
import { IoIosSave } from "react-icons/io";
import { MdCancel } from "react-icons/md";

const SpecialityInfoDialogue = (props) => {
  const [isNew, setIsNew] = useState(true);
  const [data, setData] = useState({});
  const [image, setImage] = useState(null);

  useEffect(() => {
    const { data } = props;
    if (data) {
      setIsNew(false);
      setData({ ...data });
      setImage(data.image || "");
    }
  }, [props]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const closeSpID = () => {
    const { close } = props;
    close("SpID");
  };

  const initialValues = {
    name: data.name || "",
    image: data.image || null,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Tên chuyên khoa là bắt buộc"),
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
            <Form className="SpecialityInfoDialogueContainer">
              <header className="SpIDHeader">
                <h3 className="bold">
                  {isNew ? "Thêm chuyên khoa" : "Sửa đổi chuyên khoa"}
                </h3>
              </header>
              <div className="SpIDContent">
                <div className="SpIDCols">
                  <div className="SpIDAvt SpIDField">
                    <div className="SpIDAvtLabel SpIDLabel">Ảnh đại diện</div>
                    <div className="SpIDAvtInput">
                      <div className="SpIDAvtDisplay">
                        {image && <img src={image} alt=""></img>}
                      </div>
                      <div className="SpIDAvtChangeInput">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            setFieldValue("image", e.currentTarget.files);
                            handleImageChange(e);
                          }}
                        />
                      </div>
                    </div>
                    <ErrorMessage
                      name="image"
                      component="div"
                      className="error"
                      style={{ color: "red" }}
                    />
                  </div>
                  <div className="SpIDAccount SpIDField">
                    <div className="SpIDAccountLabel SpIDLabel">
                      Tên chuyên khoa
                    </div>
                    <Field
                      type="text"
                      id="SpIDAccountInput"
                      name="name"
                    ></Field>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                      style={{ color: "red" }}
                    />
                  </div>
                </div>
              </div>
              <div className="SpIDAction">
                <button id="CancelButton" type="button" onClick={closeSpID}>
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

export default SpecialityInfoDialogue;
