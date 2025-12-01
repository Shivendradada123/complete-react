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
