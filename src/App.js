import React, { useState } from 'react';

let counter=0;

function App() {

  function buttonClicked(event)
  {
    console.log(counter++);
  }

  return (
    <div>
        <button onClick={buttonClicked}>Button</button>
        <h1>{counter}</h1>
    </div>
  )
}

export default App;
