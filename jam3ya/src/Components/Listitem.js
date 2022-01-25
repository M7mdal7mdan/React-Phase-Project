import { Button, Card } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UpdateJam3yaModal from "./UpdateJam3yaModal";
import jam3yaStore from "../stores/jam3yaStore";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import moment from "moment";
function Listitem(props) {
  const jam3ya = props.jam3ya;
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
    jam3yaStore.leaveJam3ya(jam3ya._id);
  };
  const startDate = moment(jam3ya.startDate).format("YYYY-MM-DD");
  const endDate = moment(jam3ya.endDate).format("YYYY-MM-DD");
  const checkJam3ya = () => {
    if (jam3ya.startDate) {
      if (new Date(jam3ya.startDate) > new Date()) return true;
      return false;
    }
  };

  return (
    <>
      <div>
        <Card
          border="dark"
          style={{ width: "20rem" }}
          className="mb-4 text-center"
        >
          <Card.Title>{jam3ya.title}</Card.Title>
          <Link to={`/jam3ya/${jam3ya.slug}`}>
            <Card.Img variant="top" src={jam3ya.image} className="img-card" />
          </Link>
          <Card.Body>
            <Card.Text>
              Start date:&nbsp;
              {startDate ? startDate : "No date provided"}
            </Card.Text>
            <Card.Text>
              End date:&nbsp;
              {endDate ? endDate : "No date provided"}
            </Card.Text>
            {authStore.user && checkJam3ya() && (
              <>
                {!userexist && (
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
