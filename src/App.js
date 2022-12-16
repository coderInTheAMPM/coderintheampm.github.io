import Navbar from "./Navbar/component";

import {Routes, Route} from "react-router-dom";

import "./styles.scss";
import HomePage from "./1_HomePage/component";
import ArticlesPage from "./2_ArticlesPage/component";
import VideosPage from "./3_VideosPage/component";
import NewsletterPage from "./4_NewsletterPage/component";
import ContactPage from "./5_ContactPage/component";
import Footer from "./Footer/component";
import Page1 from "./2_ArticlesPage/ArticleSubpages/Page1/component";
import Page2 from "./2_ArticlesPage/ArticleSubpages/Page2/component";
import Page3 from "./2_ArticlesPage/ArticleSubpages/Page3/component";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route exact path="/articles" element={<ArticlesPage/>} />
          <Route exact path="/videos" element={<VideosPage/>} />
          <Route exact path="/newsletter" element={<NewsletterPage/>} />
          <Route exact path="/contact" element={<ContactPage/>} />

          <Route exact path="/page1" element={<Page1/>} />
          <Route exact path="/page2" element={<Page2/>} />
          <Route exact path="/page3" element={<Page3/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
