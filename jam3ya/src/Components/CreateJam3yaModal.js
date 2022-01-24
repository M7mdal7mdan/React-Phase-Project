import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import jam3yaStore from "../stores/jam3yaStore";

export default function CreateJam3yaModal(props) {
  const [jam3ya, setJam3ya] = useState({
    title: "",
    image: "",
    limit: "",
    startDate: "",
    endDate:"",
    users:[],
  });
  const handleChange = (e) => {
    setJam3ya({ ...jam3ya, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    jam3yaStore.createJam3ya(jam3ya);
    props.closeModal(); // this is to close the modal that is shown
  };
  return (
    <Modal centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create Jam3ya</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>Title</InputGroup.Text>
            <Form.Control type="text" name="title" onChange={handleChange} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Image</InputGroup.Text>
            <Form.Control type="text" name="image" onChange={handleChange} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Limit</InputGroup.Text>
            <Form.Control
              type="text"
              name="limit"
              onChange={handleChange}
            />
            <InputGroup>
            <InputGroup.Text>Satrt Date</InputGroup.Text>
            <Form.Control type="text" name="startdate" onChange={handleChange} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>End Date</InputGroup.Text>
            <Form.Control type="text" name="enddate" onChange={handleChange} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>users</InputGroup.Text>
            <Form.Control type="text" name="users" onChange={handleChange} />
          </InputGroup>
          <br />
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Create Jam3ya
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
