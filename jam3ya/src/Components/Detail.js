import React from "react";
import { useParams } from "react-router-dom";
import jam3yaStore from "../stores/jam3yaStore";
import { observer } from "mobx-react";
function Detail() {
  const slug = useParams().slug;
  if (jam3yaStore.loading) {
    return <h1>Loading</h1>;
  }
  console.log(jam3yaStore.jam3yas);
  let jam3ya = jam3yaStore.jam3yas.find((j) => j.slug === slug);
  console.log(jam3ya);
  return (
    <div>
      <p>Jam3ya title: {jam3ya.title}</p>
      <img src={jam3ya.image} alt="jam3ya" />
      <p>Limit: {jam3ya.limit}</p>
      <p>Start date: {jam3ya.startDate}</p>
      <p>End date: {jam3ya.endDate}</p>
      <p>
        Users:{" "}
        {jam3ya.users.map((user) => (
          <p>{user.username}</p>
        ))}
      </p>
    </div>
  );
}

export default observer(Detail);
