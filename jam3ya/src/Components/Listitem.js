import React  from "react";
import {  Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import "./Card.css"
function Listitem({ jam3ya }) {
  
  
 
  
  return (
      <Card style={{ width: '18rem', border: "5px solid", borderRadius: "50px" , margin: "20px"}} className="cards__item__img">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      <Card.Body>
      <Link to={`/jam3ya/${jam3ya.slug}`}>
      <Card.Img variant="top" src={jam3ya.image} className="img-card"  />  
        </Link>
      <a href="#"  className="title-text">
      <Card.Title>{jam3ya.title}</Card.Title>
    </a>
      </Card.Body>
      </Card>
  );
}
export default observer(Listitem);
