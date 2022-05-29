import React,{useState} from "react";
import { useEffect } from "react/cjs/react.production.min";

function NewPoemForm({poems, setPoems}) {

const [titleName, setTitleName] =useState('')
const [titleContent, setTitleContent] =useState('')
const [textArea, setTextArea] =useState('')

function handleSubmit(e){
  e.preventDefault();
  console.log('clicked')
  // console.log(e.target.name.value)
  // console.log(e.target.image.value)
  fetch("http://localhost:8004/poems",{
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      title:titleName,
      content:titleContent,
      author:textArea
    })
  })
  .then(r=>r.json())
  .then(data => setPoems([...poems,data]))
 }
  return (
    <form className="new-poem-form">
      <input onChange={(e)=> setTitleName(e.target.value)} placeholder="Title" />
      <input onChange={(e)=> setTitleContent(e.target.value)}placeholder="Author" />
      <textarea onChange={(e)=> setTextArea(e.target.value)}placeholder="Write your masterpiece here..." rows={10} />
      <input type="submit" value="Share your masterpiece" onClick={handleSubmit}/>
    </form>
  );
}

export default NewPoemForm;
