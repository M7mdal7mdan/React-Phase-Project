import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar-dark bg-dark padding-default">
      {/* <Link className="navbar-brand" to="/">
        🪄Home🪄
      </Link> */}
      <img />
      <h4>Jam3ya</h4>
      {/* {!auth.user ? (
        <>
          <h4>Sign in</h4>
          <h4>Sign up</h4>
        </>
      ) : (
        <h4>Log out</h4>
      )} */}
    </nav>
  );
}

export default Navbar;
