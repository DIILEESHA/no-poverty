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
import "@stripe/stripe-js";
import Donate from "./components/donate/Donate";
import Sponsor from "./components/sponsor/Sponsor";

import View from "./components/sehan/View";
import Edit from "./components/sehan/Edit";
import Details from "./components/sehan/Details";
import New from "./components/sehan/New";

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
          <Route path="/view" element={<View />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/new" element={<New />} />
          
          <Route path="/donate" element={<Donate />} />
          <Route path="/sponsor-a-child" element={<Sponsor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
