import "./app.css";
import Campaign from "./components/campaign/Campaign";
import Subfooter from "./components/footer/Subfooter/Subfooter";
import Header from "./components/Header/Header";
import Navheader from "./components/Nav/Navheader/Navheader";
function App() {
  return (
    <div className="App">
      <Navheader />
      <Header />
      <Campaign />
      <Subfooter />
    </div>
  );
}

export default App;
