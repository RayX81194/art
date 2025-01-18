import React from 'react'

const Button = ({link, text}) => {
  return (
    <a href={link}>
    <li className='font-semibold text-base px-2 py-1 rounded-md w-[max-content] hover:bg-yellow-400'>
      {text}
    </li>
    </a>
  )
}

export default Button