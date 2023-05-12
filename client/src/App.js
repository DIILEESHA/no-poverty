import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./components/logger/Login/Login";
import Signup from "./components/logger/Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import SingleSession from "./components/sessions/SingleSession/SingleSession";
import Addsession from "./components/sessions/AddSession/Addsession";
import About from "./pages/Aboutus/About";
import "@stripe/stripe-js";
import View from "./components/sehan/View";
import Edit from "./components/sehan/Edit";
import Details from "./components/sehan/Details";
import New from "./components/sehan/New";
import Donate from "./components/donate/Donate";
import Sponsor from "./components/sponsor/Sponsor";
import Cancel from "./components/Cardalert/failure/Cancel";
import { UserContextProvider } from "./context/UserContext";
// import Viewsession from "./components/sessions/ViewSession/ViewSession";
import Editsession from "./components/sessions/Editsession/Editsession";
import Index from './components/sessions/index'
// import ViewSession from "./components/sessions/ViewSession/ViewSession";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} /> 
            <Route index element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/create" element={<Addsession />} />
            <Route path="/edit/:id" element={<Editsession />} />
            {/* <Route index element={<Index />} /> */}

            <Route path="/sessions" element={<Index />} />
            <Route path="/post/:id" element={<SingleSession />} />
            <Route path="/view" element={<View />} />
            <Route path="/details" element={<Details />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/new" element={<New />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/sponsor-a-child" element={<Sponsor />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContextProvider>
  );
}

export default App;
