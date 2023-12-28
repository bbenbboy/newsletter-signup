import "./signup.scss";
import { useState } from "react";
import { desktop, iconList } from "../../assets";
import Success from "../success/Success";

const lists = [
  {
    img: iconList,
    desc: "Product discovery and building what matters",
  },
  { img: iconList, desc: "Measuring to ensure updates are a success" },
  { img: iconList, desc: "And much more!" },
];

function Signup() {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const getEmail = (e) => {
    setEmail(e.target.value);
    setValid(false); // Reset validity when the email is changed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(email)) {
      console.log("invalid email");
      setValid(false);
    } else {
      console.log("valid email");
      console.log(email);
      setValid(true);
      setSubmitted(true);
    }
  };

  return (
    <div>
      {submitted && valid ? (
        <Success />
      ) : (
        <div className="signupContainer">
          <div className="textContainer">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div className="listContainer">
              {lists.map((list, i) => (
                <div key={i} className="list">
                  <img src={list.img} alt="" />
                  <p>{list.desc}</p>
                </div>
              ))}
            </div>
            <form action="">
              <div className="messageContainer">
                <label htmlFor="email">Email address</label>
                <p className={`${!valid ? "hidden" : ""}`}>
                  Valid email required
                </p>
              </div>
              <input
                type="email"
                placeholder="email@company.com"
                className={`emailInput ${!valid ? "" : "backgroundRed"}`}
                onChange={getEmail}
              />
              <input
                type="submit"
                value="Subscribe to monthly newsletter"
                className="btn"
                onClick={handleSubmit}
              />
            </form>
          </div>
          <div className="imgContainer">
            <img src={desktop} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
