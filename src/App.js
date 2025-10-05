import React, { useState } from "react";
import BookingForm from "./BookingForm";
import Confirmation from "./Confirmation";
import "./App.css";

function App() {
  const [confirmedData, setConfirmedData] = useState(null);

  return (
    <div className="App">
      <h1>Little Lemon Table Booking</h1>
      {!confirmedData ? (
        <BookingForm onConfirm={setConfirmedData} />
      ) : (
        <Confirmation data={confirmedData} />
      )}
    </div>
  );
}

export default App;
