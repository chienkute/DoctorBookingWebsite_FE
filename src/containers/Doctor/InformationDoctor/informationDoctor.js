import { memo, useEffect, useRef, useState } from "react";
import "./informationDoctor.scss";
import avatar from "../../../assets/avatar.jpg";
import upload from "../../../assets/upload 1.svg";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { editAvatar, getDoctorByID } from "service/UserService";
import { Form } from "react-bootstrap";
import { editDoctorInformation, editUsername } from "service/DoctorService";
const InformationDoctor = () => {
  const { id } = useParams();
  const inputRef = useRef(null);
  const [edit, setOpenEdit] = useState(true);
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [year, setYear] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [imageUpdate, setImageUpdate] = useState([]);
  const [idAccount, setIdAccount] = useState("");
  const [imageOld, setImageOld] = useState("");
  const [formData, setFormData] = useState(new FormData());
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    setImageUpdate(event.target.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  const getInfoDoctor = async () => {
    let res = await getDoctorByID(id);
    if (res) {
      console.log(res);
      setName(res?.name);
      setPhone(res?.phone);
      setAdress(res?.address);
      setYear(res?.years_of_experience);
      setBirthday(res?.birthday);
      setGender(res?.gender);
      setIdAccount(res?.account?.id);
      setImageOld(res?.account?.avatar);
      setEmail(res?.account?.email);
      setUsername(res?.account?.username);
    }
  };
  useEffect(() => {
    getInfoDoctor();
  }, []);
  useEffect(() => {
    if (imageUpdate !== null) {
      const updatedFormData = new FormData();
      updatedFormData.append("avatar", imageUpdate);
      setFormData(updatedFormData);
    }
  }, [imageUpdate]);
  const editAvatarUser = async () => {
    let res = await editAvatar(idAccount, formData);
    if (res) {
      console.log(res);
    }
  };
  const editInfo = async (username, email) => {
    let res = await editUsername(username, email, idAccount);
    if (res) {
      console.log(res);
    } else {
      toast.error("Sửa thất bại");
    }
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: name,
      address: adress,
      phone: phone,
      year: year,
      birthday: birthday,
      gender: gender,
      email: email,
      username: username,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Bạn chưa nhập tên bệnh viện"),
      phone: Yup.string()
        .required("Bạn chưa nhập số điện thoại")
        .min(9, "Số điện thoại ít nhất phải hơn 9 chữ số"),
      address: Yup.string().required("Bạn chưa nhập địa chỉ"),
      year: Yup.string().required("Bạn chưa nhập số năm làm việc"),
      username: Yup.string().required("Bạn chưa nhập tên tài khoản"),
      email: Yup.string()
        .required("Bạn chưa nhập email")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng nhập đúng địa chỉ email",
        ),
    }),
    onSubmit: (values) => {
      const edit = async () => {
        let res = await editDoctorInformation(
          id,
          values.name,
          values.phone,
          values.address,
          values.year,
          values.birthday,
          values.gender,
        );
        if (res) {
          console.log(res);
          setOpenEdit(true);
          toast.success("Sửa thành công");
        } else {
          toast.error("Sửa thất bại");
        }
      };
      edit();
      editAvatarUser();
      editInfo(values.username, values.email);
    },
  });
  const handleClick = () => {
    getInfoDoctor();
    formik.setValues({
      name: name,
      address: adress,
      phone: phone,
      year: year,
      birthday: birthday,
      gender: gender,
      email: email,
      username: username,
    });
  };
  return (
    <div className="information">
      <h1>Hồ sơ cá nhân</h1>
      <div className="information__header">
        <div className="information__avatar">
          {image ? (
            <img src={image} alt="BlogImg" className="avatarAfter"></img>
          ) : imageOld ? (
            <img src={imageOld} alt="BlogImg" className="avatarBefore"></img>
          ) : (
            <img src={avatar} alt="BlogImg" className="avatarBefore"></img>
          )}
        </div>
        <div className="information__upload">
          <div style={{ fontSize: "18px" }}>Ảnh đại diện</div>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={inputRef}
            onChange={handleImageChange}
          />
          {edit ? (
            <button className="btn button">
              <img src={upload} alt="" />
              Tải ảnh lên
            </button>
          ) : (
            <button className="btn button" onClick={handleImageClick}>
              <img src={upload} alt="" />
              Tải ảnh lên
            </button>
          )}
          <div>Cho phép tệp loại JPG, GIF hoặc PNG. Kích cỡ 2MB</div>
        </div>
      </div>
      <form>
        <div className="information__content">
          <div className="information__content1">
            <div className="information__name">
              <label htmlFor="">
                Tài khoản <span className="validate">*</span>
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={formik.values.username}
                onChange={formik.handleChange}
                autoComplete="off"
                disabled={edit ? true : false}
                {...formik.getFieldProps("username")}
              />
              <div className="form__error">
                {formik.touched.username && formik.errors.username}
              </div>
            </div>
            <div className="information__name">
              <label htmlFor="">
                Tên bác sĩ <span className="validate">*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Nhập tên bác sĩ"
                className="form-control"
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
              <label htmlFor="">
                Địa chỉ <span className="validate">*</span>
              </label>
              <input
                type="text"
                id="address"
                placeholder="Địa chỉ bác sĩ"
                className="form-control"
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
              <label htmlFor="">
                Ngày sinh <span className="validate">*</span>
              </label>
              <div className="doctor__info_input">
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  disabled={edit ? true : false}
                  value={formik.values.birthday}
                  onChange={formik.handleChange}
                  {...formik.getFieldProps("birthday")}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <div className="information__content2">
            <div className="information__name">
              <label htmlFor="">
                Email <span className="validate">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={formik.values.email}
                disabled={edit ? true : false}
                autoComplete="off"
                onChange={formik.handleChange}
                {...formik.getFieldProps("email")}
              />
              <div className="form__error">
                {formik.touched.email && formik.errors.email}
              </div>
            </div>
            <div className="information__name">
              <label htmlFor="">
                Số điện thoại <span className="validate">*</span>
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Số điện thoại"
                className="form-control"
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
              <label htmlFor="">
                Giới tính <span className="validate">*</span>
              </label>
              <Form.Select
                aria-label="Default select example"
                className="form__select"
                id="gender"
                name="gender"
                disabled={edit ? true : false}
                value={formik.values.gender}
                onChange={formik.handleChange}
                {...formik.getFieldProps("gender")}
              >
                <option value="true">Nam</option>
                <option value="false">Nữ</option>
                <option value="3">Khác</option>
              </Form.Select>
            </div>
            <div className="information__name" style={{ marginTop: "12px" }}>
              <label htmlFor="">
                Số năm kinh nghiệm <span className="validate">*</span>
              </label>
              <input
                type="number"
                id="year"
                placeholder="Nhập số năm kinh nghiệm"
                className="form-control"
                value={formik.values.year}
                disabled={edit ? true : false}
                onChange={formik.handleChange}
                {...formik.getFieldProps("year")}
              />
              <div className="form__error">
                {formik.touched.year && formik.errors.year}
              </div>
            </div>
          </div>
        </div>
        {edit ? (
          <div className="information__button">
            <button
              className="btn button"
              type="button"
              onClick={() => {
                setOpenEdit(false);
              }}
            >
              Sửa
            </button>
          </div>
        ) : (
          <div className="information__button">
            <button
              className="btn"
              type="button"
              onClick={() => {
                setOpenEdit(true);
                handleClick();
              }}
            >
              Hủy
            </button>
            <button
              className="btn button"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                formik.handleSubmit();
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
export default memo(InformationDoctor);
