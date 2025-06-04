import React, { useState } from "react";
import Demo2 from "./Demo2";

function Demo(){
    let [count,setcount]=useState(0)
    function incr()
    {
        setcount(count+1)
    }

    function decr()
    {
        setcount(count-1)
    }

return(
    <>
           <h1>Demo Component1</h1>
       <h1>{count}</h1>

       <button onClick={incr}>
               Increment
       </button>

       <button onClick={decr}>
               decrement
       </button>
       <Demo2 count={count} incr={incr} decr={decr}/>
 

 
    </>
)
}
export default Demo;