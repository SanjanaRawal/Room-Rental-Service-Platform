import React from "react";

function PostRoom(){

return(
<div>
<h2>Post Your Room</h2>
<form>
<input type="text" placeholder="Room Title"/>
<input type="text" placeholder="Location"/>
<input type="number" placeholder="Price"/>
<textarea placeholder="Description"></textarea>
<button>Submit</button>
</form>
</div>
)
}

export default PostRoom