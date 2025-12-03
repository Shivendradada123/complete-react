import React from 'react'

const App = () => {

// localStorage.setItem('user','shivendra');    ///  chae delte hi kar do 

//  const value = localStorage.getItem('user')
// console.log(value)


// const age = localStorage.getItem('age')
// console.log(age,value)



// localStorage.setItem('usernamee', 'Aditya Choot_Paglu day by day')







// remove karne ke liye
// localStorage.removeItem('user')




const user = {
  username: 'shivendra',
  age: 16,
  address: "mauhariya"
}

 const use = localStorage.setItem('userdata', JSON.stringify(user))




const userrr = localStorage.getItem('userdata')

console.log(userrr)






  return (
    <div>App</div>
  )
}

export default App