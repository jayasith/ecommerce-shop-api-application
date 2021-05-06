import React from 'react'
import "./styles/Popup.css"
import AddNoForm from "./AddNoForm.js";
import AddCardForm from "./AddCardForm.js";
import {AiOutlineClose} from "react-icons/ai"

function Popup(props) {
    return (
        (props.trigger) ? (
            <div className="Popupout">
                <div className="Popupin">
                    <AiOutlineClose onClick={() => props.setTrigger(false)} className="closeIcone"/>
                    {(props.setCard)?(<AddCardForm/>):(<AddNoForm/>)}
                </div>           
            </div>
        ) :<div></div>
    
    )
}

export default Popup;
