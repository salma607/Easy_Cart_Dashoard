import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import ProductTable from "./Component/Tables/ProductTable";
import AddProduct from "./Component/Tables/AddProduct";
import Cards from "./Component/Cards/Cards";
import Graphs from "./Component/Graphs/Graphs";
import Setting from "./pages/Setting/Setting";
import Privacy from "./pages/Privacy/Privacy";
import Users from "./pages/Users/Users";
import CartService from "./pages/CartService/CartService";
import Order from "./pages/Order/Order";
import DotsLoader from "./Component/DotsLoader/DotsLoader";
import HelpCenter from "./pages/Help Center/Help Center";
import Chat from "./Component/Chat/Chat";
import Login from "./pages/Auth/Login/Login";
import { Toaster } from "react-hot-toast";
import Rates from "./pages/Rates/Rates";
import Feedback from "./pages/Feedback/Feedback";
import Clients from "./pages/Clients/Clients";
import PrivateRoute from "./Component/shared/ProtectedRoutes";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />

        {/* All other pages wrapped in PrivateRoute */}
        <Route
          path="/Home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/Product"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        />
        <Route
          path="/ProductTable"
          element={
            <PrivateRoute>
              <ProductTable />
            </PrivateRoute>
          }
        />
        <Route
          path="/AddProduct"
          element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/C"
          element={
            <PrivateRoute>
              <Cards />
            </PrivateRoute>
          }
        />
        <Route
          path="/G"
          element={
            <PrivateRoute>
              <Graphs />
            </PrivateRoute>
          }
        />
        <Route
          path="/Setting"
          element={
            <PrivateRoute>
              <Setting />
            </PrivateRoute>
          }
        />
        <Route
          path="/Privacy"
          element={
            <PrivateRoute>
              <Privacy />
            </PrivateRoute>
          }
        />
        <Route
          path="/Users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route
          path="/CartService"
          element={
            <PrivateRoute>
              <CartService />
            </PrivateRoute>
          }
        />
        <Route
          path="/Order"
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />
        <Route
          path="/loader"
          element={
            <PrivateRoute>
              <DotsLoader />
            </PrivateRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
        <Route
          path="/Help"
          element={
            <PrivateRoute>
              <HelpCenter />
            </PrivateRoute>
          }
        />
        <Route
          path="/rates"
          element={
            <PrivateRoute>
              <Rates />
            </PrivateRoute>
          }
        />
        <Route
          path="/feedback"
          element={<Feedback />}
        />
        <Route
          path="/clients"
          element={
            <PrivateRoute>
              <Clients />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;