import { Routes, Route } from "react-router-dom";
import ClimateDashboard from "./components/ClimateDashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import ClimateInsights from "./pages/ClimateInsights";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClimateReport from "./pages/ClimateReport";


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<ClimateDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/insights" element={<ClimateInsights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/reports/:reportId" element={<ClimateReport />} />
      </Routes>
      <Footer />
    </div>
  );
}
