import "./app.css";
import Home from "./pages/Home/Home";
import Login from "./components/logger/Login/Login";
import Signup from "./components/logger/Signup/Signup";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Events from "./components/Events/ViewEvents"
import AddEvent from "./components/Events/AddEvent"
import UpdateEvent from "./components/Events/UpdateEvent"

import ViewSession from "./components/sessions/ViewSession/ViewSession";
import SingleSession from "./components/sessions/SingleSession/SingleSession";
import Addsession from "./components/sessions/AddSession/Addsession";
import About from "./pages/Aboutus/About";
import View from "./components/sehan/View";
import Edit from "./components/sehan/Edit";
import Details from "./components/sehan/Details";
import "@stripe/stripe-js";
import New from "./components/sehan/New";
import Donate from "./components/donate/Donate";
import Sponsor from "./components/sponsor/Sponsor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Events" element={<Events />} />
          <Route path="/Events/Add" element={<AddEvent />} />
          <Route path="/Events/Update" element={<UpdateEvent />} />
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-session" element={<Addsession />} />
          <Route path="/sessions" element={<ViewSession />} />
          <Route path="/session" element={<SingleSession />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/view" element={<View />} />
          <Route path="/details" element={<Details />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/new" element={<New />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/sponsor-a-child" element={<Sponsor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
