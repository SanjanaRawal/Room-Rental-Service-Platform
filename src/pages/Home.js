import React from "react";
import RoomCard from "../components/RoomCard";
import SearchBar from "../components/SearchBar";

const rooms = [
{
id:1,
title:"Single Room",
location:"Delhi",
price:6000,
image:"https://images.unsplash.com/photo-1505693314120-0d443867891c"
},
{
id:2,
title:"PG Room",
location:"Noida",
price:8000,
image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
},
{
id:3,
title:"Studio Apartment",
location:"Gurgaon",
price:12000,
image:"https://images.unsplash.com/photo-1493809842364-78817add7ffb"
}
]

function Home(){
return(
<div>
<h1>Find Your Perfect Room</h1>
<SearchBar/>
<div className="room-container">
{rooms.map(room => (
<RoomCard key={room.id} room={room}/>
))}
</div>
</div>
)
}

export default Home