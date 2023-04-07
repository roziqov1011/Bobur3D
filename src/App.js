import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontOrti from "./components/FrontOrti/FrontOrti";
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import NotFound from "./components/NotFound/NotFound";
import Sertifikat from "./components/Sertifikat/Sertifikat";


const App = () => {
    return (
      <BrowserRouter>   
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<Info />} />
              <Route path="/frontorti" element={<FrontOrti />} />
              <Route path="/sertificate/:id" element={<Sertifikat />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    );
};

export default App;
