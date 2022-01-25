import React from "react";
import { useParams } from "react-router-dom";
import jam3yaStore from "../stores/jam3yaStore";
import { Container, Nav, Card, Button } from "react-bootstrap";
import { observer } from "mobx-react";
import moment from "moment";
function Detail() {
  const slug = useParams().slug;
  if (jam3yaStore.loading) {
    return <h1>Loading</h1>;
  }
  let jam3ya = jam3yaStore.jam3yas.find((j) => j.slug === slug);
  const startDate = moment(jam3ya.startDate).format("YYYY-MM-DD");
  const endDate = moment(jam3ya.endDate).format("YYYY-MM-DD");

  // startDate = startDate.getUTCHours();
  return (
    <Container fluid>
      <Card
        className="d-flex align-items-center"
        style={{ backgroundColor: "#B1D0E0" }}
      >
        <img className="img-detail" src={jam3ya.image} alt="jam3ya" />

        <Card.Title style={{ marginTop: "10px", fontWeight: "bold" }}>
          <h4>Jam3ya Details</h4>
        </Card.Title>

        <Card.Body>
          <Card.Title>Jam3ya title: {jam3ya.title}</Card.Title>
          <Card.Title>Jam3ya owner: {jam3ya.author.username}</Card.Title>
          <Card.Title>Start date: {startDate}</Card.Title>
          <Card.Title>End date: {endDate}</Card.Title>
          <Card.Title>
            Remaining spots:{" "}
            {jam3ya.limit - jam3ya.users.length > 0
              ? jam3ya.limit - jam3ya.users.length
              : "full"}
          </Card.Title>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default observer(Detail);
