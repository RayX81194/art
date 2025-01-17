import { useState } from 'react'
import './App.css'
import Button from './assets/components/Button.jsx'

function App() {


  return (
   <div className="container">
    <section>
    <h1>Manish Phartiyal</h1>
    <p>Art Student from College of Art,Delhi</p>
    <div className='nav'>
      <Button link='about' text='about' />
      <Button link='contact' text='contact' />
      <Button link='pictures' text='pictures' />
    </div>
    </section>
    
   </div>
  )
}

export default App
