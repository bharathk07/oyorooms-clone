import React from 'react'
// import {BrowserRouter as Router, Link} from 'react-router-dom';

const NavbarHome = () => {
  return (
    <div>
      <div className="master-div-navbar">
          <div className="navbar-logo">      
            <img src="/Images/Union.png" alt="Union" />
          </div>
          
          <div className="navbar-right-section">
             <div>
             <a href="https://www.oyorooms.com/wizard/">
                <img src="/Images/becomeMember.png" alt="becomeMember" />
                </a>
              </div>
              <div>
                <img src="/Images/Business.png" alt="" />
              </div>
              <div>
                <img src="/Images/listProperty.png" alt="becomeMember" />
              </div>
              <div>
                <img src="/Images/language.png" alt="language" />
              </div>
              <div>
                  <img src="/Images/profile.png" alt="profile" />
                  <a href="google.com">Login / Signup</a>
                  {/* <p>Login / Signup</p> */}
                </div>
            </div>
          </div>
    </div>
  )
}

export default NavbarHome