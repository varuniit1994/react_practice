import React from 'react';

function FirstComponent()
{
  return(
    <h2>Hello World 1</h2>
  )
}

function SecoundComponent()
{
  return(
    <h2>Hello World 2</h2>
  )
}

const arr=[1,2,3,4,5,6];

function App() {
  return (
    <div>
      {3>5?<FirstComponent/>:<SecoundComponent/>}
      <ul>
          {arr.map(val=><li>{val**2}</li>)}
      </ul>
    </div>
  )
}

export default App;
