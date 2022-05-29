import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems, setPoems}) {

  
const renderPoems = poems.map((p)=> {
   return (<Poem 
      key={p.id}
      title={p.title}
      content={p.content}
      author={p.author}
      />
   )
})

  return (
    <div className="poems-container">
      {renderPoems}
    </div>
  );
}

export default PoemsContainer;
