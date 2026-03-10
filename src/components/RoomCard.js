import React from "react";
import { Link } from "react-router-dom";

function RoomCard({room}) {
return(
<div className="room-card">
<img src={room.image} alt="room"/>
<div className="room-info">
<h3>{room.title}</h3>
<p className="location">📍 {room.location}</p>
<p className="price">₹ {room.price} / month</p>
<p className="room-desc">{room.description.slice(0,60)}...</p>
<Link to={`/room/${room.id}`}>
<button>View Details</button>
</Link>
</div>
</div>
);
}

export default RoomCard;