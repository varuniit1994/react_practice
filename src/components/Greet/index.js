import React from "react";
import { useParams } from "react-router-dom";

export default function Greet()
{

    const params=useParams();
    console.log(params);

    return (
        <div>
            <h1>Hello User : { params.name }</h1>
        </div>
    )
}