import "./app.css";
import Maingooter from "./components/footer/Mainfooter/Maingooter";
import Subfooter from "./components/footer/Subfooter/Subfooter";
import Combinenav from "./components/Nav/Combinednav/Combinenav";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div className="App">
      <Combinenav />
      <Home />
      <Maingooter />
      <Subfooter />
    </div>
  );
}

export default App;
