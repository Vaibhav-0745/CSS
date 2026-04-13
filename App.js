import React,{useState} from 'react';


function App() {
  const [name,setName]=useState("");
  const[phone,setPhone]=useState("");

  const submitbtn=(e)=>{
    e.preventDefault();
    alert(`Name:${name} and Phone:${phone}`);

    setName("");
    setPhone("");
  }; 

  return (
    <form onSubmit={submitbtn}>
      <input type ="text" value = {name} onChange={(e)=> setName(e.target.value)}></input>
      <input type ="text" value = {phone} onChange={(e)=> setPhone(e.target.value)}></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
