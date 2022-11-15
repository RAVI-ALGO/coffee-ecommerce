
import './App.css';
import Login from './pages/login';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Routes,Route} from "react-router-dom";
import Register from './pages/register';
import Home from './pages/home';
import Productlist from './pages/product-list';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/product-list' element={<Productlist/>} />
      </Routes>
    </div>
  );
}

export default App;
