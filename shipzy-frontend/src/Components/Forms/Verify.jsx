import React from "react";
import mailBox from "../../Assets/images/MailBox.png";
import "./index.css";
const Verify = (props) => {
  return (
    <div className="Verify Login">
      <h2 className="Login-head">Verify your account</h2>
      <p className="Verify-text">
        An email has been sent to your Email ID
        <br /> with registration link, click on the link to
        <br /> complete the registration.
      </p>
      <img className="Verify-mail" src={mailBox} alt="" />
      <p className="Verify-re">
        Didn’t get the mail? <span className="Send-again decor">Send again</span>
      </p>
      <p className="Verify-re decor">Verify</p>
    </div>
  );
};
export default Verify;
