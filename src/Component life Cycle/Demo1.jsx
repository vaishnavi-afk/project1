import React, { useEffect, useState } from "react";
import Demo2 from "./Demo2";
 function Demo1(){

    let[display,setdisply]=useState(true)
    return(
        <div>
            <h1>Demo1 Component</h1>
            {
                display ? <Demo2 display={display}/>:null

            }
            <button onClick={()=>setdisply(!display)}>Toggle
                 
            </button>
        </div>
    )
 

    return(
        <div>
              <h1>This is Demo Component </h1>


            <Demo2/>
        </div>
    )
}
export default Demo1