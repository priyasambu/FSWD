import React from "react";

export default function Flight() {
  function bookTicket() {
    // Alert dialog
    alert("Welcome to Flight Ticket Booking");

    // Confirm dialog
    const confirmBooking = confirm("Do you want to book a flight ticket?");

    if (confirmBooking) {
      // Prompt dialogs
      const name = prompt("Enter Passenger Name:");
      const from = prompt("Enter From City:");
      const to = prompt("Enter To City:");

      if (name && from && to) {
        alert(
          "Ticket Booked Successfully!\n\n" +
          "Passenger: " + name + "\n" +
          "From: " + from + "\n" +
          "To: " + to
        );
      } else {
        alert("Booking Failed! All details are required.");
      }
    } else {
      alert("Ticket booking cancelled.");
    }
  }

  return (
    <>
      <h2>Flight Ticket Booking</h2>
      <button onClick={bookTicket}>Book Flight Ticket</button>
    </>
  );
}
