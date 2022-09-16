import React from 'react'

const ClearButton = ({ clickFunction, text="Clear courses" }) => {
  return (
    <div>
        <button
            className='bg-teal-700 text-gray-100 py-2 px-4 rounded transition duration-300 hover:bg-transparent hover:border hover:border-teal-700 hover:text-teal-700'
            onClick={() => {
                clickFunction();
            }}
        >
            {text}
        </button>
    </div>
  )
}

export default ClearButton;