import React, { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment=()=>{
    
       if (count==99){
        alert("counter limit is hundred")
      setCount(0)
    }
    else{
setCount(count+1)
    }
    
  }
  const decrement=()=>{
    
  if(count===0){
      alert("the counter is already at Zero")
      setCount(0)
    }
    else{
setCount(count-1)
    }
  }
  return (
    <div className='flex mt-5 p-5 justify-center flex-wrap'>
      <div className='font-Bungee text-7xl p-28 md:w-60 '>
        <p> {count}</p>
       
      </div>
      <div className='items-center flex justify-center flex-col md:ml-52'>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-52 mt-10 ml-5 mr-5 px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={increment} >Increment</button>

<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-52 mt-10 ml-5 mr-5 px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
 onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}
