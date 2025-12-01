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
