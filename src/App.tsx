import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Policy from './pages/Policy';
import Oferta from './pages/Oferta';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/oferta" element={<Oferta />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
