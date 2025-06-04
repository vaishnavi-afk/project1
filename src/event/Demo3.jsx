let Demo=()=>{



function show(name)
{
    alert(name)
}
return(
    <>
       <h2>Event Handeling...</h2>
      { <button onClick={show("Hello...")}>Click</button> }

     {  <button onClick={show("vaishnavi")}>Click</button> }
      
    <button onClick={()=>{show("vaishnavi")}}>Click</button>

    </>
)
}

export default Demo