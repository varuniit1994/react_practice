import React from 'react';

function FirstComponent()
{
  return(
    <h2>Hello World 2</h2>
  )
}

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <FirstComponent></FirstComponent>
    </div>
  )
}

export default App;
