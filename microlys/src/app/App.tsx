import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyContactWidget from './components/StickyContactWidget';
import Home from './pages/Home';
import ProdottiSoluzioni from './pages/ProdottiSoluzioni';
import News from './pages/News';
import ChiSiamo from './pages/ChiSiamo';
import Contatti from './pages/Contatti';
import Supporto from './pages/Supporto';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prodotti-soluzioni" element={<ProdottiSoluzioni />} />
          <Route path="/news" element={<News />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/supporto" element={<Supporto />} />
        </Routes>
        <Footer />
        <StickyContactWidget />
      </div>
    </BrowserRouter>
  );
}