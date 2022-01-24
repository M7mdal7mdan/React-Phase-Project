import React, { useState } from "react";
import Listitem from "./Listitem";
import CreateJam3yaModal from "./CreateJam3yaModal";
import jam3yaStore from "../stores/jam3yaStore";
import { observer } from "mobx-react";

function List() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const jam3yasList = jam3yaStore.jam3yas.map((jam3ya) => (
    <Listitem jam3ya={jam3ya} key={jam3ya.id} />
  ));
  console.log("jam3yasList", jam3yasList);
  return (
    <div className="card-flex">
      <button className="btn ">
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

      {jam3yasList}
    </div>
  );
}
export default observer(List);
