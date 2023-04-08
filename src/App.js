import "./App.css";
import Maingooter from "./components/footer/Mainfooter/Maingooter";
import Subfooter from "./components/footer/Subfooter/Subfooter";
import Combinenav from "./components/Nav/Combinednav/Combinenav";
import Home from "./pages/Home/Home";
import Login from "./components/logger/Login/Login";
import Signup from "./components/logger/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Events from "./components/Events/ViewEvents"

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/Events" element={<Events/>}/>
        <Route path="/" element={<Layout />}/>     
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
