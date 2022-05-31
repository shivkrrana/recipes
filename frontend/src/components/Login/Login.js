import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'

 function LoginView() {

  const history = useNavigate();
  const [user, setUser] = useState({
              email:"",
              password:"",
              
  });

  const loginInput = (e)=>{

    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]:value})
    console.log(name, value)
  };

  const login = async(e) =>{

    e.preventDefault();
    const {email, password} = user;

    const result = await fetch("/signin",{
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,password
      })
    })

    const data = await result;
    if(data.status === 400 || !data)
    {
      window.alert("Enter Correct Inputs")
      console.log("Enter Correct Inputs")
    }
    
    

    else{
      window.alert("Login Successful")
      console.log("Login Successful")
      history("/")
    }

    

    
  }


  return (
    <div className="form_container" >
    <form  onSubmit={login} method="POST">
        <div className="container">
          <h1>Sign <span>I</span>n</h1>
          
          <hr style={{margin:"2rem 0"}}/>
      
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" onChange={loginInput} required/>
          
      
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" onChange={loginInput} required/>
          
          
      
          <div className="clearfix">
            
            <button type="submit" className="signupbtn">Sign In</button>
          </div>
          <hr style={{margin:"1rem 0"}}/>
          <div className="signup">New User? <Link to="/register" style={{textDecoration:"none"}}><span>Sign Up</span></Link></div>
        </div>
      </form>
    </div>
  )
}

export default LoginView
