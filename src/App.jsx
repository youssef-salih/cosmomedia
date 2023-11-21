import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { paths } from "./routes";
function App() {
  return (
    <div className="relative font-teko  h-full container mx-auto text-white ">
      <Router>
        <Navbar />
        <Routes>
          {paths.map((page, index) => (
            <Route key={index} path={page.path} element={<page.component />} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
