import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./appmodules/css/global.css";
import Welcomepage from './appmodules/Welcomepage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import User_Landing from './appmodules/User/dashboard/User_Landing';
import User_Loginpage from './appmodules/User/auth/User_Loginpage';
import User_Registorpage from './appmodules/User/auth/User_Registorpage';
import Myexprpage from './appmodules/User/dashboard/Myexprpage';
import User_Mainpage from './appmodules/User/dashboard/User_Mainpage';
import Myaxiospage from './appmodules/User/dashboard/Myaxiospage';
import Productdetailspage from './appmodules/User/dashboard/Productdetailspage';
import Mygraphpage from './appmodules/User/dashboard/Mygraphpage';
import Mainbranch from './appmodules/User/dashboard/Mainbranch';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path='' element={<Welcomepage/>}></Route>
    <Route path='userlogin' element={<User_Loginpage/>}></Route>
    <Route path='registor' element={<User_Registorpage/>}></Route>
    <Route path='landing' element={<User_Landing/>}>
    <Route path='' element={<User_Mainpage/>}></Route>
       <Route path='' element={<User_Mainpage/>}></Route>
       <Route path='Aboutjsx' element={<Myexprpage/>}></Route>
       <Route path='axiosapi' element={<Myaxiospage/>}></Route>
       <Route path='axiosapi/productdetails/:id' element={<Productdetailspage/>}></Route>
       <Route path='mychart' element={<Mygraphpage/>}></Route>
       <Route path='myprops' element={<Mainbranch/>}></Route>

    </Route>

   </Routes>
   </BrowserRouter>


  </React.StrictMode>
);