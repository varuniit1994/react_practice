import React from "react";
import { Link } from "react-router-dom";

export default function Home()
{
    return <h1>Home GOTO <Link to="/about">About</Link></h1>
}
