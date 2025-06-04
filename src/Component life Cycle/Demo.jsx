import React, { useEffect, useState } from "react";

function Demo()
{
    let [count,setCount] =useState(0)
    useEffect(()=>{
        console.log("Componert Created/Mount")
         
        return()=>{
            console.log("Component Remove/Unamount")
        }
    },[])
    useEffect(()=>{
        console.log("Component Updated/Changed")
        
    },[count])
    return(
        <>
           <h1>Component Life Cycle</h1>
           {count}
           <button onClick={()=>{
            setCount(count+1) }}>Incr</button>
        </>
    )
}

export default Demo;