import React, { useState } from 'react'

const App = () => {

const [num, num2] = useState(0)

const incre=()=>{
  num2(num+1)
};
const dicre=()=>{
  num2(num-1)
}
const plus=()=>{
  num2(num+5)
}
const rest=()=>{
 num2(0)
}



  return (
    <div>
<h3>counter app by Shivendra</h3>
      <h1 >{num}</h1>
      <button onClick={incre}>Increase</button>
      <button onClick={dicre}>Decrease</button> <br /> 
      <button onClick={plus}>increase 5</button>
      <button onClick={rest}>Reset</button>
    </div>
  )
}

export default App