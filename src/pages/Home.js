import React,{useState} from "react";
import RoomCard from "../components/RoomCard";
import SearchBar from "../components/SearchBar";
import rooms from "../data/rooms"

function Home(){
const [search,setSearch] = useState("");
const [maxPrice, setMaxPrice] = useState(20000);
const filteredRooms = rooms.filter(room =>
room.location.toLowerCase().includes(search.toLowerCase()) &&
room.price <= maxPrice
);
return(
<div>
<h1>Find Your Perfect Room</h1>
<SearchBar search={search} setSearch={setSearch} 
maxPrice={maxPrice} setMaxPrice={setMaxPrice} />
<div className="room-container">
{filteredRooms.map(room => (
<RoomCard key={room.id} room={room}/>
))}
{filteredRooms.length === 0 && (
  <p style={{textAlign:'center', marginTop:'40px', fontSize:'18px', color:'#555'}}>
    No rooms match your search 😕
  </p>
)}
</div>
</div>
)
}

export default Home