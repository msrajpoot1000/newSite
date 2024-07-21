import "@fontsource/heebo/400.css";
import "@fontsource/heebo/500.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//bootstrap loding
import "bootstrap/dist/css/bootstrap.min.css";

//edited boostrap import
import "./assets/bootsrapCss/bootstrap.min.css";

// import all in one css
import "./assets/css/style.css";

// In src/index.js or src/App.js
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// import pagees
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

//import router setting
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
