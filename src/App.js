import "./app.css";
import Maingooter from "./components/footer/Mainfooter/Maingooter";
import Subfooter from "./components/footer/Subfooter/Subfooter";
import Combinenav from "./components/Nav/Combinednav/Combinenav";
import Home from "./pages/Home/Home";
import Login from "./components/logger/Login/Login";
import Signup from "./components/logger/Signup/Signup";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Events from "./components/Events/ViewEvents"

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
          <Route index element={<Home />} />
          <Route path="/Events" element={<Events/>}/>
          <Route path="/" element={<Layout />}/>     
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
    </Router>
  );
  
}

export default App;
