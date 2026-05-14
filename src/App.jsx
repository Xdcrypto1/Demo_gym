import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Plans from "./sections/Plans";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import Success from "./pages/Success";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/success" element={<Success />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;