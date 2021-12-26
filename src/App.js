import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './app.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Home from './Pages/Home/Home';
import NewProduct from "./Pages/NewProduct/NewProduct";
import NewUser from "./Pages/newUser/NewUser";
import Product from "./Pages/Product/Product";
import ProductList from "./Pages/ProductList/ProductList";
import User from "./Pages/User/User";
import UserList from "./Pages/UserList/UserList";

function App() {
  return (
    
   <BrowserRouter >

    <Topbar/>
    <div className="container">
      <Sidebar/>
      <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/users" element={ <UserList/>} />
      <Route path="/user/:userid" element={ <User/>} />
      <Route path="/newUser" element={ <NewUser/>} />
      <Route path="/products" element={ <ProductList/>} />
      <Route path="/product/:productid" element={ <Product/>} />
      <Route path="/newProduct" element={ <NewProduct/>} />
    
     </Routes>

    </div>
   </BrowserRouter>
  );
}

export default App;
