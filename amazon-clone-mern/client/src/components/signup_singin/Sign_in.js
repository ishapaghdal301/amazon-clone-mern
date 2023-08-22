import React, { useState } from "react";
import "./signup.css";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sign_in = () => {
  const [logdata, setData] = useState({
    email: "",
    password: "",
  });

  const adddata = (e) => {
    const { name, value } = e.target;
    setData(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
  };

  const senddata = async (e) => {
    e.preventDefault();

    const { email, password } = logdata;

    const res = await fetch("http://localhost:8005/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 400 || !data) {
      toast.warn("Invalid Details !", {
        position: "top-center",
      });
    } else {
      toast.success("User Valid!", {
        position: "top-center",
      });
      setData({ ...logdata, email: "", password: "" });
    }
  };

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="signupimg" />
          </div>

          <div className="sign_form">
            <form method="POST">
              <h1>Sign-In</h1>

              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  onChange={adddata}
                  value={logdata.email}
                  name="email"
                  id="email"
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={adddata}
                  value={logdata.password}
                  id="password"
                  placeholder="At least 6 characters"
                />
              </div>

              <button type="submit" onClick={senddata} className="signin_btn">
                Continue
              </button>
            </form>
          </div>

          <div className="create_accountinfo">
            <p>New to Amazon?</p>
            <NavLink to="/register">
              <button> Create your Amazon Account</button>
            </NavLink>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Sign_in;
