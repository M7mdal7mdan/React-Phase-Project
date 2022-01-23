import React from "react";
import { useParams } from "react-router-dom";
import jam3ya from "../Jam3yaz";
function Detail() {
  //   const { slug } = useParams();
  //   let jam3ya = jam3yastore.jam3ya.find((jam3ya) => jam3ya.slug === slug);
  console.log(jam3ya);
  return (
    <div>
      <p>Jam3ya title: {jam3ya.title}</p>
      <img src={jam3ya.image} alt="jam3ya image" />
      <p>Limit: {jam3ya.limit}</p>
      <p>Start date: {jam3ya.startDate}</p>
      <p>End date: {jam3ya.endDate}</p>
      <p>Users: {jam3ya.users.map((user) => user.username)}</p>
    </div>
  );
}

export default Detail;
