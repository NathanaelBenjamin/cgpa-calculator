import React from 'react';

const Result = ({ result, text, resultClass }) => {
  return(
    <div className='result bg-pink-600 text-gray-100 px-3 py-4 rounded md:col-span-2 text-center'>
        <h1 className='text-2xl font-bold mb-2'>Here's your result!</h1>

        <div className="text-lg">
            {text}: {result} {resultClass && <span> and you're on {resultClass}.</span>}
        </div>
    </div>
  )
}

export default Result;