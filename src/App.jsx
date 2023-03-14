import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Single from './pages/Single/Single';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/single/:id" element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
