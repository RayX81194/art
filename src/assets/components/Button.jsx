import React from 'react'

const Button = ({link, text}) => {
  return (
    <a href={link} className='font-bold text-md  px-4 py-2 rounded-lg hover:bg-yellow-400'>
      {text}
    </a>
  )
}

export default Button