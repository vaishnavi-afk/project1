import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropsDemo from './PropsDemo'

function App() {
  let name = "vaishnavi"
  let age = 8


// let std=[
//   {name:"vaishnavi.s",age:20}
// ]

return(
  <>
  <h1>App Component</h1>
  {<PropsDemo name="vaishnavi" age={8} />}


  {/* {<PropsDemo name ={name} age={age} />}
 { <PropsDemo std={std}/> }
 { <PropsDemo std = {std} /> } */}
  
  </>
)
}
export default App
