import React, { useState } from 'react';

const Result = ({ result, text, resultClass }) => {

    // const [resultDescription, setResultDescription] = useState({
    //     value: result,
    //     class: ""
    // });

  return(
    <div className='result bg-teal-700 text-gray-100 px-2 py-2 rounded'>
        Here's your result!

        <div>
            {text}: {result} {resultClass && <span> and you're on {resultClass}.</span>}
        </div>
    </div>
  )
}

export default Result;