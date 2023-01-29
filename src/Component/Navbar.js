import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbarcolor navsticky">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Inspiration</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Features
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Fiction</a></li>
            <li><a className="dropdown-item" href="#">Nature Blogs</a></li>
           
            <li><a className="dropdown-item" href="#">World Around Us</a></li>
          </ul>
        </li>
       
      </ul>
      <li id='help' className="nav-item dropdown">
          <a  className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Help
          </a>
          <div  id='help1' className="dropdown-menu ">

           <div id="helpcenter">

           <li><a  id='helpcenter1' className="dropdown-item" href="#">Help Center</a></li>
         


           </div>

            <li><a className="dropdown-item" href="#">Contact Support</a></li>
           
          </div>
        </li>
        <li id='login1' className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Login" target="_blank">Login</a>
        </li>
     
      
    </div>
  </div>
</nav>
    </div>
  )
}
