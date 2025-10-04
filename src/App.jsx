import './App.css';

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div className="p-0">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
