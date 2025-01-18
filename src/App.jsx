import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Button from './assets/components/Button.jsx'
import insta from './assets/Instagram.svg'
import linkedin from './assets/Linkedin.svg'
import youtube from './assets/Youtube.svg'
import one from './assets/1.jpg'
import two from './assets/2.jpg'
import three from './assets/3.jpg'
import four from './assets/4.jpg'
import five from './assets/5.jpg'
import six from './assets/6.jpg'
import seven from './assets/7.jpg'
import eight from './assets/8.jpg'
import nine from './assets/9.jpg'

function App() {
  return (
    <div className="flex h-full">
      <section className='fixed w-[300px] flex flex-col pt-10 pl-5 pr-20 h-full'>
        <h1 className='text-3xl font-bold'>Manish Phartiyal</h1>
        <p className='my-2 text-lg text-gray-500 max-w-[220px]'>
          <span className='font-semibold'>Art Student</span> from <span className='font-semibold'>College of Art, Delhi</span>
        </p>
        <ul>
          <li className='font-semibold text-base px-2 py-1 rounded-md w-[max-content] hover:bg-yellow-400'><Link to='/about'>about</Link></li>
          <li className='font-semibold text-base px-2 py-1 rounded-md w-[max-content] hover:bg-yellow-400'><Link to='/contact'>contact</Link></li>
          <li className='font-semibold text-base px-2 py-1 rounded-md w-[max-content] hover:bg-yellow-400'><Link to='/'>pictures</Link></li>
        </ul>
        <ul className='socials mt-5 flex gap-5'>
          <li><a href='https://www.instagram.com/manish.phartiyal/'><img src={insta} alt='insta' className='w-[25px] h-[25px]' /></a></li>
          <li><a href='https://www.youtube.com/@RayX81194/'><img src={youtube} alt='yt' className='w-[25px] h-[25px]' /></a></li>
          <li><a href='https://www.linkedin.com/manishphartiyal/'><img src={linkedin} alt='linkedin' className='w-[25px] h-[25px]' /></a></li>
        </ul>
        <div className='footer flex justify-start items-end my-5 h-full'>
          <p className='text-base text-gray-500'>Made by <span className='font-semibold'>Ray</span></p>
        </div>
      </section>
      <section className='w-full ml-[300px] overflow-y-scroll'>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Pictures />} />
        </Routes>
      </section>
    </div>
  )
}

function About() {
  return (
    <div className='p-5'>
      <h2 className='text-2xl font-bold'>About Me</h2>
      <p className='mt-2 text-lg'>This is the about section content...</p>
    </div>
  )
}

function Contact() {
  return (
    <div className='p-5'>
      <h2 className='text-2xl font-bold'>Contact</h2>
      <p className='mt-2 text-lg'>This is the contact section content...</p>
    </div>
  )
}

function Pictures() {
  return (
    <section className='w-full list mr-1'>
      <img src={one} alt='1' />
      <img src={two} alt='1' />
      <img src={three} alt='1' />
      <img src={four} alt='1' />
      <img src={five} alt='1' />
      <img src={six} alt='1' />
      <img src={seven} alt='1' />
      <img src={eight} alt='1' />
      <img src={nine} alt='1' />
    </section>   
  )
}

export default App