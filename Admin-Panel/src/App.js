import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './Components/Admin-Panel';
import Login from './Components/Admin-Login';
import AllContacts from './Components/Contact';
import Reviews from './Components/Review';
import UpdateAdmin from './Components/Setting';
import Layout from './Components/Layout';

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Layout/>}>

        <Route index element={<Login />} />
        <Route path='/adminpanel' element={<AdminPanel />} />
        <Route path='/contact' element={<AllContacts />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/setting' element={<UpdateAdmin />} />
        </Route>
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
