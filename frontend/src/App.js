import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Price from "./pages/Price/Price";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Price />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
