import React from 'react'

const Button = ({link, text}) => {
  return (
    <li href={link} className='font-bold text-base px-2 py-1 rounded-md w-[max-content] hover:bg-yellow-400'>
      {text}
    </li>
  )
}

export default Button