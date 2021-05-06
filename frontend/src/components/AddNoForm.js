import React, {useState} from 'react'
import {GoDeviceMobile} from "react-icons/go"
import {MdLockOutline} from "react-icons/md"
import "./styles/PaymentForms.css"



function AddNoForm() {

    const[send,setSend] = useState(true);

    return (
        <div>
            <h1>Pay by phone number</h1>
            {(send) ?(<div className="cdForm">
            
                    <label >Phone number</label>
                    <br/>                
                    <input type="phone" required className="numberInput" />
                    <GoDeviceMobile className="mobileIcon"/> 
                    <br/>  
                    <button className="sendBt" onClick={()=>setSend(false)}>send</button>            
                    <br/>
               </div>) :
                    (
                    <form className="cdForm">  
                        <label> Enter code</label>
                        <br/>              
                        <input type="text" required placeholder="4-digit" className="codeInput"  />
                        <MdLockOutline className="lockIcon2" />
                        <br/>
                        <button className="backBt" onClick={()=>setSend(true)}>back</button>
                        <button className="submitBt">submit</button> 
                    </form> ) }
        </div>
    )
}

export default AddNoForm
