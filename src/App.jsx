import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";

import StaticSecurity from "./pages/services/StaticSecurity";
import ConstructionSecurity from "./pages/services/ConstructionSecurity";
import ConciergeSecurity from "./pages/services/ConciergeSecurity";
import MobilePatrol from "./pages/services/MobilePatrol";
import NightPatrol from "./pages/services/NightPatrol";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/pricing" element={<Pricing />} />

        <Route path="/industries" element={<Industries />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/services/static-security" element={<StaticSecurity />} />

        <Route
          path="/services/construction-security"
          element={<ConstructionSecurity />}
        />

        <Route
          path="/services/concierge-security"
          element={<ConciergeSecurity />}
        />

        <Route path="/services/mobile-patrol" element={<MobilePatrol />} />

        <Route path="/services/night-patrol" element={<NightPatrol />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
