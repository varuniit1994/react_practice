import React, { useState } from 'react';

function App() 
{

  let [counter,setCounter]=useState(0);

  function buttonClicked()
  {
    setCounter(counter+1);
    console.log(counter);
  }

  return (
    <div>
        <button onClick={buttonClicked}>Button</button>
        <h1>{counter}</h1>
    </div>
  )
}

export default App;
