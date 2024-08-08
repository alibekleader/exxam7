import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer, Header } from "./components";

import { Details, Dishes, Home, Login, Register, Basket } from "./pages";
import "./App.scss";
// import Basket from "./pages/basket/Basket";

const App = () => {
  const [carrier, setCarrier] = useState("");
  const [basketNumber, setBasketNumber] = useState(0);
  const [user, setUser] = useState();

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home carrier={carrier} />} />
          <Route
            path="/dishes"
            element={
              <Dishes
                carrier={setCarrier}
                setCarrier={setCarrier}
                basketNumber={basketNumber}
                setBasketNumber={basketNumber}
              />
            }
          />
          <Route
            path="/basket"
            element={
              <Basket
                basketNumber={basketNumber}
                setBasketNumber={basketNumber}
              />
            }
          />
          <Route path="/details" element={<Details carrier={carrier} />} />
          <Route />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
