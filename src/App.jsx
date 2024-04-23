import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { paths } from "./routes";
import Navbar from "./layouts/navbar/Navbar";
import Footer from "./layouts/footer/Footer";
import Loader from "./components/loader/Loader";

import "./App.css";
import Loader2 from "./components/loader/Loader2.0";

function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setLoaderFinished(true);
    }, 5000);
  }, []);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      // eslint-disable-next-line no-unused-vars
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="relative font-teko h-full text-white ">
      {loaderFinished ? (
        <Router>
          <Navbar />
          <Routes>
            {paths.map((page, index) => (
              <Route
                key={index}
                path={page.path}
                element={<page.component />}
              />
            ))}
          </Routes>
          <Footer />
        </Router>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
