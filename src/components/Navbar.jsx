import React from 'react'

export const Navbar = () => {
  const workprogress=()=>{
    alert("work in progress")
  }
  return (
    <nav className=' flex bg-slate-900 p-5 justify-between'>
      <div> Y</div>
      <ul className='list-none flex gap-5 cursor-pointer '>
        <li >Home</li>
        <li onClick={workprogress}>Timmer</li>
        <li onClick={workprogress}>About us</li>
      </ul>

    </nav>
  )
}
