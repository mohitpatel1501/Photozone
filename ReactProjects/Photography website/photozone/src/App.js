import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Aboutpage from "./pages/About";
import Servicepage from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import WhychooseusPage from "./pages/Whychooseus";
import TeamPage from "./pages/Team";
import ClientreviewsPage from "./pages/Clientreviews";
import Errorpage from "./pages/Errorpage";
import Contactpage from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/services' element={<Servicepage />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/whychooseus' element={<WhychooseusPage />} />
        <Route path='/teampage' element={<TeamPage />} />
        <Route path='/clientreviews' element={<ClientreviewsPage />} />
        <Route path='/contact' element={<Contactpage />} />
        <Route path='/*' element={<Errorpage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
