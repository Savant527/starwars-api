import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/Home/index';
import {Route, Routes} from 'react-router-dom';
import NavbarApp from './components/Navbar/index';
import { Footer } from "./components/Footer";
import  Characters  from "./pages/Characters/";
import  Planets  from "./pages/Planets";
import Details from "./pages/Characters/details";

function App() {
  return (
    <div className="App">
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/details/:name" element={<Details />} />
        <Route path="/planets" element={<Planets />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
