import "./app.css";
import Maingooter from "./components/footer/Mainfooter/Maingooter";
import Subfooter from "./components/footer/Subfooter/Subfooter";
import Combinenav from "./components/Nav/Combinednav/Combinenav";
import Home from "./pages/Home/Home";
import Login from "./components/logger/Login/Login";
function App() {
  return (
    <div className="App">
      {/* <Combinenav /> */}
      {/* <Home /> */}
      {/* <Maingooter /> */}
      {/* <Subfooter /> */}
      <Login />
    </div>
  );
}

export default App;
