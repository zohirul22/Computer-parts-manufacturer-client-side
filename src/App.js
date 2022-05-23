import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page_1/Home/Home/Home';
import Navber from './Page_1/Home/Navber/Navber';
import Updatepage from './Page_1/Updatepage/Updatepage';
import Login from './page_2/Login/Login';
import Notfound from './page_2/Notfound/Notfound';
import RequireAuth from './page_2/RequireAuth/RequireAuth';
import SignUp from './page_2/SignUp/SignUp';
import Portfolio from './Page_3/Portfolio/Portfolio';

function App() {
  return (

    <div >
      <Navber></Navber>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='purchase/:purchaseId' element={
          <RequireAuth>
            <Updatepage></Updatepage>
          </RequireAuth>

        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>


        <Route path='*' element={<Notfound></Notfound>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
