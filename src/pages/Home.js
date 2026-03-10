import React from "react";
import RoomCard from "../components/RoomCard";

const rooms = [
{
id:1,
title:"Single Room",
location:"Delhi",
price:6000,
image:"https://via.placeholder.com/250"
},
{
id:2,
title:"PG Room",
location:"Noida",
price:8000,
image:"https://via.placeholder.com/250"
}
]

function Home(){
return(
<div>
<h1>Find Your Perfect Room</h1>
<div className="room-container">
{rooms.map(room => (
<RoomCard key={room.id} room={room}/>
))}
</div>
</div>
)
}

export default Home