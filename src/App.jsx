import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { paths } from "./routes";
import Navbar from "./layouts/navbar/Navbar";
import Footer from "./layouts/footer/Footer";
function App() {
  return (
    <div className="relative font-teko  h-full  text-white ">
      <Router>
        <Navbar />
        <Routes>
          {paths.map((page, index) => (
            <Route key={index} path={page.path} element={<page.component />} />
          ))}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
