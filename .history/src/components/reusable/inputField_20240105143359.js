import React from 'react'

const inputField = ({name, type, }) => {
  return (
    <div>
        <input type={type} name={name}/>
    </div>
  )
}

export default inputField