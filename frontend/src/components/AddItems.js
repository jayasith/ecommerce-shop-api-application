import React from 'react'
import "./styles/DeliveryForm.css";

import "./styles/Form.css";

function AddItems() {
    return (
        <div class="p1" align="center">
            <form >
            <table><h1>Add Item for sell</h1><br/>
                <label htmlFor = "iname">Item Name</label><br/>  
                <input type="text" name="iname" ></input><br/>
                <label htmlFor = "category">Category</label><br/>
                <input type="text" name="category"></input><br/>
                <label htmlFor = "description">Description</label><br/>
                <input type="text" name="description"></input>
                <label htmlFor = "itempic">Image Url</label><br/>
                <input type="text" name="description"></input><br/>
                <label htmlFor = "iprice">Item Price</label><br/>
                <input type="text" name="iprice" ></input><br/>
                <button class="btn" value="SUBMIT">SUBMIT</button>
            </table>
            </form>
            
        </div>
    )
}

export default AddItems
