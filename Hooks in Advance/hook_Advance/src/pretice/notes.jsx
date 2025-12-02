import React, { useState } from "react";
import noteImg from "../assets/image.png";
const Notes = () => {

const [title, settitle] = useState('')
const [details, setdetails] = useState('')

const [task, settask] = useState([])


const submit=(e)=>{

const copytask = [...task];

copytask.push({title, details})
settask(copytask)
console.log(copytask)



  e.preventDefault()
console.log(title,details);
settitle('')
setdetails('')
}













  return (
    <div className="h-screen lg:flex bg-black text-red-50  p-15 ">
   
      <h1 className="text-3xl font-bold">ADD NOTES</h1>
      
      <form   onSubmit={(e)=>{
        submit(e)
      }}  action="" className="flex items-start lg:w-1/2  flex-col gap-10">
       
          <input
            className="px-5 py-3 border-3 rounded  w-full"
            type="text"
            placeholder="ENTER Heading "
            value={title}
            onChange={(e)=>{ settitle(e.target.value)}}
          />
          <textarea
            className="px-5 py-3 w-full h-40 border-3 rounded "
            type="text"
            placeholder="ENTER A NOTE "
            value={details}
            onChange={(e)=>{setdetails(e.target.value)}}
          />
          <button className="bg-white text-black px-5   py-3 border-2 rounded-2xl w-full active:bg-green-600">
            
            Add note
          </button>
           {/* <img src={noteImg} alt="note" className="w-5 " /> */}
        
      </form>
      <div className="  p-10 lg:w-1/2 ">
      <h1 className="text-3xl font-bold">Your Notes </h1>
        <div className="flex gap-5 flex-wrap mt-5 h-full overflow-auto"> 
          <div className="h-62 w-42 rounded-2xl bg-white"></div>
        <div className="h-62 w-42 rounded-2xl bg-white"></div>
        <div className="h-62 w-42 rounded-2xl bg-white"></div>
        
        
        </div>
      </div>
    </div>
  );
};

export default Notes;
