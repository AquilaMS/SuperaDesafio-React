import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './screens/login';
import Register from './screens/register';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Home from './screens/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
