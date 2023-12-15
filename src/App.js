import { Route, Routes } from "react-router-dom";
import Navi from "./components/Navi";
import Main from "./components/Main";
import './style/app.scss'
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Content from "./components/Content";
import News from "./components/News";
import LoadingPage from "./components/LoadingPage";


function App() {
  return (
    <>
    <Routes>
      < Route path="/*" element={<LoadingPage/>}/>
      < Route path="GamzeBakisTiryaki" element={<Navi/>}>
          <Route path="gmzbks" element={<Main/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="gallery" element={<Gallery/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="news/:newsId" element={<Content/>}/>
         
      </Route>
    </Routes>
    </>
  );
}

export default App;
