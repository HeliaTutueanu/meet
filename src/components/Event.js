import React, { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event">
      <h3>{event.summary}</h3>
      <p>{event.location}</p>
      <p>{event.created}</p> {/* Render the event's start time */}
      {showDetails ? <p className="details">{event.description}</p> : null}
      <button
        className="details-btn"
        onClick={() => {
          setShowDetails((prevShowDetails) => !prevShowDetails);
        }}
      >
        {showDetails ? "hide details" : "show details"}
      </button>
    </li>
  );
};

export default Event;