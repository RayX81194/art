
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import insta from './assets/Instagram.svg'
import linkedin from './assets/Linkedin.svg'
import youtube from './assets/youtube.svg'
import one from './assets/1.jpg';
import two from './assets/2.jpg';
import three from './assets/3.jpg';
import four from './assets/4.jpg';
import five from './assets/5.jpg';
import six from './assets/6.jpg';
import seven from './assets/7.jpg';
import eight from './assets/8.jpg';
import nine from './assets/9.jpg';
import ten from './assets/10.jpg';
import eleven from './assets/11.jpg';
import twelve from './assets/12.jpg';
import thirteen from './assets/13.jpg';
import fourteen from './assets/14.jpg';
import fifteen from './assets/15.jpg';
import sixteen from './assets/16.jpg';
import seventeen from './assets/17.jpg';
import eighteen from './assets/18.jpg';
import nineteen from './assets/19.jpg';
import twenty from './assets/20.jpg';
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
<img src={one} alt="1" />
<img src={two} alt="2" />
<img src={three} alt="3" />
<img src={four} alt="4" />
<img src={five} alt="5" />
<img src={six} alt="6" />
<img src={seven} alt="7" />
<img src={eight} alt="8" />
<img src={nine} alt="9" />
<img src={ten} alt="10" />
<img src={eleven} alt="11" />
<img src={twelve} alt="12" />
<img src={thirteen} alt="13" />
<img src={fourteen} alt="14" />
<img src={fifteen} alt="15" />
<img src={sixteen} alt="16" />
<img src={seventeen} alt="17" />
<img src={eighteen} alt="18" />
<img src={nineteen} alt="19" />
<img src={twenty} alt="20" />
    </section>   
  )
}

export default App