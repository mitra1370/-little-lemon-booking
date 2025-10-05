import React from "react";

function Confirmation({ data }) {
  return (
    <div role="alert">
      <h2>Booking Confirmed!</h2>
      <p>Name: {data.name}</p>
      <p>Date: {data.date}</p>
      <p>Time: {data.time}</p>
      <p>Guests: {data.guests}</p>
    </div>
  );
}

export default Confirmation;
