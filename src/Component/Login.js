import React from 'react'
import { FcGoogle } from 'react-icons/fc';


import { BsFacebook } from 'react-icons/bs';



export default function Login() {
  document.title="Login"
  return (
    <div>
      {/* LOGO DIV */}


      <div className="logo">my logo will be here</div>
      <div id='login' className="login">Login
        <div id='two' className="needaccount">Need an account? <a href="#">Sign up</a></div>
        <div id='three' className="text">Email or Username</div>
        <div className="input"> <input type="text" /></div>
        <div className="next">
          <button type="button" class="btn btn-primary">Submit</button>
        </div>

      </div>
      <div className="footer">
        <button type="button" class="btn btn-outline-secondary"> <FcGoogle /> Log in with Google  </button>
        <button type="button" class="btn btn-outline-secondary mx-3"> <BsFacebook /> Log in with Facebook</button>
      </div>





    </div>
  )
}
