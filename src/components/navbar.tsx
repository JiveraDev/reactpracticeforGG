
// import { Fragment } from "react";
import  NavItem from "./nav-item";
import { LoginButtons } from "./button";
function Navbar() {
  return (
    
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-2 fix-top"
    >
      <div className="container-fluid">
        <div>
          <img src="/Logo_vet.png" alt="VetLoGo" width="50" height="50"  />
        </div>
        <a className="navbar-brand fw-bold ms-3" href="#Hero"
          >VetFocus Care Animal Clinic</a > 

        <button
          className="navbar-toggler"
          id="menuToggle"
          type="button"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end d-none d-lg-block"
          id="navbarNav"
        >
          <NavItem />
          <LoginButtons />
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;