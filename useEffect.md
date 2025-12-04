# UseEffect in react by Shivendra

```jsx
import React, { useEffect, useState } from "react";

const App = () => {
  const [a, seta] = useState(0);

  const [b, setb] = useState(0);

  function change() {
    console.log("a change");
  }

  function bchange() {
    console.log("b change");
  }

  //useeffect

  useEffect(
    function () {
      change();
      console.log("running useeefact");
    },
    [a]
  );

  return (
    <div>
      <h1>a is {a}</h1>
      <h1>b is {b}</h1>
      <button
        onClick={() => {
          seta(a + 2);
        }}
      >
        change A
      </button>
      <button
        onClick={() => {
          setb(b - 2);
        }}
      >
        change B
      </button>
    </div>
  );
};

export default App;
```