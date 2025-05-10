import React from 'react';
import Delhibranch from './Delhibranch';
import Noidabranch from './Noidabranch';

function Mainbranch()
{
    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1>Parent page</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 p-3 bg-info'>
                    <Noidabranch></Noidabranch>

                </div>
                <div className='col-md-6 p-3 bg-warning'>
                    <Delhibranch></Delhibranch>
                </div>
            </div>
        </div>
    )
}
export default Mainbranch
