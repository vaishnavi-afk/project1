import React, {useEffect,useState} from "react";


    function Demo2({display}){
        let [count ,setCount]=useState(0)
        useEffect(()=>{
    
            console.log("Component are Created")
    
        },[display])
    
    
        useEffect(()=>{
    
            return()=>{
            console.log("Component are unmounted")
        }
    
        },[display])
    
        useEffect(()=>{
            console.log("Component are Update")
    
        },[count])
        
    return(
        <div>
              <h1>This is Demo2 Component </h1>
              <h1>{count}</h1>
              <button onClick={()=> setCount(count+1)}>Increment</button>

            
        </div>
    )
}
export default Demo2