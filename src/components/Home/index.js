import React, { useRef,useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home()
{

    const h1ref=useRef();
    const [counter1,setCounter1]=useState(0);
    const [counter2,setCounter2]=useState(0);

    useEffect(()=>{
        console.log(h1ref);
    },[counter2]);

    return (
        <div>
            <button onClick={()=>setCounter1(counter1=>counter1+1)}>counter1: {counter1}</button>
            <button onClick={()=>setCounter2(counter2=>counter2+1)}>counter2: {counter2}</button>
            <h1 ref={h1ref}>Home GOTO <Link to="/about">About {counter1} {counter2}</Link></h1>
        </div>
        )
}
