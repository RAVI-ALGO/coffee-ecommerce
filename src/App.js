
import './App.css';
import Login from './pages/login';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Routes,Route} from "react-router-dom";
import Register from './pages/register';
import Home from './pages/home';
import Productlist from './pages/product-list';
import ProductDetails from './pages/product-details';
import ShoppingCart from './pages/shopping-cart';
import AddressPage from './pages/address-page';
import Payment from './pages/payment';
import OrederPlace from './pages/home/order-placed';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/products' element={<Productlist/>} />
        <Route path='/products/:productName/:productid' element={<ProductDetails />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/cart/select-address/' element={<AddressPage />} />
        <Route path='/cart/select-address/payment/' element={<Payment />} />
        <Route path='/cart/select-address/payment/order-placed/' element={<OrederPlace />} />
      </Routes>
    </div>
  );
}

export default App;
