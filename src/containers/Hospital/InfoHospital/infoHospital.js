import { memo, useRef, useState } from "react";
import "./infoHospital.scss";
import avatar from "../../../assets/avatar.jpg";
import upload from "../../../assets/upload 1.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
const InfoHospital = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(true);
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Bạn chưa nhập tên bệnh viện"),
      phone: Yup.string()
        .required("Bạn chưa nhập số điện thoại")
        .min(9, "Số điện thoại ít nhất phải hơn 9 chữ số"),
      address: Yup.string().required("Bạn chưa nhập địa chỉ"),
      email: Yup.string()
        .required("Bạn chưa nhập email")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng nhập đúng địa chỉ email",
        ),
    }),
    onSubmit: async (values) => {},
  });
  return (
    <div className="information">
      <h1>Hồ sơ cá nhân</h1>
      <div className="information__header">
        <div className="information__header_content">
          <div className="information__avatar">
            <img src={avatar} alt="" />
          </div>
          <div className="information__upload">
            <div style={{ fontSize: "18px" }}>Ảnh đại diện</div>
            <input type="file" style={{ display: "none" }} ref={inputRef} />
            <button className="btn button" onClick={handleImageClick}>
              <img src={upload} alt="" />
              Tải ảnh lên
            </button>
          </div>
        </div>
        <div className="information__header_content">
          <div className="information__page">
            <img src={avatar} alt="" />
          </div>
          <div className="information__upload">
            <div style={{ fontSize: "18px" }}>Ảnh bìa</div>
            <input type="file" style={{ display: "none" }} ref={inputRef} />
            <button className="btn button" onClick={handleImageClick}>
              <img src={upload} alt="" />
              Tải ảnh lên
            </button>
          </div>
        </div>
      </div>
      <form className="information__content">
        <div className="information__content1">
          <div className="information__name">
            <label htmlFor="">Tên bệnh viện</label>
            <input
              type="text"
              id="name"
              placeholder="Nhập tên bệnh viện"
              class="form-control"
              value={formik.values.name}
              onChange={formik.handleChange}
              disabled={edit ? true : false}
              {...formik.getFieldProps("name")}
              autoComplete="off"
            />
            <div className="form__error">
              {formik.touched.name && formik.errors.name}
            </div>
          </div>
          <div className="information__name">
            <label htmlFor="">Địa chỉ</label>
            <input
              type="text"
              id="address"
              placeholder="Địa chỉ bệnh viện"
              class="form-control"
              value={formik.values.address}
              onChange={formik.handleChange}
              disabled={edit ? true : false}
              {...formik.getFieldProps("address")}
              autoComplete="off"
            />
            <div className="form__error">
              {formik.touched.address && formik.errors.address}
            </div>
          </div>
          <div className="information__name">
            <label htmlFor="">Thông tin cơ bản</label>
            <ReactQuill
              value={value}
              onChange={setValue}
              placeholder={"Mô tả sơ qua thông tin bệnh viện bạn ...."}
              readOnly={edit ? true : false}
            />
          </div>
        </div>
        <div className="information__content2">
          <div className="information__name">
            <label htmlFor="">Số điện thoại</label>
            <input
              type="text"
              id="phone"
              placeholder="Số điện thoại"
              class="form-control"
              value={formik.values.phone}
              disabled={edit ? true : false}
              onChange={formik.handleChange}
              {...formik.getFieldProps("phone")}
            />
            <div className="form__error">
              {formik.touched.phone && formik.errors.phone}
            </div>
          </div>
          <div className="information__name">
            <label htmlFor="">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Nhập email của bạn"
              class="form-control"
              value={formik.values.email}
              onChange={formik.handleChange}
              disabled={edit ? true : false}
              {...formik.getFieldProps("email")}
              autoComplete="off"
            />
            <div className="form__error">
              {formik.touched.email && formik.errors.email}
            </div>
          </div>
          <div className="information__name">
            <label htmlFor="">Chuyên khoa</label>
            <ReactQuill
              value={value}
              onChange={setValue}
              placeholder={"Thêm chuyên khoa của bạn ....."}
              readOnly={edit ? true : false}
            />
          </div>
        </div>
      </form>
      {edit ? (
        <div className="information__button">
          <button
            className="btn button"
            onClick={() => {
              setEdit(false);
            }}
          >
            Sửa
          </button>
        </div>
      ) : (
        <div className="information__button">
          <button
            className="btn "
            onClick={() => {
              setEdit(true);
            }}
          >
            Hủy
          </button>
          <button
            className="btn button"
            onClick={() => {
              setEdit(true);
            }}
          >
            Lưu
          </button>
        </div>
      )}
    </div>
  );
};
export default memo(InfoHospital);
