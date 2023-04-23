
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Pages/Home";
import Features from "./components/Pages/Features";


function App() {
  return (
     <Router>
      <div className="App">
      <Navbar />
      <Routes>
       <Route path="/" element={Home } />
       <Route path="/features" element={Features} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
