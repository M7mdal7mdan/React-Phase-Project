import React, { useState } from "react";
import Listitem from "./Listitem";
import CreateJam3yaModal from "./CreateJam3yaModal";
import jam3yaStore from "../stores/jam3yaStore";
import { observer } from "mobx-react";
import SearchBar from "./SearchBar";
import Hero2 from "./Hero2";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Container } from 'react-bootstrap';



function List() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  console.log("🚀 ~ file: List.js ~ line 12 ~ List ~ query", typeof query);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  let jam3yasList;
  if (query !== "") {
    jam3yasList = jam3yaStore.jam3yas
      .filter((item) => item.amount <= parseInt(query))
      .filter((item) => item.startDate <= query)
      .map((jam3ya) => <Listitem jam3ya={jam3ya} key={jam3ya._id} />);
  } else {
    jam3yasList = jam3yaStore.jam3yas.map((jam3ya) => (
      <Listitem jam3ya={jam3ya} key={jam3ya._id} />
    ));
  }

  return (
    
    <Container className="background">
       

      
        
        <SearchBar setQuery={setQuery} />

      <Button variant='secondary' className="btn see ">
        <i className="fa fa-plus"></i>
        <span onClick={openModal}>New Jam3ya</span>

        <CreateJam3yaModal
          isOpen={isOpen}
          closeModal={closeModal}
          createJam3ya={jam3yaStore.createJam3ya}
        />
      </Button>
      <center>
        <div className="chatlist__heading" style={{ marginBottom: "40px" , color:"white" }}>
          <h2>Jam3ya List</h2>
        </div>
      </center>
      <div className="card-flex " >{jam3yasList}</div>
    </Container>
  );
}

export default observer(List);
