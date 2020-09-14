import React,{ useContext, useState, useEffect } from "react";

const MyContext=React.createContext();

function MyComponent()
{
    const { state,setState }=useContext(MyContext);

    useEffect(()=>{

        setTimeout(()=>{
           
            setState((state)=>({
                ...state,
                name:"updated name"
            }))
        },1000);

    },[]);

    return  (
        <div>
            <h1>This is a custom MyComponent  </h1>
            <h1>Name: {state.name}</h1>
            <h1>Age: {state.age}</h1>
        </div>
    )
}

export default function About()
{
    const [obj, setObj]=useState({
        name:"varun_bhati",
        age:26,
        prop:"random"
    });

    return (
        <MyContext.Provider value={{state:obj,setState:setObj}}>
          <div>
              <MyComponent/>
          </div>
        </MyContext.Provider>
    )
}

