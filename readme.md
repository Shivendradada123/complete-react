# HOOKS

1. Usestate ka use
2. phele code me usestate likho phir hata do apne ap usestate import hoga
3. usestate me do varible bante hai first wala  present value ko show karega 
4. second wale se ham value ko change kar sakte hai == niche code me dhek ke  reivse kar le 


``` import React, { useState } from "react";

const App = () => {
  const [first, setfirst] = useState(16);

  const change = () => {
    setfirst("Shivendra");
  };

  return (
    <div>
      value of Person = {first}
      <div>
        <button onClick={change}>clickme</button>
      </div>
    </div>
  );
};

export default App; ```



# Counter app help of state logic

1. counter app

``` import React, { useState } from 'react'

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

export default App ```
