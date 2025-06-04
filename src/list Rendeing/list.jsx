import React from "react";

function Demo(){
let std=[
    {name:"Vaishnavi",age:20},
    {name:"Nikita",age:24},
    {name:"Shivam",age:17}

]

return(
    <div>
      <h1>List Rendering & Key...</h1>
      <table border={1}>
        <thead>
            <tr>
                <th>Sr.no</th>   <th>Name</th> <th>Age</th>
            </tr>
        </thead>
        {
std.map((s,index)=>{
    return(
        <tr key ={index}>

            <th>{index+1}</th>
            <th>{s.name}</th>
            <th>{s.age}</th>
        </tr>
    
    )
})
        }
      </table>

    </div>
)
}
export default Demo