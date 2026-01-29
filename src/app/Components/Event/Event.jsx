import React from "react";
import './Event.css';

// Function to truncate text safely
const truncateText = (text, maxWords) => {
  if (!text) return "";
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return text;
};

export default function Event({ events }) {
  if (!events || events.length === 0) return null;

  return (
    <div className="events-main-box">
      <div className="events-container">
        <div className="events">
          <div className="event-row-one event-main">
            {events.map((event, index) => (
              <div key={event._id || index} className={`event event-${index + 1}`}>
                <img 
                  src={event.imageUrl} 
                  alt={event.eventName || event.eventTitle} 
                  className="event-image" 
                />
                <div className="head-event">
                  {truncateText(event.eventName, 12)}
                </div>
                <div className="details-event">
                  <p>{truncateText(event.eventDescription || event.eventTitle, 25)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
