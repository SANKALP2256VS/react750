import React from 'react';
import App_Header from '../../shares/App_Header';
import App_Sidebare from '../../shares/App_Sidebare';

function User_Landing()
{
  return(
    <div className='container-fluid'>
      <div className='row'>
        <div className='col g-0'>
        <App_Header></App_Header>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-2'>
          <App_Sidebare></App_Sidebare>
        </div>
        <div className='col-md-10'>
        <h1>content aera</h1>
      </div>
      </div>
    </div>
  )

}
export default User_Landing