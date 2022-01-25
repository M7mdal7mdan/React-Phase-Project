import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UpdateJam3yaModal from "./UpdateJam3yaModal";
import jam3yaStore from "../stores/jam3yaStore";
import authStore from "../stores/authStore";

export default Listitem

function Listitem(props) {
  const jam3ya = props.jam3ya;
  
  const [isOpen, setIsOpen] = useState(false);

  const checkJam3ya = () => {
    if (jam3ya.startDate) {
      if (new Date(jam3ya.startDate) > new Date()) return true;
      return false;
    }
  };
 const author=jam3ya.author;


  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const handleDelete = () => {
    jam3yaStore.deleteJam3ya(jam3ya._id);
  };
  return (
    <div className="main_content">
      <Link to={`/jam3ya/${jam3ya.slug}`}>
        <div style={{ animationDelay: "0.1" }} className="chatlist__item">
          <div className="card">
            <div className="card_img">
              <img src={jam3ya.image} alt="#" />
            </div>
          </div>
          <div className="card_header">
            <div>
            <h2>{jam3ya.title}</h2>
            </div>
            <div>
            <p>{jam3ya.amout}</p>
            </div>
            <div>
            <p>{jam3ya.limit}</p>
            </div>
            <div>
            <p>{jam3ya.startDate}</p>
            </div>
            <div>
            <p>{jam3ya.endDate}</p>
            </div>
            {/* <p>{jam3ya.users}</p> */}
            
          </div>
        </div>
      </Link>

      <Button className="delete" onClick={handleDelete}>
        Delete
      </Button>
     
      {checkJam3ya() && author._id===authStore.user._id &&(
        
      <Button className="delete" onClick={openModal} >
        Update
      </Button>)}
      <UpdateJam3yaModal isOpen={isOpen} closeModal={closeModal} jam3ya={jam3ya} />
    </div>
  );
}
