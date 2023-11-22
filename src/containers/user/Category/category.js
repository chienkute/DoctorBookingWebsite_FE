import { memo } from "react";
import "../Category/category.scss";
import { BiSolidCategory } from "react-icons/bi";
import chuyenmucImages from "../../../assets/chuyenmuc/tooth1.png";
import blogImages from "../../../assets/blog-img.png";
import avtImg from "../../../assets/avatar.png";
import "../HomePage/NewsLarge/NewsLarge.scss";
import { FcPrevious, FcNext } from "react-icons/fc";
import doctorImg from "../../../assets/doctor/tat.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "../Category/CategoryListStyle.scss";
import ReactPaginate from "react-paginate";
const Category = () => {
  return (
    <div className="category">
      <div className="category__header d-flex align-items-center">
        <div className="category__icon_header">
          <BiSolidCategory></BiSolidCategory>
        </div>
        <a href="#" className="color-black fs-normal-text">
          Tất cả chuyên mục
        </a>
      </div>
      <div className="category__color"></div>
      <div className="caregory__banner">
        <div className="category__banner_header">
          <div className="category__banner_heading">
            <div className="category__banner_image_header">
              <img src={chuyenmucImages} alt="" />
            </div>
            <h1>Sức khỏe răng miệng</h1>
          </div>
          <div className="category__banner_description">
            <p>
              Khoang miệng của chúng ta chứa đầy vi khuẩn và chúng thường vô
              hại. Việc không chăm sóc răng miệng đúng cách có thể khiến vi
              khuẩn tăng sinh mất kiểm soát, dẫn đến các bệnh về răng miệng. Hãy
              tìm hiểu cách cải thiện sức khỏe răng miệng và bảo vệ bản thân
              chống lại các bệnh khác ngay bây giờ.
            </p>
          </div>
        </div>
        <div className="category__blog">
          <h3>Kiến thức chung</h3>
          <div className="category__blog_news">
            <div className="NewsLarge2ItemsContainer">
              <ul className="clear NewsLarge2Items flex-center">
                <li className="NewsItem col-2">
                  <div className="NewsImage">
                    <a href="#" className="clear">
                      <img src={blogImages} alt="Blog Img"></img>
                    </a>
                  </div>
                  <div className="NewsCategory">
                    <a href="#" className="clear bold" style={{ color: "red" }}>
                      Chuyên mục
                    </a>
                  </div>
                  <div className="NewsTitle">
                    <a href="#" className="clear bold">
                      Tiêu đề bài viết
                    </a>
                  </div>
                  <div className="NewsContent">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Pulvinar pellentesque habitant morbi tristique
                      senectus et. Libero id faucibus nisl tincidunt eget nullam
                      non nisi est...
                    </span>
                  </div>
                  <div className="NewsAuthorAndTime">
                    <a href="#" className="clear">
                      <img src={avtImg} placeholder="Avatar"></img>
                      <span>
                        Được viết bởi <b>Lorem ipsum</b> - 01/01/1990
                      </span>
                    </a>
                  </div>
                </li>
                <li className="NewsItem col-2">
                  <div className="NewsImage">
                    <a href="#" className="clear">
                      <img src={blogImages} alt="Blog Img"></img>
                    </a>
                  </div>
                  <div className="NewsCategory">
                    <a
                      href="#"
                      className="clear bold"
                      style={{ color: "blue" }}
                    >
                      Chuyên mục
                    </a>
                  </div>
                  <div className="NewsTitle">
                    <a href="#" className="clear bold">
                      Tiêu đề bài viết
                    </a>
                  </div>
                  <div className="NewsContent">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Pulvinar pellentesque habitant morbi tristique
                      senectus et. Libero id faucibus nisl tincidunt eget nullam
                      non nisi est...
                    </span>
                  </div>
                  <div className="NewsAuthorAndTime">
                    <a href="#" className="clear">
                      <img src={avtImg} placeholder="Avatar"></img>
                      <span>
                        Được viết bởi <b>Lorem ipsum</b> - 01/01/1990
                      </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="NewsLarge3ItemsContainer">
              <ul className="clear NewsLarge3Items flex-center">
                <li className="NewsItem col-3">
                  <div className="NewsImage">
                    <a href="#" className="clear">
                      <img src={blogImages} alt="Blog Img"></img>
                    </a>
                  </div>
                  <div className="NewsCategory">
                    <a
                      href="#"
                      className="clear bold"
                      style={{ color: "green" }}
                    >
                      Chuyên mục
                    </a>
                  </div>
                  <div className="NewsTitle">
                    <a href="#" className="clear bold">
                      Tiêu đề bài viết
                    </a>
                  </div>
                  <div className="NewsAuthorAndTime">
                    <a href="#" className="clear">
                      <img src={avtImg} placeholder="Avatar"></img>
                      <span>
                        Được viết bởi <b>Lorem ipsum</b> - 01/01/1990
                      </span>
                    </a>
                  </div>
                </li>
                <li className="NewsItem col-3">
                  <div className="NewsImage">
                    <a href="#" className="clear">
                      <img src={blogImages} alt="Blog Img"></img>
                    </a>
                  </div>
                  <div className="NewsCategory">
                    <a
                      href="#"
                      className="clear bold"
                      style={{ color: "cyan" }}
                    >
                      Chuyên mục
                    </a>
                  </div>
                  <div className="NewsTitle">
                    <a href="#" className="clear bold">
                      Tiêu đề bài viết
                    </a>
                  </div>
                  <div className="NewsAuthorAndTime">
                    <a href="#" className="clear">
                      <img src={avtImg} placeholder="Avatar"></img>
                      <span>
                        Được viết bởi <b>Lorem ipsum</b> - 01/01/1990
                      </span>
                    </a>
                  </div>
                </li>
                <li className="NewsItem col-3">
                  <div className="NewsImage">
                    <a href="#" className="clear">
                      <img src={blogImages} alt="Blog Img"></img>
                    </a>
                  </div>
                  <div className="NewsCategory">
                    <a href="#" className="clear bold" style={{ color: "red" }}>
                      Chuyên mục
                    </a>
                  </div>
                  <div className="NewsTitle">
                    <a href="#" className="clear bold">
                      Tiêu đề bài viết
                    </a>
                  </div>
                  <div className="NewsAuthorAndTime">
                    <a href="#" className="clear">
                      <img src={avtImg} placeholder="Avatar"></img>
                      <span>
                        Được viết bởi <b>Lorem ipsum</b> - 01/01/1990
                      </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <h3>Khám phá thêm các chuyên mục về Sức khỏe răng miệng</h3>
          <div className="category__blog_category category-list row">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={"auto"}
              grabCursor={"true"}
              navigation
            >
              <SwiperSlide>
                <a className="col-md-2 category-item" href="#">
                  <div className="category-item-image">
                    <img src={chuyenmucImages} alt="" />
                  </div>
                  <p>Viêm nướu & nha chu</p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a className="col-md-2 category-item-image" href="#">
                  <div>
                    <img src={chuyenmucImages} alt="" />
                  </div>
                  <p>Viêm nướu & nha chu</p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a className="col-md-2 category-item-image" href="#">
                  <div>
                    <img src={chuyenmucImages} alt="" />
                  </div>
                  <p>Viêm nướu & nha chu</p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a className="col-md-2 category-item-image" href="#">
                  <div>
                    <img src={chuyenmucImages} alt="" />
                  </div>
                  <p>Viêm nướu & nha chu</p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a className="col-md-2 category-item-image" href="#">
                  <div>
                    <img src={chuyenmucImages} alt="" />
                  </div>
                  <p>Viêm nướu & nha chu</p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a className="col-md-2 category-item-image" href="#">
                  <div>
                    <img src={chuyenmucImages} alt="" />
                  </div>
                  <p>Viêm nướu & nha chu</p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a className="col-md-2 category-item-image" href="#">
                  <div>
                    <img src={chuyenmucImages} alt="" />
                  </div>
                  <p>Viêm nướu & nha chu</p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a className="col-md-2 category-item-image" href="#">
                  <div>
                    <img src={chuyenmucImages} alt="" />
                  </div>
                  <p>Viêm nướu & nha chu</p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a className="col-md-2 category-item-image" href="#">
                  <div>
                    <img src={chuyenmucImages} alt="" />
                  </div>
                  <p>Viêm nướu & nha chu</p>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
          <h3>Xem thêm về Sức khỏe răng miệng</h3>
          <div className="category__blog_item">
            <div className="NewsSmallContainer">
              <div className="NewsSmallContent">
                <ul className="ListNewsSmallItems clear">
                  <li className="NewsItem">
                    <div className="NewsImage">
                      <a href="#" className="clear">
                        <img src={blogImages} alt="Blog Img"></img>
                      </a>
                    </div>
                    <div className="NewsInfo">
                      <div className="NewsTitle">
                        <a href="#" className="clear bold">
                          Tiêu đề bài viết
                        </a>
                      </div>
                      <div className="NewsContent">
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Pulvinar pellentesque habitant
                          morbi tristique senectus et. Libero id faucibus nisl
                          tincidunt eget nullam non nisi est...
                        </span>
                      </div>
                      <div className="NewsAuthorAndTime">
                        <a href="#" className="clear">
                          <img src={avtImg} placeholder="Avatar"></img>
                          <span>
                            Được viết bởi <b>Lorem ipsum</b> - 01/01/1990
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="NewsItem">
                    <div className="NewsImage">
                      <a href="#" className="clear">
                        <img src={blogImages} alt="Blog Img"></img>
                      </a>
                    </div>
                    <div className="NewsInfo">
                      <div className="NewsTitle">
                        <a href="#" className="clear bold">
                          Tiêu đề bài viết
                        </a>
                      </div>
                      <div className="NewsContent">
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Pulvinar pellentesque habitant
                          morbi tristique senectus et. Libero id faucibus nisl
                          tincidunt eget nullam non nisi est...
                        </span>
                      </div>
                      <div className="NewsAuthorAndTime">
                        <a href="#" className="clear">
                          <img src={avtImg} placeholder="Avatar"></img>
                          <span>
                            Được viết bởi <b>Lorem ipsum</b> - 01/01/1990
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="NewsItem">
                    <div className="NewsImage">
                      <a href="#" className="clear">
                        <img src={blogImages} alt="Blog Img"></img>
                      </a>
                    </div>
                    <div className="NewsInfo">
                      <div className="NewsTitle">
                        <a href="#" className="clear bold">
                          Tiêu đề bài viết
                        </a>
                      </div>
                      <div className="NewsContent">
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Pulvinar pellentesque habitant
                          morbi tristique senectus et. Libero id faucibus nisl
                          tincidunt eget nullam non nisi est...
                        </span>
                      </div>
                      <div className="NewsAuthorAndTime">
                        <a href="#" className="clear">
                          <img src={avtImg} placeholder="Avatar"></img>
                          <span>
                            Được viết bởi <b>Lorem ipsum</b> - 01/01/1990
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
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
                activeClassName="active"
              />
            </div>
          </div>
          <div className="category__blog_doctor">
            <div className="category__blog_doctor_info">
              <h3>Đội ngũ chuyên gia của Hello Bacsi</h3>
              <p>
                Đội ngũ cố vấn của Hello Bacsi gồm các chuyên gia sức khỏe và y
                bác sĩ từ nhiều chuyên khoa, với đầy đủ chứng nhận, chứng chỉ
                hành nghề, hỗ trợ xây dựng và củng cố nội dung theo chuyên môn
                của mình. Trách nhiệm của chuyên gia là bảo đảm tính chính xác
                về mặt y học ở những nội dung đăng tải trên Hello Bacsi, thường
                xuyên cập nhật các thông tin mới về khoa học, nghiên cứu và sức
                khỏe.
              </p>
              <p>
                Đội ngũ của chúng tôi làm việc không mệt mỏi để những thông tin
                hữu ích có thể dễ dàng tiếp cận đến bạn đọc, giúp bạn chủ động
                hơn trong các quyết định chăm sóc sức khỏe.
              </p>
              <a href="#">Xem thêm chuyên gia</a>
            </div>
            <div className="category__blog_doctor_item row">
              <div className="category__blog_doctor_item_list col-sm-6">
                <div className="category__blog_doctor_item_list_img">
                  <img src={doctorImg} alt="" />
                </div>
                <p>Bác sĩ Lê Thị Mỹ Duyên</p>
                <div className="category__blog_doctor_item_list_text">
                  <span>Đa khoa</span>{" "}
                  <span>• Bệnh viện Đa khoa Hồng Ngọc</span>
                </div>
              </div>
              <div className="category__blog_doctor_item_list col-sm-6">
                <div className="category__blog_doctor_item_list_img">
                  <img src={doctorImg} alt="" />
                </div>
                <p>Bác sĩ Lê Thị Mỹ Duyên</p>
                <div className="category__blog_doctor_item_list_text">
                  <span>Đa khoa</span>{" "}
                  <span>• Bệnh viện Đa khoa Hồng Ngọc</span>
                </div>
              </div>
              <div className="category__blog_doctor_item_list col-sm-6">
                <div className="category__blog_doctor_item_list_img">
                  <img src={doctorImg} alt="" />
                </div>
                <p>Bác sĩ Lê Thị Mỹ Duyên</p>
                <div className="category__blog_doctor_item_list_text">
                  <span>Đa khoa</span>{" "}
                  <span>• Bệnh viện Đa khoa Hồng Ngọc</span>
                </div>
              </div>
              <div className="category__blog_doctor_item_list col-sm-6">
                <div className="category__blog_doctor_item_list_img">
                  <img src={doctorImg} alt="" />
                </div>
                <p>Bác sĩ Lê Thị Mỹ Duyên</p>
                <div className="category__blog_doctor_item_list_text">
                  <span>Đa khoa</span>{" "}
                  <span>• Bệnh viện Đa khoa Hồng Ngọc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Category);
