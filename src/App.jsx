import Home from './components/Home/Home';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import MainLayout from './components/Layout/MainLayout';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
        </Router>
    </div>
  );
}

export default App;
