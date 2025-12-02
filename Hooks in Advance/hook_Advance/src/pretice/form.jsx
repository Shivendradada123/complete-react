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
