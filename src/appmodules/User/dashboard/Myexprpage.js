import React, { useState } from 'react';

function Myexprpage() {
    
    const [sv,sf]=useState("rohit")
    const Name = "bobby sankalp";
    let age = 80;
    const students = ["rohit", "ramu", "jay", "choche", "amar", "raj"]
     
    const myfunc = ()=>{
        sf("this is a mohit");
    }

    const abc = (e)=>
    {
        console.log(e);
        sf(e.target.value);
    }

    return(
        <div className='cantainer'>
            <div className='row'>
                <div className='col-12 page'>
                    <h1>sankalp</h1>
                    <h2>username is: {Name} ang is : {age}</h2>
                    <h3>{students}</h3>
                    <h3>{40+50}</h3>
                    <h3>{age>=100 ? 'ok' : 'no'}</h3>
                    <p>{sv}</p>
                    <input type="button" value="change" onClick={myfunc}/>
                    <input type="text" value={sv} onInput={abc}/>
                </div> 
            </div>
        </div>
    )
}
export default Myexprpage