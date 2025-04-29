import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./reset.css"
import MainPage from "./pages/mainPage/mainPage";
import AboutPage from './pages/aboutPage/aboutPage';
import NewsPage from './pages/newsPage/newsPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/aboutMe' element={<AboutPage />} />
          <Route path='/news' element={<NewsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
