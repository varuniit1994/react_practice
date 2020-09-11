import React, { useState } from 'react';

function GreetComponent(props)
{
  console.log(props);
  return (
    <div>
      <h4>{props.name}</h4>
      <h5>{props.age}</h5>
    </div>
  )
}

function App() 
{
  return(
     <div>  
        <h2>Hello World</h2>
        <GreetComponent name="Varun_Bhati" age={20}></GreetComponent>
     </div>
  )
}

export default App;
