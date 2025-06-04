import React from "react";
function Demo2({count,incr, decr}){
    return(
        <>
            <h1>Demo2 Componenr</h1>
            <h1>{count}</h1>
            <button onClick={incr}>Incr</button>
            <button onClick={decr}>Decr</button>

        </>
    )
}
export default Demo2;