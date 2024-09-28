import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AdminPanel from './Components/Admin-Panel';
import NavigationBar from './Components/Navbar';
import Login from './Components/Admin-Login';
import AllContacts from './Components/Contact';
import Reviews from './Components/Review';
import UpdateAdmin from './Components/Setting';

function App() {
  const location = useLocation(); // Get current location

  return (
    <>
      {location.pathname !== '/' && <NavigationBar />} {/* Render NavigationBar only if not on the login page */}
      <Routes>
        <Route index element={<Login />} />
        <Route path='/adminpanel' element={<AdminPanel />} />
        <Route path='/contact' element={<AllContacts />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/setting' element={<UpdateAdmin />} />
      </Routes>
    </>
  );
}

const WrapperApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrapperApp;
