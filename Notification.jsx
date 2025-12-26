import React, { useState } from "react";

export default function Notification() {
  const [notifications, setNotifications] = useState([]);

  function addNotification(type) {
    let message = "";

    if (type === "success") {
      message = "✅ Operation completed successfully";
    } else if (type === "warning") {
      message = "⚠️ Warning: Please check your input";
    } else if (type === "error") {
      message = "❌ Error: Something went wrong";
    }

    setNotifications([...notifications, message]);
  }

  return (
    <>
      <h2>Dashboard Notifications</h2>

      <button onClick={() => addNotification("success")}>
        Add Success Notification
      </button>{" "}
      <button onClick={() => addNotification("warning")}>
        Add Warning Notification
      </button>{" "}
      <button onClick={() => addNotification("error")}>
        Add Error Notification
      </button>

      <hr />

      <h3>Notifications</h3>
      {notifications.length === 0 && <p>No notifications</p>}

      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </>
  );
}
