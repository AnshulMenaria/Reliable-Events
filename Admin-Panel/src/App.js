import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './Components/Admin-Panel';


function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<AdminPanel />} />
        
      </Routes>
    </Router>
  );
}

export default App;
