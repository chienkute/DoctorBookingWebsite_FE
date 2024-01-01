import { memo, useContext, useEffect, useState } from "react";
import "../Category/category.scss";
import { BiSolidCategory } from "react-icons/bi";
import chuyenmucImages from "../../../assets/chuyenmuc/tooth1.png";
import "../HomePage/NewsLarge/NewsLarge.scss";
import doctorImg from "../../../assets/doctor/tat.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "../Category/CategoryListStyle.scss";
import ReactPaginate from "react-paginate";
import { Link, useParams } from "react-router-dom";
import {
  fecthAllDoctor,
  fetchAllCategories,
  getBlogByIdCategory,
  getCategoryById,
} from "service/UserService";
import { MdKeyboardArrowRight } from "react-icons/md";
import { UpdateContext } from "context/UpdateContext";
import ItemLarge from "../HomePage/NewsLarge/ItemLarge";
import ItemSmall from "../HomePage/NewsLarge/ItemSmall";
import NewsSmall from "../HomePage/NewsSmall/NewsSmall";
const Category = () => {
  const { id, name } = useParams();
  const [blog, setBlog] = useState([]);
  const { update, setUpdate } = useContext(UpdateContext);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [categoryy, setCategory] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const getService = async () => {
    let res = await fetchAllCategories(100, 0);
    if (res) {
      setCategories(res?.results);
    }
  };
  const getCategory = async () => {
    let res = await getCategoryById(id);
    if (res) {
      console.log(res);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      setCategory(res);
    }
  };
  const getBlog = async () => {
    let res = await getBlogByIdCategory(id);
    if (res?.results) {
      console.log(res);
      setBlog(res.results);
    }
  };
  const getDoctor = async () => {
    let res = await fecthAllDoctor();
    if (res) {
      setDoctor(res?.results);
    }
  };
  useEffect(() => {
    getDoctor();
    getBlog();
    getService();
    getCategory();
  // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    getCategory();
    getBlog();
  // eslint-disable-next-line
  }, [update]);
  return (
    <div>
      {loading ? (
        <div className="lds lds-doctor">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="category">
          <div className="category__header d-flex align-items-center">
            <div className="category__icon_header">
              <BiSolidCategory></BiSolidCategory>
            </div>
            <a href="/categories" className="color-black fs-normal-text">
              Tất cả chuyên mục
            </a>
            <div className="category__text">
              <MdKeyboardArrowRight></MdKeyboardArrowRight>
            </div>
            <Link to={`/category/${id}`} className="category__text2">
              {name}
            </Link>
          </div>
          <div className="category__color"></div>
          <div className="caregory__banner">
            <div className="category__banner_header">
              <div className="category__banner_heading">
                <div className="category__banner_image_header">
                  <img src={categoryy?.icon || chuyenmucImages} alt="" />
                </div>
                <h1>{categoryy?.name}</h1>
              </div>
              <div className="category__banner_description">
                <p>{categoryy?.describe || "Thông tin cơ bản về chuyên mục"}</p>
              </div>
            </div>
            <div className="category__blog">
              <h3>Kiến thức chung</h3>
              <div className="category__blog_news">
                <div className="NewsLarge2ItemsContainer">
                  <ul className="clear NewsLarge2Items flex-center">
                    {blog &&
                      blog.slice(0, 2).map((item, index) => {
                        return (
                          <ItemLarge
                            key={index}
                            title={item?.title}
                            id_blog={item?.id}
                            category={item?.id_category?.name}
                            id_category={item?.id_category?.id}
                            date={item?.created_at}
                            doctor={item?.id_doctor?.name}
                            id_doctor={item?.id_doctor?.id}
                            content={item?.content}
                            image={item?.picture}
                            avatar={item?.id_doctor?.account?.avatar}
                          ></ItemLarge>
                        );
                      })}
                  </ul>
                </div>
                <div className="NewsLarge3ItemsContainer">
                  <ul className="clear NewsLarge3Items flex-center">
                    {blog &&
                      blog.slice(2, 5).map((item, index) => {
                        return (
                          <ItemSmall
                            key={index}
                            title={item?.title}
                            id_blog={item?.id}
                            category={item?.id_category?.name}
                            id_category={item?.id_category?.id}
                            date={item?.created_at}
                            doctor={item?.id_doctor?.name}
                            id_doctor={item?.id_doctor?.id}
                            content={item?.content}
                            image={item?.picture}
                            avatar={item?.id_doctor?.account?.avatar}
                          ></ItemSmall>
                        );
                      })}
                  </ul>
                </div>
              </div>
              <h3>Khám phá thêm các chuyên mục khác</h3>
              <div className="category__blog_category category-list row">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  slidesPerView={"auto"}
                  grabCursor={"true"}
                  navigation
                >
                  {categories &&
                    categories.length > 0 &&
                    categories.map((item, index) => {
                      return (
                        <SwiperSlide>
                          <Link
                            className="col-md-2 category-item"
                            to={`/category/${item.id}/${item?.name}`}
                            state={{ chuyenmuc: `${item.name}` }}
                            onClick={() => {
                              setUpdate(!update);
                            }}
                          >
                            <div className="category-item-image">
                              <img src={item?.icon || chuyenmucImages} alt="" />
                            </div>
                            <p>{item?.name}</p>
                          </Link>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
              <h3>Xem thêm về {categoryy?.name}</h3>
              <div className="category__blog_item">
                <NewsSmall id={`${categoryy?.id}`}></NewsSmall>
                <div className="DoctorResultPageMonitor search__page">
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    // onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={3}
                    previousLabel="<"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item previous"
                    previousLinkClassName="page-link"
                    nextClassName="page-item previous"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active active-pagination"
                  />
                </div>
              </div>
              <div className="category__blog_doctor">
                <div className="category__blog_doctor_info">
                  <h3>Đội ngũ chuyên gia của HiBacsi</h3>
                  <p>
                    Đội ngũ cố vấn của HiBacsi gồm các chuyên gia sức khỏe và y
                    bác sĩ từ nhiều chuyên khoa, với đầy đủ chứng nhận, chứng
                    chỉ hành nghề, hỗ trợ xây dựng và củng cố nội dung theo
                    chuyên môn của mình. Trách nhiệm của chuyên gia là bảo đảm
                    tính chính xác về mặt y học ở những nội dung đăng tải trên
                    HiBacsi, thường xuyên cập nhật các thông tin mới về khoa
                    học, nghiên cứu và sức khỏe.
                  </p>
                  <p>
                    Đội ngũ của chúng tôi làm việc không mệt mỏi để những thông
                    tin hữu ích có thể dễ dàng tiếp cận đến bạn đọc, giúp bạn
                    chủ động hơn trong các quyết định chăm sóc sức khỏe.
                  </p>
                  <a href="/care/search">Xem thêm chuyên gia</a>
                </div>
                <div className="category__blog_doctor_item row">
                  {doctor &&
                    doctor.slice(0, 4).map((item, index) => {
                      return (
                        <div className="category__blog_doctor_item_list col-sm-6">
                          <div className="category__blog_doctor_item_list_img">
                            <img
                              src={item?.account?.avatar || doctorImg}
                              alt=""
                            />
                          </div>
                          <p>{item?.name || "Tên bác sĩ"}</p>
                          <div className="category__blog_doctor_item_list_text">
                            {item?.specialties?.map((item, index) => {
                              return <span>{item?.specialty?.name}</span>;
                            })}
                            {"   "}
                            <span>• {item?.hospital?.name}</span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default memo(Category);
