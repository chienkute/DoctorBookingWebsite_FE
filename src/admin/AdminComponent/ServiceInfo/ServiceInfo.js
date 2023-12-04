import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ServiceInfo.scss";
import { MdCancel } from "react-icons/md";
import { IoIosSave } from "react-icons/io";

class ServiceInfoDialogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNew: true,
      data: {},
    };
  }

  componentDidMount() {
    const { data } = this.props;
    if (data) {
      this.setState({
        isNew: false,
        data: { ...data },
      });
    }
  }

  handleImageChange = (e, setFieldValue) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFieldValue("image", reader.result);
        this.setState({ image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  closeSID = () => {
    const { close } = this.props;
    close("SID");
  };

  render() {
    const initialValues = {
      name: this.state.data.name || "",
      description: this.state.data.description || "",
      image: this.state.data.image || "",
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
                          {this.state.image && (
                            <img src={this.state.image} alt="" />
                          )}
                        </div>
                        <div className="SIDAvtChangeInput">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              this.handleImageChange(e, setFieldValue)
                            }
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
                      <div className="SIDAccountLabel SIDLabel">
                        Tên dịch vụ
                      </div>
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
                  <button
                    id="CancelButton"
                    onClick={this.closeSID}
                    type="button"
                  >
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
  }
}

export default ServiceInfoDialogue;
