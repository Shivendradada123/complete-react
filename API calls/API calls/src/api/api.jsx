import React, { useState } from 'react'

import axios from 'axios'

const App = () => {


//  const   getdata=  async ()=>{
//    const response =   await fetch('https://jsonplaceholder.typicode.com/todos/1');
//    console.log(response)
// }

const [data, setdata] = useState([])



const getData = async ()=>{
const res = await axios.get('https://picsum.photos/v2/list')
setdata(res.data)
}







  return (
    <div>


<button  onClick={getData}>Get data</button>
<div>
  {data.map(function(elem,idx){
    return <h2>{idx} Hello {elem.author} </h2>
  })}
</div>

    </div>
  )
}

export default App