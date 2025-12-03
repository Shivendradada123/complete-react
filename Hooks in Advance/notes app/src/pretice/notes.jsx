import React, { useState } from "react";
import noteImg from "../assets/image.png";
const Notes = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");

  const [task, settask] = useState([]);

  const submit = (e) => {
    const copytask = [...task];

    copytask.push({ title, details });
    settask(copytask);

    e.preventDefault();

    settitle("");
    setdetails("");
  };

  const delteNote = (idx) => {
    const copytask = [...task];
    copytask.splice(idx, 1);
    settask(copytask);
  };

  return (
    <div className="h-screen lg:flex bg-black text-red-50  p-15 ">
      <h1 className="text-3xl font-bold">ADD NOTES</h1>

      <form
        onSubmit={(e) => {
          submit(e);
        }}
        action=""
        className="flex items-start lg:w-1/2  flex-col gap-10"
      >
        <input
          className="px-5 py-3 border-3 rounded  w-full"
          type="text"
          placeholder="ENTER Heading "
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <textarea
          className="px-5 py-3 w-full h-40 border-3 rounded "
          type="text"
          placeholder="ENTER A NOTE "
          value={details}
          onChange={(e) => {
            setdetails(e.target.value);
          }}
        />
        <button className="bg-white text-black px-5   py-3 border-2 rounded-2xl w-full active:bg-green-600">
          Add note
        </button>
        {/* <img src={noteImg} alt="note" className="w-5 " /> */}
      </form>
      <div className="  p-10 lg:w-1/2 ">
        <h1 className="text-3xl font-bold">Your Notes </h1>
        <div className="flex gap-5 flex-wrap mt-5 h-full  items-start justify-start overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-62 w-42 flex justify-between flex-col item-start rounded-2xl text-xl  text-black py-12
          
          px-7 bg-cover bg-no-repeat bg-[url('https://www.nicepng.com/png/detail/67-679001_notes-document-notepad-office-reminder-sticky-note-paper.png')]"
              >
                <div>
                  <h2 className="font-bold">{elem.title}</h2>
                  <p className="mt-4 font-light">{elem.details}</p>
                </div>
                <button
                  onClick={() => {
                    delteNote(idx);
                  }}
                  className="w-full bg-red-600 py-1 text-xs rounded text-white active:scale-95   "
                >
                  delet{" "}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notes;
