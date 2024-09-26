import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResponsiveAppBar from './components/Navbar';
import './App.css';
import AboutSection from './pages/About';
import Footer from './components/Footer';
import ContactUs from './pages/Contact';
import TermsAndConditions from './pages/terms';
import Refund from './pages/Refund';
import StaticFluidDispensingSystem from './pages/satticfluid';

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/static-fluid" element={<StaticFluidDispensingSystem />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;