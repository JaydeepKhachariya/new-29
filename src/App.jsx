import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Bookings from "./pages/Bookings";
import Plan from "./pages/Plans";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Invoice from "./components/Invoice";
import "rsuite/dist/rsuite-no-reset.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
