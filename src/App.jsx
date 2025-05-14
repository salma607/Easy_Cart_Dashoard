
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Component/Sidebar/Side";
import Header from "./Component/Header/Header";
import Graphs from "./Component/Graphs/Graphs";
import Product from "./pages/Product/Product";
import Cards from "./Component/Cards/Cards";
import ProductTable from "./Component/Tables/ProductTable";
import Setting from "./pages/Setting/Setting";
import Privacy from "./pages/Privacy/Privacy";
import Users from "./pages/Users/Users";
import CartService from "./pages/CartService/CartService";
import Order from "./pages/Order/Order";
import DotsLoader from "./Component/DotsLoader/DotsLoader";
import AddProduct from "./Component/Tables/AddProduct";
import HelpCenter from "./pages/Help Center/Help Center";
import Chat from "./Component/Chat/Chat";
import Login from "./pages/Auth/Login/Login";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/S" element={<Sidebar />} />
        <Route path="/H" element={<Header />} />
        <Route path="/G" element={<Graphs />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/C" element={<Cards />} />
        <Route path="/Product" element={<ProductTable />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/CartService" element={<CartService />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/loader" element={<DotsLoader />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/Help" element={<HelpCenter />} />
      </Routes>
    </>
  );
}

export default App;
