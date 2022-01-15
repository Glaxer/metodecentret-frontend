import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frontpage from "./pages/Frontpage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import "./css/App.css"

function App() {
  return (
    <>
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<Frontpage/>} />
            </Routes>
        </Router>
        <Footer />
    </>
  );
}

export default App;
