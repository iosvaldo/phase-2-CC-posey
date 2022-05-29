import React, {useState} from "react";

function Poem({title,content, author}) {

  const [showMarker, setShowMarker] = useState(false)

function handleMarker(){
  setShowMarker(!showMarker)
}


  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>{author}</strong>
      </p>
      <button onClick={handleMarker}>{showMarker === true ? "Mark as read" : "Mar as unread"}</button>
    </div>
  );
}

export default Poem;
