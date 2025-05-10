import React from 'react';
import { FaUserSecret } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Welcomepage()
{
    return(
        <div class="container py-5">
        <h2 class="text-center md-4">Select Account Type to Login</h2>
        <div class="row g-10 justify-content-center">
           <div class="col-md-4">
            <div class="card login-card">
              <div class="card-body text-center">
              <h1><FaUserSecret /></h1>
                <h5 class="card-title">Admin Login</h5>
                <a herf ="#" class="btn btn-primary">
                  Login as Admin
                </a>
              </div>
            </div>
          </div>
  
          <div class="col-md-4">
            <div class="card login-card">
              <div class="card-body text-center">
                <h1><FaUserSecret /></h1>
                <h5 class="card-title">User Login</h5>
                <Link to ='userlogin' class="btn btn-primary">
                  Login as User
                </Link>
              </div>
            </div>
          </div> 
  
        </div>
      </div>
    )
}

export default Welcomepage