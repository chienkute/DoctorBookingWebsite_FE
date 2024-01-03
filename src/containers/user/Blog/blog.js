import { memo, useEffect, useState } from "react";
import "../../user/Blog/blog.scss";
import { BiSolidCategory } from "react-icons/bi";
import doctorAvt from "../../../assets/doctor/tat.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getBlogById } from "service/UserService";
import { MdKeyboardArrowRight } from "react-icons/md";
const Blog = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [specialty, setSpecialty] = useState([]);
  const navigate = useNavigate();
  const getContentBlog = async () => {
    let res = await getBlogById(id);
    if (res) {
      console.log(res);
      setBlog(res);
      setDoctor(res?.id_doctor);
      setContent(res?.content);
      setSpecialty(res?.id_doctor?.specialties);
    }
  };
  useEffect(() => {
    getContentBlog();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {loading && (
        <div className="lds lds-care">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <div className="blog">
        <div
          className="categories__header d-flex align-items-center"
          style={{ transform: "translateX(-31px)" }}
        >
          <div className="categories__icon_header">
            <BiSolidCategory></BiSolidCategory>
          </div>
          <Link
            to={`/category/${blog?.id_category?.id}/${blog?.id_category?.name}`}
            className="color-black fs-normal-text"
          >
            {blog?.id_category?.name}
          </Link>
          <div
            className="confirm__header_head_icon"
            style={{ transform: "translateX(-10px)" }}
          >
            <MdKeyboardArrowRight></MdKeyboardArrowRight>
          </div>
          <Link
            to={`/blog/${blog?.id}`}
            className="color-black fs-normal-text"
            style={{ transform: "translateX(-10px)" }}
          >
            {blog?.title}
          </Link>
        </div>
        <div className="blog__main">
          <div className="blog__main_content">
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className="blog__main_content_main"
            />
          </div>
          <div className="blog__main_author">
            <div className="blog__main_avatar">
              <img src={doctor?.account?.avatar || doctorAvt} alt="" />
            </div>
            <p className="blog__main_text">Tác giả :</p>
            <p className="blog__main_name">Bác sĩ {doctor?.name || "--"}</p>
            <p className="blog__main_text">
              {specialty.length > 0 &&
                specialty.map((item, index) => {
                  return <span key={index}>{item?.specialty?.name} - </span>;
                })}
              <span>
                {""} {doctor?.hospital?.name}
              </span>
            </p>
            <p className="blog__main_text">
              Ngày cập nhật : {blog?.created_at}
            </p>
            <button
              className="btn button"
              onClick={() => {
                navigate(`/care/doctor/${doctor?.id}`);
              }}
            >
              Đặt lịch ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Blog);
