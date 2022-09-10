import React, { useContext } from 'react';
import { AppContext } from '../../CONTEXT/AppContext';

const GpaForm = ({ scale }) => {

    const borderStyles = useContext(AppContext)

  return (
    <div className='grid md:grid-cols-2 gap-8'>
        <form className='bg-teal-700 h-80 py-8 px-5 rounded bg-gradient-to-br from-teal-700 to-teal-600 flex flex-col justify-between'>
            <div className="grid gap-1">
                <input type="text" placeholder='Course name' className='form-input w-full my-2 rounded' />
                <input type="number" placeholder='Course unit' className='form-input w-full my-2 rounded' />
                <input type="number" placeholder='Score in course' className='form-input w-full my-2 rounded' />
            </div>

            <button className="flex gap-1 text-teal-700 bg-white w-44 py-2 px-4 hover:shadow-lg hover:shadow-teal-400 rounded transition duration-300">
                <span>Add course</span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </span>
            </button>
        </form>

        <div className="entries">
            <table className=''>
                <thead>
                    <tr>
                        <th className={`${borderStyles}`}>Course Name</th>
                        <th className={`${borderStyles}`}>Course Unit</th>
                        <th className={`${borderStyles}`}>Grade</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className={`${borderStyles}`}></td>
                        <td className={`${borderStyles}`}></td>
                        <td className={`${borderStyles}`}></td>
                    </tr>
                </tbody>
            </table>

            <button className="flex gap-1 text-teal-700 bg-white w-44 py-2 px-4 hover:shadow-lg hover:shadow-teal-400 rounded transition duration-300">Calculate GPA</button>
        </div>
    </div>
  )
}

export default GpaForm;