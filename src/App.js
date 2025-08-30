import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Cart1 from './pages/Cart1';
import Cart2 from './pages/Cart2';
import Cart3 from './pages/Cart3';

function App() {
  return (
    <Router>
      {/*<Header />*/}
      <Routes>
        <Route path="/" element={<Cart1 />} />
        <Route path="/research" element={<Cart2 />} />
      </Routes>
    </Router>
  );
}

export default App;
