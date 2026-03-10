import React from "react";

function RoomCard({room}) {
return(
<div className="room-card">
<img src={room.image} alt="room"/>
<h3>{room.title}</h3>
<p>📍 {room.location}</p>
<p>₹ {room.price} / month</p>
<button>View Details</button>
</div>
);
}

export default RoomCard;