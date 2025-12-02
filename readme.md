# HOOKS

1. Usestate ka use
2. phele code me usestate likho phir hata do apne ap usestate import hoga
3. usestate me do varible bante hai first wala  present value ko show karega 
4. second wale se ham value ko change kar sakte hai == niche code me dhek ke  reivse kar le 


```jsx
 import React, { useState } from "react";

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

export default App; 
```








# Counter app help of state logic

1. counter app

```jsx
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
```



# Destrucring in react javascript

1.destrucring
```jsx
import React, { useState } from 'react'

const App = () => {

  const [val, valscond] = useState({user: 'Shivendra', age:16})

const change=()=>{
  const value = {...val}
  value.user = 'Aditya'
  console.log(value)
  valscond(value)
}



  return (
    <div>
      <h1>{val.user}</h1>
      <button onClick={change}>Click</button>
    </div>
  )
}

export default App
```




#Form handling in react\

1. prevent se page relod nhi hota =   ...   preventDefault

```jsx
import React from "react";

const Form = () => {
  const submit = (val) => {
    val.preventDefault();
    console.log("succes");
  };

  return (
    <div>
      <form
        onSubmit={(val) => {
          submit(val);
        }}
      >
        <input placeholder="Enter your name " type="text" />
        <button> Submit</button>
      </form>
    </div>
  );
};

export default Form;
```