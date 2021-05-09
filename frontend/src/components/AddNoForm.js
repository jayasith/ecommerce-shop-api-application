import React, { useState, useContext } from "react";
import { GoDeviceMobile } from "react-icons/go";
import { MdLockOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "./styles/PaymentForms.css";
import Context from "./contexts/Context";

function AddNoForm(props) {
  const context = useContext(Context);

  const { city, email, state, streetaddress } = props.delivery;

  const [send, setSend] = useState(true);
  const [mobileno, setMobileno] = useState("");
  const [code, setCode] = useState("");

  const codeHandle = async (e) => {
    const mobile = { mobileno, code };

    try {
      const mobileRespons = await fetch(`http//localhost:9090/rest/mobile`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mobile),
      });
      if (mobileRespons.ok) {
        setCode("");
        setMobileno("");
        toast.success("Your payment successful");
        const orderResponse = await fetch(`http//localhost:9090/rest/order`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        });
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
            back
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
