import React from "react";

export default function Hotel() {
  function reserveRoom() {
    // Alert dialog
    alert("Welcome to Hotel Reservation System");

    // Confirm dialog
    const confirmReservation = confirm("Do you want to reserve a room?");

    if (confirmReservation) {
      // Prompt dialogs
      const guestName = prompt("Enter Guest Name:");
      const roomType = prompt("Enter Room Type (Single / Double / Deluxe):");
      const days = prompt("Enter Number of Days to Stay:");

      if (guestName && roomType && days) {
        alert(
          "Reservation Successful!\n\n" +
          "Guest Name: " + guestName + "\n" +
          "Room Type: " + roomType + "\n" +
          "Days of Stay: " + days
        );
      } else {
        alert("Reservation Failed! Please enter all details.");
      }
    } else {
      alert("Reservation Cancelled. Thank you!");
    }
  }

  return (
    <>
      <h2>Hotel Reservation System</h2>
      <button onClick={reserveRoom}>Reserve Room</button>
    </>
  );
}
