import React, {useContext, useState } from 'react';
import { AppContext } from '../../CONTEXT/AppContext';
import ClearButton from './ClearButton';
import CalculateButton from './CalculateButton';
import { createLimits } from '../../Data/resultClasses';
import Result from './Result';
import { useEffect } from 'react';

const GpaForm = ({ scale }) => {

    const { grades, categories } = createLimits(scale);

    const { borderStyles, courses, setCourses, parameters, setParameters, result, setResult, handleClearValues } = useContext(AppContext);

    const [ courseDetails, setCourseDetails ] = useState({
        name: "",
        unit: "",
        score: "",
        grade: "",
        gradePoint: ""
    });
    
    const [ resultClass, setResultClass ] = useState("");
    
    const assignGrades = (score) => {
        grades.map((item) => {
            if(score >= item.l && score <= item.u){
                setCourseDetails(prev => {
                    return {
                        ...prev,
                        grade: item.grade
                        
                    }
                })
            }
            return true;
        });
    }

    const handleChange = ({name, value}) => {
        
        if(name === "score"){
            assignGrades(parseInt(value));
        }

        setCourseDetails(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    const checkGrades = () => {
        courseDetails.gradePoint = parseInt(courseDetails.unit)*(grades.findIndex(item => {
            return item.grade === courseDetails.grade
        }));

        parameters.creditUnits.length > 0 ? setParameters(prev => {
            return {
                gradePoints: [...prev.gradePoints, courseDetails.gradePoint],
                creditUnits: [...prev.creditUnits, parseInt(courseDetails.unit)]
            }
        }) : setParameters(() => {
            return {
                gradePoints: [courseDetails.gradePoint],
                creditUnits: [parseInt(courseDetails.unit)]
            }
        })

        console.log(result)
    }

    const calculateResult = () => {
        if(parameters.creditUnits.length > 0){
        const totalGradePoints = parameters.gradePoints.reduce((a,b) => a + b);
        const totalCreditUnits = parameters.creditUnits.reduce((a,b) => a + b);
        setResult(() => (totalGradePoints/totalCreditUnits).toFixed(2));
<<<<<<< HEAD
        
        categories.map(item => {
            if(result && result >= item.lowerLimit && result <= item.upperLimit){
                setResultClass(item.class);
            }
            return true;
        });
=======
>>>>>>> 37f4a58719a2e481f3b907c60d32666e9cc4c08e
        }

    }

    const handleClass = ()=>{
         categories.map((item) => {
						if (
							result &&
							result >= item.lowerLimit &&
							result <= item.upperLimit
						) {
							setResultClass(item.class);
						}
						return true;
					});
    }

    useEffect(()=>{
       handleClass()
    },[result])

    const handleSubmit = (event) => {
        event.preventDefault();
        setCourses(prev => {
            return [...prev, courseDetails];
        });  
        checkGrades();
        setCourseDetails(() => {
            return {
                name: "",
                unit: "",
                score: "",
                grade: "",
            }
        })
    }

    return (
    <div className='grid grid-cols-1 items-center md:items-start md:grid-cols-2 gap-8'>
        <form className='bg-teal-700 h-80 py-8 px-5 rounded bg-gradient-to-br from-teal-700 to-teal-600 flex flex-col justify-between md:w-full'
            onSubmit={(event) => handleSubmit(event)}
        >
            <div className="grid gap-1">
                <input type="text" placeholder='Course name' className='form-input w-full my-2 rounded'
                    name="name"     
                    value={courseDetails.name}
                    onChange={(event) => {
                        handleChange(event.target)
                    }} 
                    required
                />

                {/* {showWarning && <small className='text-red-300'>Course has been selected before!</small>} */}

                <input type="number" placeholder='Course unit' className='form-input w-full my-2 rounded'
                    name="unit"
                    value={courseDetails.unit}  
                    onChange={(event) => {
                        handleChange(event.target)
                    }} 
                    required
                />

                <input type="number" placeholder='Score in course' className='form-input w-full my-2 rounded'
                    name="score"
                    value={courseDetails.score}  
                    onChange={(event) => {
                        handleChange(event.target);
                    }} 
                    required
                />
            </div>

            <button className="flex gap-1 text-teal-700 bg-white w-44 py-2 px-4 hover:shadow-lg hover:shadow-teal-400 rounded transition duration-300"
            >
                <span>Add course</span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </span>
            </button>
        </form>

        <div className="entries flex flex-col gap-3">
            <table className=''>
                <thead>
                    <tr>
                        <th className={`${borderStyles(result)}`}>S/N</th>
                        <th className={`${borderStyles(result)}`}>Course Name</th>
                        <th className={`${borderStyles(result)}`}>Course Unit</th>
                        <th className={`${borderStyles(result)}`}>Course Score</th>
                        <th className={`${borderStyles(result)}`}>Grade</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        courses.map((item, index) => {
                            return <tr key={index+1}>
                            <td className={`${borderStyles(result)}`}>{index+1}</td>
                            <td className={`${borderStyles(result)} uppercase`}>{item.name}</td>
                            <td className={`${borderStyles(result)}`}>{item.unit}</td>
                            <td className={`${borderStyles(result)}`}>{item.score}</td>
                            <td className={`${borderStyles(result)}`}>{item.grade}</td>
                        </tr>
                        })
                    }
                </tbody>
            </table>

            {
                courses.length > 0 && 
                <div className="buttons flex flex-col gap-3 md:flex-row">
                    <CalculateButton clickFunction={() => {
                        calculateResult()
                    }} 
                    />

                    <ClearButton 
                        clickFunction={() => {
                            handleClearValues()
                        }}
                    />
                </div>
            }
        </div>

        {result && <Result result={result} text={`GPA`} resultClass={resultClass} />}
    </div>
  )
}

export default GpaForm;