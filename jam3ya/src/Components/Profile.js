import React, { useState } from "react";
import authStore from "../stores/authStore";
import jam3yaStore from "../stores/jam3yaStore";
import "./Card.css";
import {
  Button,
  Modal,
  Form,
  Container,
  Badge,
  InputGroup,
} from "react-bootstrap";
import Listitem from "./Listitem";
import { observer } from "mobx-react";
function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    username: authStore.user.username,
    email: authStore.user.email,
  });
  const handChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });
  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.update(user);
    setIsOpen(false);
  };
  let jam3yasList = jam3yaStore.jam3yas.filter((jam3ya) =>
    jam3ya.users.some((u) => u._id === authStore.user._id)
  );
  let monthlyArr = jam3yasList.map((jam3ya) => jam3ya.amount);
  let monthlyPay = 0;
  if (monthlyArr.length != 0) {
    monthlyPay = monthlyArr.reduce((a, b) => a + b);
  }

  const jam3yasListView = jam3yasList.map((jam3ya) => (
    <Listitem jam3ya={jam3ya} key={jam3ya._id} />
  ));
  return (
    <Container className="background"
    >
      <Container>
       <Button variant='secondary' className="delete  align-right" onClick={() => setIsOpen(true)}>
       Update Profile
     </Button>
     </Container>
     
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title >Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <InputGroup.Text>Username</InputGroup.Text>
              <Form.Control
                name="username"
                value={user.username}
                type="text"
                placeholder="username here"
                onChange={handChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Password</InputGroup.Text>
              <Form.Control
                name="password"
                value={user.password}
                type="password"
                placeholder="password"
                onChange={handChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Email</InputGroup.Text>
              <Form.Control
                name="email"
                value={user.email}
                type="text"
                placeholder="email here"
                onChange={handChange}
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <h2 style={{ marginBottom: "50px", color:"white", marginTop:"15px" }}>
        Monthly payment: {monthlyPay} <Badge bg="secondary">KD</Badge>
      </h2>
      <div
        className="card-flex"
        
      >
        {jam3yasListView}
      </div>
    </Container>
  );
}

export default observer(Profile);
