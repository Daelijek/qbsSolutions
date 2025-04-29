import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./reset.css"
import MainPage from "./pages/mainPage/mainPage";
import AboutPage from './pages/aboutPage/aboutPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/aboutMe' element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
