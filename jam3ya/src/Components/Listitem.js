import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Updatejam3yaModal from "./Updatejam3yaModal";
import jam3yaStore from "../stores/jam3yaStore";

export default function Listitem(props) {
  const jam3ya = props.jam3ya;
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const handleDelete = () => {
    jam3yaStore.deletejam3ya(jam3ya.id);
  };
  return (
    <div className="group">
      <Link to={`/jam3ya/${jam3ya.slug}`}>
        <div style={{ animationDelay: "0.1" }} className="chatlist__item">
          <div className="avatar">
            <div className="avatar-img">
              <img src={jam3ya.image} alt="#" />
            </div>
          </div>
          <div className="userMeta">
            <p>{jam3ya.title}</p>
            <p>{jam3ya.limit}</p>
            <p>{jam3ya.startDate}</p>
            <p>{jam3ya.endDate}</p>
            <p>{jam3ya.users}</p>
            
          </div>
        </div>
      </Link>

      <Button className="delete" onClick={handleDelete}>
        Delete
      </Button>
      <Button className="delete" onClick={openModal}>
        Update
      </Button>
      <UpdateJam3yaModal
        isOpen={isOpen}
        closeModal={closeModal}
        jam3ya={jam3ya}
        updatejam3ya={jam3yaStore.updatejam3ya}
      />
    </div>
  );
}
