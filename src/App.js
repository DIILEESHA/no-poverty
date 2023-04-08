import './App.css'
import Maingooter from "./components/footer/Mainfooter/Maingooter";
import Subfooter from "./components/footer/Subfooter/Subfooter";
import Combinenav from "./components/Nav/Combinednav/Combinenav";
import New from './components/sehan/new1/new';
import View from './components/sehan/new1/view';
import Details from './components/sehan/new1/details';
import Edit from './components/sehan/new1/edit';
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
function App() {
  return ( 
    <div className="App">
      {/* <Combinenav />
      <Home />
      <Maingooter />
       <Subfooter /> 
       <New/>
        <View/>
        <Details/>
      <Edit/>
      
      */}

    <Combinenav />
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<New />} />
        <Route path="view" element={<View />} /> 
        <Route path="details" element={<Details />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
     
     
     </BrowserRouter>
     
     <Maingooter />  
     <Subfooter /> 
    </div>
  );
}

export default App;
