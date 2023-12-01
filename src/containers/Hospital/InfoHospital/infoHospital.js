import { memo, useContext, useEffect, useRef, useState } from "react";
import "./infoHospital.scss";
import avatar from "../../../assets/avatar.jpg";
import upload from "../../../assets/upload 1.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { UpdateContext } from "context/UpdateContext";
import { getHospitalByID } from "service/UserService";
import { useParams } from "react-router-dom";
import { editHospital } from "service/HospitalService";
import { toast } from "react-toastify";
const InfoHospital = () => {
  const { update, setUpdate } = useContext(UpdateContext);
  const { id } = useParams();
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(true);
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");
  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ];
  const getInfoHospital = async () => {
    let res = await getHospitalByID(id);
    if (res && res?.account) {
      setName(res?.name);
      setAdress(res?.address);
      setPhone(res?.phone);
      setEmail(res?.email);
      setInfo(res?.info);
    }
  };
  useEffect(() => {
    getInfoHospital();
  }, []);
  useEffect(() => {
    getInfoHospital();
  }, [update]);
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleCallAPI = () => {
    setUpdate(!update);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: name,
      address: adress,
      phone: phone,
      email: email,
      info: info,
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
    onSubmit: async (values) => {
      let res = await editHospital(
        id,
        values.name,
        values.email,
        values.address,
        "Bệnh viện tư nhân",
      );
      if (res) {
        console.log(res);
        toast.success("Sửa thành công");
      } else {
        toast.error("Sửa thất bại");
      }
    },
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
      <form onSubmit={formik.handleSubmit}>
        <div className="information__content">
          <div className="information__content1">
            <div className="information__name">
              <label htmlFor="">Tên bệnh viện</label>
              <input
                type="text"
                id="name"
                placeholder="Nhập tên bệnh viện"
                class="form-control"
                value={formik.values.name}
                defaultValue={formik.values.name}
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
              {/* <ReactQuill
              value={value}
              onChange={setValue}
              placeholder={"Mô tả sơ qua thông tin bệnh viện bạn ...."}
              readOnly={edit ? true : false}
            /> */}
              <textarea
                class="form-control"
                id="info"
                rows="9"
                value={formik.values.info}
                onChange={formik.handleChange}
                disabled={edit ? true : false}
                {...formik.getFieldProps("info")}
                autoComplete="off"
              ></textarea>
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
                // modules={module}
                theme="snow"
                value={value}
                onChange={setValue}
                // defaultValue={formik.values.info}
                placeholder={"Thêm chuyên khoa của bạn ....."}
                readOnly={edit ? true : false}
                // {...formik.getFieldProps("info")}
              />
            </div>
          </div>
        </div>
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
                handleCallAPI();
              }}
            >
              Hủy
            </button>
            <button
              className="btn button"
              type="submit"
              onClick={() => {
                setEdit(true);
              }}
            >
              Lưu
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
export default memo(InfoHospital);
