import React from "react";

function RoomCard({room}) {
return(
<div className="room-card">
<img src={room.image} alt="room"/>
<div className="room-info">
<h3>{room.title}</h3>
<p className="location">📍 {room.location}</p>
<p className="price">₹ {room.price} / month</p>
<button>View Details</button>
</div>
</div>
);
}

export default RoomCard;