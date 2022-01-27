import React, { Component } from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Container } from 'react-bootstrap';
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import { Link, NavLink, Route } from "react-router-dom";


function MyNavbar() { {
    return <>
      
  <Navbar sticky="top" bg="dark" variant="dark" >
    <Container>
      <Nav.Item  class="navbar-brand">
      <Link to ="/">
      <img src="https://www.inventicons.com/uploads/iconset/450/wm/512/Money-saving-15.png" width="45" alt="" class="d-inline-block align-middle mr-2"/>
      </Link>
      <span class="text-uppercase font-weight-bold">&nbsp;&nbsp;Lets Save Your Money {authStore.user ? authStore.user.username : ""}</span>
      </Nav.Item>
      
    
    {/* <Navbar.Brand href="#home">Lets Save Your Money {authStore.user ? authStore.user.username : ""}</Navbar.Brand> */}
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/jam3yalist">Jam3ya List</Nav.Link>
      
      
            {authStore.user ? (
              <>
              <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
              <Nav.Item>
              <Button variant='outline-secondary' onClick={authStore.logout}>Logout</Button>
           </Nav.Item>
            </>
           ) : (
             <>
              <Nav.Item >
                <SignUpModal /></Nav.Item>
                <Nav.Item className="mx-1">
                <SignInModal />
                </Nav.Item ></>
            )}
          
    </Nav>
    </Container>
  </Navbar>
  

    </>;
  }
}
export default observer(MyNavbar);

