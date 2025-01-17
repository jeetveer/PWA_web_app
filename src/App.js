import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Users from './Components/Users';
import About from './Components/About';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={ <About/> } />
        <Route path='/users' element={<Users/>} />
      </Routes>
    </>
  );
}

export default App;
