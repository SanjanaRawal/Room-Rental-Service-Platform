import { useParams } from "react-router-dom";
import rooms from "../data/rooms";

function RoomDetails(){
const { id } = useParams();
const room = rooms.find(r => r.id === Number(id));
if(!room){
return <h2>Room not found</h2>;
}

return(
<div className="details-container">
<img src={room.image} alt="room"/>
<h2>{room.title}</h2>
<p>Location: {room.location}</p>
<p>Price: ₹{room.price} / month</p>
<div className="amenities">
{room.amenities.map((item,index)=>(
<span key={index} className="amenity-tag">{item}</span>
))}
</div>
<p>{room.description}</p>
<button className="book-btn">Book Now</button>
</div>
)
}

export default RoomDetails;