import React from 'react'

const CalculateButton = ({ clickFunction }) => {
  return (
    <div>
        <button className="flex gap-1 text-teal-700 bg-white w-44 py-2 px-4 hover:shadow-lg hover:shadow-teal-400 rounded transition duration-300"
            onClick={() => {
                clickFunction()
            }}
        >Calculate GPA
        </button>
    </div>
  )
}

export default CalculateButton;