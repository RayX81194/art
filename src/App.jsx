import { useState } from 'react'
import './App.css'
import Button from './assets/components/Button.jsx'
import insta from './assets/Instagram.svg'
import linkedin from './assets/Linkedin.svg'
import youtube from './assets/Youtube.svg'

function App() {


  return (
   <div className="container">
    <section className='w-full h-screen flex flex-col pt-10 pl-5'>
    <h1 className='text-3xl font-bold'>Manish Phartiyal</h1>
    <p className='text-lg text-gray-500'><span className='font-semibold'>Art Student</span> from <span className='font-semibold'>College of Art, Delhi</span></p>
    <ul>
      <Button link='about' text='about' />
      <Button link='contact' text='contact' />
      <Button link='pictures' text='pictures' />
    </ul>
    <ul className='socials flex gap-2'>
      <li><a href='https://www.instagram.com/manish.phartiyal/'><img src={insta} alt='insta' /></a></li>
      <li><a href='https://www.youtube.com/@RayX81194/'><img src={youtube} alt='yt' /></a></li>
      <li><a href='https://www.linkedin.com/manishphartiyal/'><img src={linkedin} alt='linkedin' /></a></li>
    </ul>
    <div className='footer flex justify-start items-end my-5 h-full'>
      <p className='text-base text-gray-500'>Made by <span className='font-semibold'>Ray</span></p>
    </div>
    </section>
    
   </div>
  )
}

export default App
