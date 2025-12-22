import React from "react";

export default function Onlinecab() {
  function bookCab() {
    // Alert dialog
    alert("Welcome to Online Cab Booking");

    // Confirm dialog
    const confirmBooking = confirm("Do you want to book a cab?");

    if (confirmBooking) {
      // Prompt dialogs
      const customerName = prompt("Enter Customer Name:");
      const pickup = prompt("Enter Pickup Location:");
      const drop = prompt("Enter Drop Location:");

      if (customerName && pickup && drop) {
        alert(
          "Cab Booked Successfully!\n\n" +
          "Customer Name: " + customerName + "\n" +
          "Pickup Location: " + pickup + "\n" +
          "Drop Location: " + drop
        );
      } else {
        alert("Booking Failed! All details are required.");
      }
    } else {
      alert("Cab booking cancelled. Thank you!");
    }
  }

  return (
    <>
      <h2>Online Cab Booking Application</h2>
      <button onClick={bookCab}>Book Cab</button>
    </>
  );
}
