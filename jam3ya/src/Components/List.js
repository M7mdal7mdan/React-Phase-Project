import React, { useState } from "react";
import Listitem from "./ChatRoomitem";
import CreateJam3yaModal from "./CreateJam3yaModal";
import jam3yaStore from "../stores/jam3yaStore";
import {observer} from "mobx-react"; 

function List() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const jam3yasList = jam3yaStore.jam3ya.map((jam3ya) => {
    return (
      <Listitem
        jam3ya={jam3ya}
        key={jam3ya.id}
       
      />
    );
  });
  return (
    <div className="main__chatlist">
      <button className="btn">
        <i className="fa fa-plus"></i>
        <span onClick={openModal}>New Jam3ya</span>
        <CreateJam3yaModal
          isOpen={isOpen}
          closeModal={closeModal}
          createJam3ya={jam3yaStore.createJam3ya}
        />
      </button>
      <center>
        <div className="chatlist__heading">
          <h2>Jam3ya List</h2>
        </div>
      </center>

      <div className="chatlist__items">{jam3yas}</div>
    </div>
  );
}
export default observer(List);
