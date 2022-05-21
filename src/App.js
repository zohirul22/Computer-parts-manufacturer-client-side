import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page_1/Home/Home/Home';
import Navber from './Page_1/Home/Navber/Navber';

function App() {
  return (

    <div >
      <Navber></Navber>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
