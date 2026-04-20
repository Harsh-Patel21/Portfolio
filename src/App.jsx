import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen relative overflow-hidden bg-[#0d0d15] text-white overflow-x-hidden">
      
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ background: 'linear-gradient(45deg, rgba(0, 229, 255, 0.03) 0%, rgba(96, 213, 255, 0.05) 50%, rgba(0, 229, 255, 0.03) 100%)', transition: 'background 0.3s ease-out' }}></div>
      <div className="fixed inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0, 229, 255, 0.15) 0%, transparent 70%)', transition: 'background 0.5s ease-out' }}></div>
      
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;