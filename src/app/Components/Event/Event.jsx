// import Image from "next/image";
import React from "react";
import './Event.css';

// Function to truncate text
// const truncateText = (text, maxWords) => {
//   const words = text.split(' ');
//   if (words.length > maxWords) {
//     return words.slice(0, maxWords).join(' ') + '...';
//   }
//   return text;
// };

export default function Event({ events }) {
  return (
    <div className="events-main-box">
      <div className="events-container">
        <div className="events">
          <div className="event-row-one event-main">
            {events.map((event, index) => (
              <div key={event._id} className={`event event-${index + 1}`}>
                <img src={event.imageUrl} alt={event.eventTitle} className="event-image" />
                <div className="head-event head-event-one">{truncateText(event.eventName, 15)}</div>
                <div className="details-event details-event-one">
                 
                  <p>{truncateText(event.eventTitle, 35)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
