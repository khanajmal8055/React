import React from 'react'

function Button({
    children,   // button text
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button className={` ${className} ${textColor} ${bgColor} `} {...props}>{children}</button>
  )
}

export default Button