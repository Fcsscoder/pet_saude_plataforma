import './App.css';

import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const hideLayout =
    location.pathname === '/entrar' || location.pathname === '/cadastrar';
  console.log(hideLayout);
  return (
    <>
      <div className="p-0">
        <Navbar />
        <Outlet />
        {!hideLayout && <Footer />}
      </div>
    </>
  );
}

export default App;
