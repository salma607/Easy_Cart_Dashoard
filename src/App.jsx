import Loginform from "./pages/Auth/Login/Loginform";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from "./pages/Logo/logo";
import Sidebar from "./Component/Sidebar/Side";







function App() {
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Loginform />} />
        <Route path="/" element={<Home />} />
        <Route path="/Logo" element={<Logo/>} />
        <Route path="/S" element={<Sidebar/>} />
        
       
        

      </Routes>
    </>
  );
}

export default App;
