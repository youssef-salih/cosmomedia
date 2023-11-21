import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="relative font-teko h-screen container mx-auto text-white ">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
