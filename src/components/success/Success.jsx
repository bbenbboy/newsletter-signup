import "./success.scss";
import { iconSuccess } from "../../assets";
import { useState } from "react";
import Signup from "../signup/SignUp";

function Success({ email }) {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(true);
    // console.log("click");
  };
  return close ? (
    <Signup />
  ) : (
    <div className="successContainer">
      <div className="imgContainer">
        <img src={iconSuccess} alt="" />
      </div>
      <div className="textContainer">
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <b>{email}</b>. Please open it
          and click the button inside to confirm your subscription.
        </p>
        <button onClick={handleClose}>Dismiss message</button>
      </div>
    </div>
  );
}

export default Success;
