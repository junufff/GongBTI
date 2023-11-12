import logo from './logo.svg';
import Home from './pages/Home';
import Qeustion from './pages/Qeustion';
import Result from './pages/Result';
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Routes>
  <Route path='/' element={<Home> </Home>} />
  <Route path='/question' element ={<Qeustion></Qeustion>} />
  <Route path='/result' element = {<Result/>} />
  </Routes>

  );  
}

export default App;
