import React, { useState } from 'react';

function App() 
{
  const [name,setName]=useState("ss");
  const [password,setPassword]=useState("pass1");

  return(
    <div>
      <input type="text" value={name} onChange={updateTextField}></input>
      <input type="password" value={password} onChange={updatePassword}></input>

      <button onClick={submitForm}>Submit Form</button>
      <br></br>
      {name==="admin" && password==="admin" ? "Hello admin":"Hello User"}    
    </div>
  )

  function updateTextField(event)
  {
    console.log(event.target);
    setName(event.target.value);
  }

  function updatePassword(e)
  {
    console.log(e.target);
    setPassword(e.target.value);
  }

  function submitForm()
  {
    console.log(`name: ${name} and password: ${password}`);
  }
}

export default App;
