import React, {useEffect, useState} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poems,setPoems] =useState([])
  const [showtoggle, setShowToggle] = useState(false)

  useEffect(()=>{
  fetch("http://localhost:8004/poems")
  .then(res => res.json())
  .then((data) => setPoems(data))
  },[])


function handleToggle(){
  setShowToggle(!showtoggle)
}

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleToggle}>Show/hide new poem form</button>
        {showtoggle ? <NewPoemForm poems={poems} setPoems={setPoems}/> : null}
      </div>
      <PoemsContainer poems={poems} setPoems={setPoems}/>
    </div>
  );
}

export default App;
