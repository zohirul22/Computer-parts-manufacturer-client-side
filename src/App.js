import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page_1/Home/Home/Home';
import Navber from './Page_1/Home/Navber/Navber';
import Updatepage from './Page_1/Updatepage/Updatepage';
import Login from './page_2/Login/Login';
import Notfound from './page_2/Notfound/Notfound';
import RequireAuth from './page_2/RequireAuth/RequireAuth';
import SignUp from './page_2/SignUp/SignUp';
import Blogs from './Page_3/Blogs/Blogs';
import Portfolio from './Page_3/Portfolio/Portfolio';
import Addreview from './Page_4/Dashboard/Addreview';
import Dashboard from './Page_4/Dashboard/Dashboard';
import Myorders from './Page_4/Dashboard/Myorders';
import Myprofile from './Page_4/Dashboard/Myprofile';

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

        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route path='myorders' element={<Myorders></Myorders>}></Route>
          <Route path="addreview" element={<Addreview></Addreview>}></Route>
          <Route path="myprofile" element={<Myprofile></Myprofile>}></Route>
        </Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>


        <Route path='*' element={<Notfound></Notfound>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
