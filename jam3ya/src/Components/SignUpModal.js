import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import authStore from "../stores/authStore";

function SignUpModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signUp(user);
    setIsOpen(false);
  };

  return (
    <>
      <Button className="delete" onClick={() => setIsOpen(true)}>
        Sign Up
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <input
              name="username"
              value={user.username}
              type="text"
              placeholder="username here"
              onChange={handChange}
            />

            <input
              name="password"
              value={user.password}
              type="password"
              placeholder="password here"
              onChange={handChange}
            />
            <input
              name="email"
              value={user.email}
              type="text"
              placeholder="email here"
              onChange={handChange}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SignUpModal;
