import Cards from "./Components/Cards";
import Header from "./Components/Header";
import {Routes,Route} from 'react-router-dom';
import AddMovie from "./Components/AddMovie";
import Detail from "./Components/Detail";

function App() {
  return (
    <div className="App relative">
     <Header/>
     <Routes>
      <Route path="/" element={<Cards/>}></Route>
      <Route path="/addmovie" element={<AddMovie/>}></Route>
      <Route path="/detail/:id" element={<Detail/>}></Route>
     </Routes>
    
    </div>
  );
}

export default App;
