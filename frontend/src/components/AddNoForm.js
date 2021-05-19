import React, { useState, useContext } from "react";
import { GoDeviceMobile } from "react-icons/go";
import { MdLockOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "./styles/PaymentForms.css";
import Context from "./contexts/Context";

function AddNoForm(props) {
   const context = useContext(Context);
  const products = [...context.products]
  const buyerid = context.userAuth

  const { city, state, streetaddress } = props.delivery;

  const [send, setSend] = useState(true);
  const [mobileno, setMobileno] = useState("");
  const [code, setCode] = useState("");
  
  var email
  
  const getEmail = async()=>{
   
      const respons = await fetch(
        `http://localhost:9090/rest/email/${buyerid}/`  
      )
       email = await respons.text();

    }
 
    getEmail();

    const paymentconfirm = (serviceID, templateId, variables) => {
    toast.success("Your payment successful");
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }

  const paymentemail = () => {
        const templateId = 'template_3e10xcd';
        const serviceID = 'service_f5upd53';
        console.log(email);
        paymentconfirm(serviceID, templateId, { to_name:" ", from_name: "shop.com", reply_to:email})
      
    }

  const codeHandle = async (e) => {
    paymentemail();
    const mobile = { mobileno, code };
    const order = { buyerid, email,city, state,products, streetaddress };
    console.log(order);
    console.log(mobile);

    try {
      const mobileRespons = await fetch(`http://localhost:9090/rest/order/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
        
      });
      if (mobileRespons.ok) {
        setCode("");
        setMobileno("");
        toast.success("Your payment successful");
        const orderResponse = await fetch(`http//localhost:9090/rest/`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order),
        });
        console.log(order);
      } else {
        toast.error("Your payment unsuccessful");
      }
    } catch (err) {
      toast.error("something went wrong");
    }
  };

  return (
    <div>
      <h1>Pay by phone number</h1>
      {send ? (
        <div className="cdForm">
          <label>Phone number</label>
          <input
            type="phone"
            onChange={(e) => setMobileno(e.target.value)}
            required
            className="numberInput"
          />
          <GoDeviceMobile className="mobileIcon" />
          <button
            type="submit"
            className="sendBt"
            onClick={() => setSend(false)}
          >
            send
          </button>
        </div>
      ) : (
        <div className="cdForm">
          <label> Enter code</label>
          <br />
          <input
            type="text"
            required
            placeholder="4-digit"
            className="codeInput"
            onChange={(e) => setCode(e.target.value)}
          />
          <MdLockOutline className="lockIcon2" />
          <br />
          <button className="backBt" onClick={() => setSend(true)}>
          </button>
          <button onClick={(e) => codeHandle(e)} className="submitBt">
            submit
          </button>
        </div>
      )}
    </div>
  );
}

export default AddNoForm;
