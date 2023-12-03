import { memo, useContext, useEffect, useRef, useState } from "react";
import "./informationDoctor.scss";
import avatar from "../../../assets/avatar.jpg";
import upload from "../../../assets/upload 1.svg";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UpdateContext } from "context/UpdateContext";
import { getDoctorByID } from "service/UserService";
import { Form } from "react-bootstrap";
import { editDoctorInformation } from "service/DoctorService";

const InformationDoctor = () => {
  const { id } = useParams();
  const { update, setUpdate } = useContext(UpdateContext);
  const handleCallAPI = () => {
    setUpdate(!update);
  };
  const inputRef = useRef(null);
  const [edit, setEdit] = useState(true);
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [year, setYear] = useState("");
  const [birthday, setBirthday] = useState("");
  // const [email, setEmail] = useState("");
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const getInfoDoctor = async () => {
    let res = await getDoctorByID(id);
    if (res) {
      setName(res?.name);
      setPhone(res?.phone);
      setAdress(res?.address);
      setYear(res?.years_of_experience);
      setBirthday(res?.birthday);
      setGender(res?.gender);
    }
  };
  useEffect(() => {
    getInfoDoctor();
  }, []);
  useEffect(() => {
    getInfoDoctor();
  }, [update]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: name,
      address: adress,
      phone: phone,
      // email: email,
      year: year,
      birthday: birthday,
      gender: gender,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Bạn chưa nhập tên bệnh viện"),
      phone: Yup.string()
        .required("Bạn chưa nhập số điện thoại")
        .min(9, "Số điện thoại ít nhất phải hơn 9 chữ số"),
      address: Yup.string().required("Bạn chưa nhập địa chỉ"),
      year: Yup.string().required("Bạn chưa nhập số năm làm việc"),
      // email: Yup.string()
      //   .required("Bạn chưa nhập email")
      //   .matches(
      //     /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      //     "Vui lòng nhập đúng địa chỉ email",
      //   ),
    }),
    onSubmit: (values) => {
      const Edit = async () => {
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
          toast.success("Sửa thành công");
        } else {
          toast.error("Sửa thất bại");
        }
      };
      Edit();
    },
  });
  return (
    <div className="information">
      <h1>Hồ sơ cá nhân</h1>
      <div className="information__header">
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
          <div>Cho phép tệp loại JPG, GIF hoặc PNG. Kích cỡ 2MB</div>
        </div>
      </div>
      <form>
        <div className="information__content">
          <div className="information__content1">
            <div className="information__name">
              <label htmlFor="">Tên bác sĩ</label>
              <input
                type="text"
                id="name"
                placeholder="Nhập tên bác sĩ"
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
                placeholder="Địa chỉ bác sĩ"
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
              <label htmlFor="">Ngày sinh</label>
              <div className="doctor__info_input">
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  // defaultValue={startDate}
                  // onChange={(e) => {
                  //   setStartDate(e.target.value);
                  // }}
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
            {/* <div className="information__name">
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
            </div> */}
            <div className="information__name">
              <label htmlFor="">Giới tính</label>
              <Form.Select
                aria-label="Default select example"
                className="form__select"
                id="gender"
                name="gender"
                disabled={edit ? true : false}
                // onChange={(e) => {
                //   setGender(e.target.value);
                // }}
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
              <label htmlFor="">Số năm kinh nghiệm</label>
              <input
                type="number"
                id="year"
                placeholder="Nhập số năm kinh nghiệm"
                class="form-control"
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
                setEdit(false);
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
