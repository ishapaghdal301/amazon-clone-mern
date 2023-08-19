import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [udata, setudata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

  const adddata = (e) => {
    const { name, value } = e.target;

    setudata(()=>{
      return{
        ...udata,
        [name]:value
      }
    })
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
              <h1>Sign-Up</h1>

              <div className="form_data">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  onChange={adddata}
                  value={udata.fname}
                  name="fname"
                  id="fname"
                />
              </div>

              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  onChange={adddata}
                  value={udata.email}
                  name="email"
                  id="email"
                />
              </div>

              <div className="form_data">
                <label htmlFor="mobile">Mobile number</label>
                <input
                  type="number"
                  onChange={adddata}
                  value={udata.mobile}
                  name="mobile"
                  id="mobile"
                />
              </div>

              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  onChange={adddata}
                  value={udata.password}
                  name="password"
                  id="password"
                />
              </div>

              <div className="form_data">
                <label htmlFor="passwordg">Password again</label>
                <input
                  type="password"
                  onChange={adddata}
                  value={udata.cpassword}
                  name="cpassword"
                  id="cpassword"
                />
              </div>

              <button
                type="submit"
                onChange={adddata}
                value={udata.fname}
                className="signin_btn"
              >
                Continue
              </button>

              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="/login">Signin</NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
