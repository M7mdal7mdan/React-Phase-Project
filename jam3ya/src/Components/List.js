import React, { useState } from "react";
import Listitem from "./Listitem";
import CreateJam3yaModal from "./CreateJam3yaModal";
import jam3yaStore from "../stores/jam3yaStore";
import {observer} from "mobx-react"; 

function List() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const jam3yasList = jam3yaStore.jam3yas.map((jam3ya) => 
  < Listitem className ="main_content"
  jam3ya={jam3ya}
  key={jam3ya._id}
  />
  );
console.log("jam3yasList",jam3yasList);
  return (
    <div className="card">
      <button className="btn">
        <i ></i>
        <span onClick={openModal}>New Jam3ya</span>
        <CreateJam3yaModal
          isOpen={isOpen}
          closeModal={closeModal}
          createJam3ya={jam3yaStore.createJam3ya}
        />
      </button>
      <center>
        <div >
          <h2>Jam3ya List</h2>
        </div>
      </center>

      <div >{jam3yasList}</div>
    </div>
  );
}
export default observer(List);
