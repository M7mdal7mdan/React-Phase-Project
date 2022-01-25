import { Button, Card } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UpdateJam3yaModal from "./UpdateJam3yaModal";
import jam3yaStore from "../stores/jam3yaStore";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
function Listitem(props) {
  const jam3ya = props.jam3ya;
  console.log("🚀 ~ file: Listitem.js ~ line 10 ~ Listitem ~ jam3ya", jam3ya);
  const userexist = jam3ya.users.some((u) => u._id === authStore.user._id);
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const handleDelete = () => {
    jam3yaStore.deletejam3ya(jam3ya);
  };
  const handleJoin = () => {
    jam3yaStore.joinJam3ya(authStore.user, jam3ya);
  };
  const handleLeave = () => {
    jam3yaStore.leaveJam3ya(authStore.user, jam3ya._id);
  };

  const checkJam3ya = () => {
    if (jam3ya.startDate) {
      if (new Date(jam3ya.startDate) > new Date()) return true;
      return false;
    }
  };

  return (
    <>
      <div>
        <Card style={{ width: "20rem" }}>
          <Card.Title>{jam3ya.title}</Card.Title>
          <Link to={`/jam3ya/${jam3ya.slug}`}>
            <Card.Img variant="top" src={jam3ya.image} />
          </Link>
          <Card.Body>
            <Card.Text>
              Start date:{" "}
              {jam3ya.startDate ? Date(jam3ya.startDate) : "No date provided"}
            </Card.Text>
            <Card.Text>
              End date:{" "}
              {jam3ya.endDate ? Date(jam3ya.endDate) : "No date provided"}
            </Card.Text>
            {authStore.user && (
              <>
                {checkJam3ya() && !userexist && (
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
            <Button className="delete" onClick={handleDelete}>
              Delete
            </Button>
            <Button className="delete" onClick={openModal}>
              Update
            </Button>
          </Card.Body>
        </Card>
      </div>

      <UpdateJam3yaModal
        isOpen={isOpen}
        closeModal={closeModal}
        jam3ya={jam3ya}
        updatejam3ya={jam3yaStore.updatejam3ya}
      />
    </>
  );
}
export default observer(Listitem);
