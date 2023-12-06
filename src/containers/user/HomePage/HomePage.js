import "./HomePage.scss";
import NavBar from "./NavBar/NavBar";
import NewsSmall from "./NewsSmall/NewsSmall";
import Introduce from "./Introduce/Introduce";
import BMIToolHomePage from "./BMIToolHomePage/BMIToolHomePage";
import banner1 from "../../../assets/Banner.png";
import Carousel from "react-bootstrap/Carousel";
import banner2 from "../../../assets/banner5.png";
import ItemLarge from "./NewsLarge/ItemLarge";
import ItemSmall from "./NewsLarge/ItemSmall";
import { fecthAllBlog } from "service/UserService";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "context/LoadingContext";
function App() {
  const [blog, setBlog] = useState([]);
  console.log(blog);
  const { loading, setLoading } = useContext(LoadingContext);
  const getBlog = async () => {
    let res = await fecthAllBlog(1);
    if (res) {
      setLoading(true);
      setBlog(res?.results);
    }
  };
  useEffect(() => {
    getBlog();
    setTimeout(() => {
      setLoading(false);
    }, 1500);
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
      <div className="MainPage">
        <div className="MainPageContentContainer">
          <div className="MainPageBanner">
            <Carousel>
              <Carousel.Item>
                <div className="banner__image">
                  <img
                    src={banner1}
                    class="d-block image-banner"
                    alt="Sunset Over the City"
                  />
                </div>
                <Carousel.Caption>
                  <h1>Sức khỏe của bạn là ưu tiên hàng đầu của chúng tôi</h1>
                  <p>
                    Mỗi ngày chúng tôi đều mang đến hi vọng và nụ cười cho những
                    người chúng tôi phục vụ
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="banner__image">
                  <img
                    src={banner2}
                    class="d-block w-100 image-banner image_2"
                    alt="Sunset Over the City"
                  />
                </div>
                <Carousel.Caption>
                  <h1>
                    Tìm kiếm bác sĩ, bệnh viện ở xung quanh bạn dễ dàng hơn
                  </h1>
                  <p>Đặt lịch hẹn nhanh chóng cùng với thao tác dễ sử dụng</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="MainPageContent">
            <NavBar />
            <div className="ListTrendingNews">
              <div className="NewsLargeContainer">
                <div className="NewsLargeOptionsContainer">
                  <div className="bold">Sắp xếp theo</div>
                  <div className="NewsLargeOption bold selected">Mới nhất</div>
                  {/* <div className="NewsLargeOption bold">Mới nhất</div> */}
                </div>
                <div className="NewsLarge2ItemsContainer">
                  <ul className="clear NewsLarge2Items flex-center">
                    {blog &&
                      blog.slice(4, 7).map((item, index) => {
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
                      blog.slice(1, 4).map((item, index) => {
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
            </div>
            <div className="ListCategoriesNews">
              <NewsSmall id={"4"} />
              <NewsSmall id={"2"} />
              <NewsSmall id={"3"} />
            </div>
            <div className="ListMainPageTools">
              <BMIToolHomePage />
            </div>
            <div className="Introduce">
              <Introduce />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
