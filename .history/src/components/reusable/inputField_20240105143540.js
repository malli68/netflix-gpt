import React from 'react'

const InputField = ({name, type, placeholder }) => {
  return (
    <div>
        <input type={type} name={name} placeholder={placeholder}className="p-2 my-2 w-full bg-gray-700"/>
    </div>
  )
}

export default InputField