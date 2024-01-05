import React from 'react'

const InputField = ({name, type, placeholder }) => {
  return (
    <div>
        <input type={type} name={name} placeholder={placeholder}/>
    </div>
  )
}

export default InputField