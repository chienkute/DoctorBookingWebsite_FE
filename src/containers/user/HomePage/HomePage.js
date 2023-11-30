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
function App() {
  return (
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
                <h1>Tìm kiếm bác sĩ, bệnh viện ở xung quanh bạn dễ dàng hơn</h1>
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
                <div className="NewsLargeOption bold selected">
                  Phổ biến nhất
                </div>
                <div className="NewsLargeOption bold">Mới nhất</div>
              </div>
              <div className="NewsLarge2ItemsContainer">
                <ul className="clear NewsLarge2Items flex-center">
                  <ItemLarge></ItemLarge>
                  <ItemLarge></ItemLarge>
                </ul>
              </div>
              <div className="NewsLarge3ItemsContainer">
                <ul className="clear NewsLarge3Items flex-center">
                  <ItemSmall></ItemSmall>
                  <ItemSmall></ItemSmall>
                  <ItemSmall></ItemSmall>
                </ul>
              </div>
            </div>
          </div>
          <div className="ListCategoriesNews">
            <NewsSmall />
            <NewsSmall />
            <NewsSmall />
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
  );
}

export default App;
