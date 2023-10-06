import "./HomePage.scss";
import banner from "../../../assets/banner-bg.svg";

import NavBar from "../../user/NavBar/NavBar";
import NewsLarge from "../../user/NewsLarge/NewsLarge";
import NewsSmall from "../../user/NewsSmall/NewsSmall";
import ListTools from "../../user/ListTools/ListTools";
import Introduce from "../../user/Introduce/Introduce";
import BMIToolHomePage from "../../user/BMIToolHomePage/BMIToolHomePage";
import Header from "containers/theme/Header/Header";

function App() {
  return (
    <div className="MainPage">
      <Header></Header>
      <div className="MainPageContentContainer">
        <div className="MainPageBanner">
          <img src={banner} alt="MainPageBanner"></img>
        </div>
        <div className="MainPageContent">
          <NavBar />
          <div className="ListTrendingNews">
            <NewsLarge />
          </div>
          <div className="ListCategoriesNews">
            <NewsSmall />
            <NewsSmall />
            <NewsSmall />
          </div>
          <div className="ListMainPageTools">
            <ListTools />
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
