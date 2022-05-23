import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page_1/Home/Home/Home';
import Navber from './Page_1/Home/Navber/Navber';
import Updatepage from './Page_1/Updatepage/Updatepage';

function App() {
  return (

    <div >
      <Navber></Navber>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='purchase/:purchaseId' element={<Updatepage></Updatepage>}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
