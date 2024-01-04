import { memo, useContext, useEffect, useRef, useState } from "react";
import "./infoHospital.scss";
import avatar from "../../../assets/avatar.jpg";
import upload from "../../../assets/upload 1.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import "react-quill/dist/quill.snow.css";
// import ReactQuill from "react-quill";
import { UpdateContext } from "context/UpdateContext";
import { editAvatar, getHospitalByID } from "service/UserService";
import { useParams } from "react-router-dom";
import { editHospital, editHospitalUserName } from "service/HospitalService";
import { toast } from "react-toastify";
const InfoHospital = () => {
  const { update, setUpdate } = useContext(UpdateContext);
  const { id } = useParams();
  const inputRef = useRef(null);
  // const [value, setValue] = useState("");
  const [edit, setEdit] = useState(true);
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState("");
  console.log(image);
  const [imageUpdate, setImageUpdate] = useState([]);
  const [idAccount, setIdAccount] = useState("");
  const [imageOld, setImageOld] = useState("");
  const [formData, setFormData] = useState(new FormData());
  const [urlImage, setUrlImage] = useState("");
  const toDataURL = (url) =>
    fetch(urlImage)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          }),
      );
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  const changeFileObejct = () => {
    toDataURL(urlImage).then((dataUrl) => {
      var fileData = dataURLtoFile(dataUrl, "icon.jpg");
      setImageUpdate(fileData);
    });
  };
  useEffect(() => {
    changeFileObejct();
  }, [urlImage]);
  const getInfoHospital = async () => {
    let res = await getHospitalByID(id);
    if (res && res?.account) {
      console.log(res);
      setName(res?.name);
      setAdress(res?.address);
      setUsername(res?.account?.username);
      setEmail(res?.email);
      setInfo(res?.info);
      setIdAccount(res?.account?.id);
      setImageOld(res?.account?.avatar);
      setUrlImage(res?.account?.avatar);
    }
  };
  useEffect(() => {
    getInfoHospital();
  }, []);
  const editAvatarUser = async () => {
    let res = await editAvatar(idAccount, formData);
    if (res) {
      console.log(res);
    }
  };
  useEffect(() => {
    if (imageUpdate !== null) {
      const updatedFormData = new FormData();
      updatedFormData.append("avatar", imageUpdate);
      setFormData(updatedFormData);
    }
  }, [imageUpdate]);
  useEffect(() => {
    getInfoHospital();
  }, [update]);
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    setImageUpdate(event.target.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  // const handleCallAPI = () => {
  //   setUpdate(!update);
  // };
  const editInfo = async (username) => {
    let res = await editHospitalUserName(username, idAccount);
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
      email: email,
      info: info,
      username: username,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Bạn chưa nhập tên bệnh viện"),
      address: Yup.string().required("Bạn chưa nhập địa chỉ"),
      email: Yup.string()
        .required("Bạn chưa nhập email")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng nhập đúng địa chỉ email",
        ),
      info: Yup.string().required("Bạn chưa nhập thông tin"),
      username: Yup.string().required("Bạn chưa nhập tên tài khoản"),
    }),
    onSubmit: (values) => {
      const editHospitalInfo = async () => {
        let res = await editHospital(
          id,
          values.name,
          values.email,
          values.address,
          values.info,
        );
        if (res) {
          console.log(res);
          setEdit(true);
          toast.success("Sửa thành công");
        } else {
          toast.error("Sửa thất bại");
        }
      };
      editHospitalInfo();
      editAvatarUser();
      editInfo(values.username);
    },
  });
  const handleClick = () => {
    getInfoHospital();
    formik.setValues({
      name: name,
      address: adress,
      email: email,
      info: info,
      username: username,
    });
  };
  return (
    <div className="information">
      <h1>Hồ sơ cá nhân</h1>
      <div className="information__hospital_header">
        <div className="information__header_content">
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
          </div>
        </div>
        {/* <div className="information__header_content">
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
        </div> */}
      </div>
      <form>
        <div className="information__content">
          <div className="information__content1">
            <div className="information__name">
              <label htmlFor="">
                Tên bệnh viện <span className="validate">*</span>
              </label>
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
              <label htmlFor="">
                Địa chỉ <span className="validate">*</span>
              </label>
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
              <label htmlFor="">
                Thông tin cơ bản <span className="validate">*</span>
              </label>
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
              <label htmlFor="">
                Tài khoản <span className="validate">*</span>
              </label>
              <input
                type="text"
                id="username"
                placeholder="Số điện thoại"
                class="form-control"
                value={formik.values.username}
                onChange={formik.handleChange}
                disabled={edit ? true : false}
                {...formik.getFieldProps("username")}
              />
              <div className="form__error">
                {formik.touched.username && formik.errors.username}
              </div>
            </div>
            <div className="information__name">
              <label htmlFor="">
                Email <span className="validate">*</span>
              </label>
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
                handleClick();
              }}
            >
              Hủy
            </button>
            <button
              className="btn button"
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
export default memo(InfoHospital);
