
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home";
// import Products from './components/Pages/Products';
// import Features from "./components/Pages/Features.js";
// import Categories from './components/Pages/Categories';
// import Review from './components/Pages/Review';


function App() {
  return (
     <Router>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home/> } />
       {/* <Route path="/features"  element={<Features/>} />
       <Route path="/products" element={<Products/>} />
       <Route path="/categories" element={<Categories/> } />
       <Route path="/review" element={<Review />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
