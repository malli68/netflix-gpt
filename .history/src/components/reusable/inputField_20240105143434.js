import React from 'react'

const inputField = ({name, type, placeholder }) => {
  return (
    <div>
        <input type={type} name={name} placeholder={placeholder}/>
    </div>
  )
}

export default inputField