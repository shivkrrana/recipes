import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import "./RegisterStyle.css"

function RegisterView() {
  const history = useNavigate();
  const [user, setUser] = useState({
              email:"",
              password:"",
              cpassword:""
  });

  const handleInput = (e)=>{

    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]:value})
    console.log(name, value)
  };

  const postData = async(e) =>{

    e.preventDefault();
    const {email, password, cpassword} = user;

    const result = await fetch("/signup",{
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,password,cpassword
      })
    })

    const data = await result;
    if(data.status === 400 || !data)
    {
      window.alert("Enter Correct Inputs")
      console.log("Invalid Registration")
    }
    else if(data.status === 422)
    {
      window.alert("Email already Exist")
    }
    else if(data.status === 401)
    {
      window.alert("Password not Matched")
    }

    else{
      window.alert("Registration Successful")
      console.log("Registration Successful")
      history("/login")
    }

    

    
  }

 

  return (
    <div className="form_container">
      <form onSubmit={postData} method="POST">
        <div className="container">
          <h1>Create <span>A</span>count</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" onChange={handleInput} required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" onChange={handleInput} required />

          <label htmlFor="psw-repeat"><b>Confirm Password</b></label>
          <input type="password" placeholder="Confirm Password" name="cpassword" onChange={handleInput} required />

          <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>

          <div className="clearfix">
            <button type="submit" className="signupbtn">Sign Up</button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default RegisterView;
