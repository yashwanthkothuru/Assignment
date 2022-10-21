import logo from './logo.svg';
import './App.css';
import Graph from './Graph';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Gridd from './Grid';
function App() {
  return (
    <div className="App">
     <Graph/>
     {/* <BrowserRouter>
     <Graph/>
      <Routes>
      <Route path ='/'element ={<Graph/>}/>
      <Route path ='/Grid' element={<Gridd/>}/>
      
      </Routes>
      
      </BrowserRouter> */}
    </div>
  );
}

export default App;
