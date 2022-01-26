import React from "react";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import { Link, NavLink, Route } from "react-router-dom";
import { Container, Button, Navbar, Nav } from "react-bootstrap";
import jam3yaStore from "../stores/jam3yaStore";
import Home from "./Home";

function MyNavbar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          lets Save Your Money {authStore.user ? authStore.user.username : ""}
        </Navbar.Brand>
        <Nav className="me-auto" variant="light">
          <Nav.Item>
            <NavLink to="/">Home</NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink to="/jam3yalist">Jam3eyat</NavLink>
          </Nav.Item>
          <Nav.Item>
            {authStore.user ? (
              <Button onClick={authStore.logout}>Logout</Button>
            ) : (
              <>
                <SignUpModal />
                <SignInModal />
              </>
            )}
          </Nav.Item>
        </Nav>
      </Container>

      <Nav className="nav">
        <li class="nav-item welcome"></li>

        <li></li>
        <li></li>
      </Nav>
    </Navbar>
  );
}

export default observer(MyNavbar);