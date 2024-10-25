import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import ThemaContext from "./context/ThemaContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/to.cinema/Home";
import Eksplor from "./pages/eksplor/Eksplor";
import Footer from "./component/Footer";
import HomeDetail from "./pages/to.cinema/HomeDetail";
import Rating from "./pages/rating/Rating";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const [count, setCount] = useState(0);
  const theme = useState("light");

  return (
    <div className="">
      <BrowserRouter>
        <ThemaContext.Provider value={theme}>
          <Provider store={store}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/eksplor" element={<Eksplor />} />
              <Route path="/detail/:id" element={<HomeDetail />} />
              <Route path="/rating" element={<Rating />} />
            </Routes>
            <Footer />
          </Provider>
        </ThemaContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
