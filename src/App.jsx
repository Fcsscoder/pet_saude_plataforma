import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="p-0">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
