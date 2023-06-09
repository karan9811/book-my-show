import './App.css';

//Routers
import {Routes,Route} from "react-router-dom";

//React slick css
 import "~slick-carousel/slick/slick.css"; 
 import "~slick-carousel/slick/slick-theme.css";

 //Pages
 import PlayPage from './pages/Play.page';
 import MoviePage from './pages/Movie.page';
 import HomePage from './pages/Home.Page';


function App() {
  return (
    <Routes>
    {/* <Route path="/" element={<HomePage/>} />
    <Route path="/movie/:id" element={<MoviePage />} />
    <Route path="/plays" element={<Plays />} /> */}
  </Routes>
   
  );
}

export default App;
