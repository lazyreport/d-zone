import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  useEffect(() => {
    showButton();
  }, []); /* 작은화면에서 리프레쉬할때 로그인버튼 안보이게.. 아니 ㅅㅂ 머지? 이해안댐 */


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/img/logo_dzone_160x40.png" alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i class={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Button
                buttonStyle={click ? "btn--primary" : "btn--white-outline"}
              >
                <Link
                  to="/user-guide"
                  onClick={closeMobileMenu}
                  className="btn-mobile"
                >
                  {click ? (
                    "이용 안내"
                  ) : (
                    <img
                      className="nav-link-img"
                      src="/img/call-center.png"
                      alt="call center"
                    />
                  )}
                </Link>
              </Button>
            </li>

            <li className="nav-item">
              <Button buttonStyle={click ? "btn--primary" : "btn--navbar"} buttonSize="btn--large-outline">
                <Link
                  to="/FAQ"
                  onClick={closeMobileMenu}
                  className="btn-mobile"
                >
                  FAQ
                </Link>
              </Button>
            </li>
            <li className="nav-item">
              <Button buttonStyle="btn--gradient" buttonSize="btn--large">
                <Link
                  to="/log-in"
                  onClick={closeMobileMenu}
                  className="btn-mobile"
                >
                  Log In
                </Link>
              </Button>
            </li>
            <li className="nav-links-mobile">
              <Button buttonStyle={click && "btn--primary"}>
                <Link to="/sign-up" onClick={closeMobileMenu}>
                  Sign Up
                </Link>
              </Button>
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn--outline"><Link to="/log-in" className="btn-mobile">Log In</Link></Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
