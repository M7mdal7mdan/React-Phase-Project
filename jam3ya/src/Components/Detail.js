import React from "react";
import { useParams } from "react-router-dom";
import jam3yaStore from "../stores/jam3yaStore";
import { Container, Card, Button } from "react-bootstrap";
import { observer } from "mobx-react";
import moment from "moment";
import authStore from "../stores/authStore";

function Detail() {
  const slug = useParams().slug;
  if (jam3yaStore.loading) {
    return <h1>Loading</h1>;
  }
  let jam3ya = jam3yaStore.jam3yas.find((j) => j.slug === slug);
  const userexist = jam3ya.users.some((u) => u._id === authStore.user._id);
  const startDate = moment(jam3ya.startDate).format("YYYY-MM-DD");
  const endDate = moment(jam3ya.endDate).format("YYYY-MM-DD");
  const handleJoin = () => {
    jam3yaStore.joinJam3ya(authStore.user, jam3ya);
  };
  const handleLeave = () => {
    jam3yaStore.leaveJam3ya(jam3ya._id);
  };
  const checkJam3ya = () => {
    if (jam3ya.startDate) {
      if (new Date(jam3ya.startDate) > new Date()) return true;
      return false;
    }
  };
  return (
    <Container
      fluid
      style={{
        minHeight: "100vh",
        backgroundColor: "#f1a372",
      }}
    >
      <Card
        className="d-flex align-items-center"
        style={{ backgroundColor: "#B1D0E0" }}
      >
        <img className="img-detail" src={jam3ya.image} alt="jam3ya" />

        <Card.Title style={{ marginTop: "30px", fontWeight: "bold" }}>
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
        </Card.Body>
        {authStore.user && checkJam3ya() && (
          <>
            {!userexist && jam3ya.users.length < jam3ya.limit && (
              <Button variant="primary" onClick={handleJoin}>
                Join
              </Button>
            )}

            {userexist && (
              <Button variant="primary" onClick={handleLeave}>
                Leave
              </Button>
            )}
          </>
        )}
      </Card>
    </Container>
  );
}

export default observer(Detail);
