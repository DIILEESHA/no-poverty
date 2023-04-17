import "./app.css";
import Maingooter from "./components/footer/Mainfooter/Maingooter";
import Subfooter from "./components/footer/Subfooter/Subfooter";
import Combinenav from "./components/Nav/Combinednav/Combinenav";
import Home from "./pages/Home/Home";
import Login from "./components/logger/Login/Login";
import Signup from "./components/logger/Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ViewSession from "./components/sessions/ViewSession/ViewSession";
import SingleSession from "./components/sessions/SingleSession/SingleSession";
import Addsession from "./components/sessions/AddSession/Addsession";
import About from "./pages/Aboutus/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Layout />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-session" element={<Addsession />} />
          <Route path="/sessions" element={<ViewSession />} />
          <Route path="/session" element={<SingleSession />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
