import Loginform from "./pages/Auth/Login/Login";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Component/Sidebar/Side";
import Header from "./Component/Header/Header";
import Graphs from "./Component/Graphs/Graphs";
import Product from "./pages/Product/Product";
import Cards from "./Component/Cards/Cards";
import Tables from "./Component/Tables/Tables";
import Setting from "./pages/Setting/Setting";
import Privacy from "./pages/Privacy/Privacy";
import Users from "./pages/Users/Users";
import CartService from "./pages/CartService/CartService";
import Order from "./pages/Order/Order";
function App() {
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Loginform />} />
        <Route path="/" element={<Home/>} />
        <Route path="/S" element={<Sidebar />} />
        <Route path="/H" element={<Header />} />
        <Route path="/G" element={<Graphs />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/C" element={<Cards />} />
        <Route path="/T" element={<Tables />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/CartService" element={<CartService />} />
        <Route path="/Order" element={<Order/>} />


      </Routes>
    </>
  );
}

export default App;
