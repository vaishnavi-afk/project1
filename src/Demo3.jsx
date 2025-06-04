// import React from "react";
// function Demo(){
//     let sub_paid= true;
//     if (sub_paid){
//         return(
//             <div>
//                 <h1>Movies </h1>
//             </div>
//         )
//     }

//import { jsx } from "react/jsx-runtime"


//     else {
//         return(
//             <div>
//                 <h1>Paise bhar re mitra... </h1>
//             </div>
//         )
//     }
// }

// function Demo(){
//     // IIFE(()=>{})()
//     let isLogin = false
//     return(
//         <div>
//             <h1>Demo component</h1>
//             {isLogin==true? <h1>Home page</h1>:<h1>Login Page</h1> }
//         </div>

//     )
// }
 function Demo()
 {

  (()=>{
    let isLogin=true
    if(isLogin)
    {
        
        return (
            <>
             <h1>Home Page</h1>
             </>
             )
        
    }
    else
    {
        return(
        <>
        <h1>Login Page</h1>
        </>
        )

    }
})()
}

export default Demo;

