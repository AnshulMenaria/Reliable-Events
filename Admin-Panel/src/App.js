import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './Components/Admin-Panel';
import NavigationBar from './Components/Navbar';


function App() {
  return (
    <Router>
        <NavigationBar/>  
      <Routes>
        <Route index element={<AdminPanel />} />
        
      </Routes>
    </Router>
  );
}

export default App;
