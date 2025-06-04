import React, { useState } from "react";
// function Demo(Props){
  
    // let[count,setcount] = useState(0)

    // function incr()
    // {
    //     setcount(count+1)

    // }

    
    // function decr()
    // {
    //     setcount(count-1)

    // }


    // return(
    //     <div>
    //         <h1>{count}</h1>
    //         <button onClick={incr}>Increment</button>

    //         <button onClick={decr}>Decrement</button>

    //     </div>
    // )
//}
// function Demo()
// {

// let handleInput =  (e)=>        console.log(e.target.name)


// {
//     console.log(e.target.name)
//   console.log(e.target.name+ e.target.value)

// }
// return( 
//     <>
    
//     <input type="text" name="txt_name" onChange={handleInput} placeholder="Enter name"/>

    
//     <input type="text" name="txt_age" onChange={handleInput} placeholder="Enter age" />

//     {/* { <input type="text"name="txt_age" onChange={(e)=>{console.log(e.target.name)}} /> } */}

//     </>

// )
//}
function Demo()
{
    let handleInput=(e)=>{
        console.log(e.target.name)


    }
}

return(
    <>
        Enter Name: <input ype="text" onChange={handleInput} name="txt name" placeholder="Enter name"/>

        Select City:
    <select id="" onChange={handleInput}name="sel_city" >

        <Option value="vaijapur" >Vaijapur</Option>
        <Option value="nashik" >nashik</Option>
        <Option value="pune" >pune</Option>

    </select>
    </>
)



export default Demo;