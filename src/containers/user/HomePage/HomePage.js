import "./HomePage.scss";
import banner from "assets/banner-bg.svg";

import NavBar from "./NavBar/NavBar";
import NewsLarge from "./NewsLarge/NewsLarge";
import NewsSmall from "./NewsSmall/NewsSmall";
import ListTools from "./ListTools/ListTools";
import Introduce from "./Introduce/Introduce";
import BMIToolHomePage from "./BMIToolHomePage/BMIToolHomePage";
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
