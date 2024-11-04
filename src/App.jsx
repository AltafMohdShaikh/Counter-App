import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Body } from './components/Body'
import { Counter } from './components/Counter'
import { Footer } from './components/Footer'

function App() {


  return (
    <>
 <Navbar />
 <Body />
 <Counter />
 <Footer />
    </>
  )
}

export default App
