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

function App() {
  return (
    <div>
      {3>5?<FirstComponent/>:<SecoundComponent/>}
    </div>
  )
}

export default App;
