import React from "react";
import { Nav } from "react-bootstrap";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import authStore from "../stores/authStore";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Nav className="justify-content-end" bg="light" expand="lg">
      <li className="nav-item welcome">
        lets save your money {authStore.user ? authStore.user.username : ""}
      </li>

      {authStore.user ? (
        <li className="nav-item">
          <Button onClick={authStore.logout}>Logout</Button>
          <Link to="/profile">Profile</Link>
        </li>
      ) : (
        <>
          <SignUpModal />
          <SignInModal />
        </>
      )}
    </Nav>
  );
}

export default observer(Navbar);
