import Loginform from "./pages/Auth/Login/Loginform";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Loginform />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
