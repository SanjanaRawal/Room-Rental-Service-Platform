import React from "react";

function Navbar() {
return (

<nav className="navbar">

<h2>RoomRent</h2>

<div className="nav-links">
<a href="/">Home</a>
<a href="/rooms">Rooms</a>
<a href="/post-room">Post Room</a>
<a href="/login">Login</a>
</div>

</nav>

);
}

export default Navbar;