import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Myabout from './About';
import "./style.css";
import { About1 } from './About';
import Mybootstrappage from './Mybootstrappage';
import Myreactbootstrap from './Myreactbootstrap';
import Muipage from './Muipage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <h1>hello sankalp</h1>
   <input/>
   <h3>this is a webpage in react</h3>
   <h5>this is a new module page in react</h5>
   <p>this is a new page in web program in react</p>
   <Myabout></Myabout>
   <About1></About1>
   <Mybootstrappage></Mybootstrappage>
   <h1>react bootstrap</h1>
   <Myreactbootstrap></Myreactbootstrap>
   <h1>Mui components</h1>
   <Muipage></Muipage>

  </React.StrictMode>
);


