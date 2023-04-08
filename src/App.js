import "./app.css";
import Maingooter from "./components/footer/Mainfooter/Maingooter";
import Subfooter from "./components/footer/Subfooter/Subfooter";
import Combinenav from "./components/Nav/Combinednav/Combinenav";
import Home from "./pages/Home/Home";
import Login from "./components/logger/Login/Login";
import Signup from "./components/logger/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ViewSession from "./components/sessions/ViewSession/ViewSession";
import SingleSession from "./components/sessions/SingleSession/SingleSession";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sessions" element={<ViewSession />} />
        <Route path="/session" element={<SingleSession />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
