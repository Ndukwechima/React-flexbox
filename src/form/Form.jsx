import React from "react";
import "./Form.css";
import Profile from "../images/chima.jpg";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, password, info);
  }
  return (
    <main>
      <div className="parent-container">
        {/* PROFILE PICS AND TEXT */}
        <div className="profile-div">
          <img src={Profile} alt="profile pic" />
          <h4>Chima Aruby</h4>
        </div>
        {/* End OF PROFILE PIC */}

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              {/* <label htmlFor="name">Full name:</label> */}
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder="Full name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              {/* <label htmlFor="email">Email:</label> */}
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              {/* <label htmlFor="password">Password:</label> */}
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              {/* <label htmlFor="message">About yourself:</label> */}
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                value={info}
                placeholder="About yourself"
                onChange={(e) => setInfo(e.target.value)}
              />
            </div>
          </div>
          <input
            className="inp"
            type="submit"
            value="Submit"
            name=""
            id="info"
          />
        </form>
        {/* END OF FORM */}
      </div>
    </main>
  );
}

export default Form;
