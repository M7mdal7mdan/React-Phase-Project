import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import React, { useState } from "react";
import jam3yaStore from "../stores/jam3yaStore";
import "react-datepicker/dist/react-datepicker.css";


export default function CreateJam3yaModal(props) {

  const [jam3ya, setJam3ya] = useState({
    title: "",
    image: "",
    amount:"",
    limit: "",
    startDate: "",
    endDate:"",
    
  });
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  console.log("🚀 ~ file: CreateJam3yaModal.js ~ line 10 ~ CreateJam3yaModal ~ jam3ya", jam3ya)

  const handleChange = (e) => {
    setJam3ya({ ...jam3ya, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(jam3ya);
    jam3yaStore.createJam3ya(jam3ya);
    setJam3ya({
      title: "",
      image: "",
      amount:"",
      limit: "",
      startDate: "",
      endDate:"",
    })
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
                <Form.Control
                  value={jam3ya.title}
                  type="text"
                  name="title"
                  onChange={handleChange}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroup.Text>Image</InputGroup.Text>
                <Form.Control
                  value={jam3ya.image}
                  type="text"
                  name="image"
                  onChange={handleChange}
                />
              </InputGroup>
              <br />
             
              <InputGroup>
                <InputGroup.Text>Amount</InputGroup.Text>
                <Form.Control
                  type="number"
                  name="amount"
                  onChange={handleChange}
                  value={jam3ya.amount}
                />
                </InputGroup>
                <br />
              <InputGroup>
                <InputGroup.Text>Limit</InputGroup.Text>
                <Form.Control
                  type="number"
                  name="limit"
                  onChange={handleChange}
                  value={jam3ya.limit}
                />
                </InputGroup>
              <br />
              <InputGroup>
                <InputGroup.Text>Start Date</InputGroup.Text>
                <Form.Control
                type="date"
                name="startDate"
                onChange={handleChange}
                value={jam3ya.startDate}
                />
                {/* <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      timeInputLabel="Time:"
      dateFormat="Pp"
      showTimeInput
      minDate={new Date()}
      isClearable
      scrollableMonthYearDropdown
     
    /> */}
    
               
                </InputGroup>
              <br />
              <InputGroup>
                <InputGroup.Text>End Date</InputGroup.Text>
                <Form.Control
                type="date"
                name="endDate"
                onChange={handleChange}
                  value={jam3ya.endDate}
                />
                {/* <DatePicker
      selected={endDate}
      onChange={(date) => setEndDate(date)}
      timeInputLabel="Time:"
      dateFormat="yyyy-MM-dd"
      showTimeInput
      minDate={new Date()}
      isClearable
     scrollableMonthYearDropdown
     onChange={handleChange}
     value={jam3ya.endDate}
    /> */}
                </InputGroup>
              <br />
              {/* <InputGroup>
                <InputGroup.Text>Users</InputGroup.Text>
                <Form.Control
                  value={jam3ya.users}
                  type="text"
                  name=""
                  onChange={handleChange}
                />
              </InputGroup> */}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleSubmit}>
              Create Jam3ya
            </Button>
          </Modal.Footer>
        </Modal>
  );
}
