import "./App.css";
import { Routes, Route } from "react-router-dom";
import Comments from "./components/Comments";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
