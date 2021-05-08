import React from 'react'
import "./styles/Popup.css"
import AddNoForm from "./AddNoForm.js";
import AddCardForm from "./AddCardForm.js";
import {AiOutlineClose} from "react-icons/ai"

function Popup(props) {
    console.log(props)
    return (
        (props.trigger) ? (
            <div className="Popupout">
                <div className="Popupin">
                    <AiOutlineClose onClick={() => props.setTrigger(false)} className="closeIcone"/>
                    {(props.setCard)?(<AddCardForm delivery={props.delivery} />):(<AddNoForm delivery={props.delivery}/>)}
                </div>           
            </div>
        ) :<div></div>
    
    )
}

export default Popup;
