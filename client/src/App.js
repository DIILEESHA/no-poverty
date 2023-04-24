import "./app.css";
import Home from "./pages/Home/Home";
import Login from "./components/logger/Login/Login";
import Signup from "./components/logger/Signup/Signup";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Events from "./components/Events/ViewEvents"
import AddEvent from "./components/Events/AddEvent"
import UpdateEvent from "./components/Events/UpdateEvent"


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
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
