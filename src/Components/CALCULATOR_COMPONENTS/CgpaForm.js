import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../CONTEXT/AppContext';
import ClearButton from './ClearButton';
import Result from './Result';
import WarningMessage from './WarningMessage';

const CgpaForm = () => {

    const { borderStyles, resultClass, handleClass } = useContext(AppContext);

    const [ formSubmitted, setformSubmitted] = useState({
        gp1: null,
        gp2: null
    });

    const [ values, setValues ] = useState({
        gp1: "",
        gp2: "",
        cgpa: ""
    });

    const handleValueChange = (name, value) => {
        setValues(prev => {
            return {...prev,
            [name]: value}
        });

        value.length > 0 ? setformSubmitted(prev => {
            return {
                ...prev,
                [name]: true
            }
        }) : setformSubmitted(prev => {
            return {
                ...prev,
                [name]: false
            }
        })

        console.log(formSubmitted);
    }

    const calculateCGPA = () => {
        if(values.gp1.length > 0 && values.gp2 > 0){
            setValues(prev => {
                return {
                    gp1: prev.gp1,
                    gp2: prev.gp2,
                    cgpa: ((parseFloat(prev.gp1) + parseFloat(prev.gp2))/2).toFixed(2)
                }
            })

            return true;
        }

        else{
            setformSubmitted({
                gp1: values.gp1.length > 0 ? true : false,
                gp2: values.gp2.length > 0 ? true : false
            });
            return false;
        }
    }

    useEffect(() => {

        handleClass(values.cgpa) 

    }, [values.cgpa]);

    const clearValues = () => {
        setValues(() => {
            return {
                gp1: "",
                gp2: "",
                cgpa: ""
            }
        });

        setformSubmitted({
            gp1: null,
            gp2: null
        });
    }
    

  return (
    <div>
        <div className='grid md:grid-cols-4 gap-6'>
            <form className='bg-teal-700 h-80 py-8 px-5 rounded bg-gradient-to-br from-teal-700 to-teal-600 flex flex-col justify-between md:col-span-2'
                onSubmit={(event) => {
                    event.preventDefault()
                    calculateCGPA();
                }}
            >
                <div className="grid">
                    <input type="number" placeholder='First Semester GP' className='input-field' 
                    name="gp1"
                    maxLength={3}
                    value={values.gp1}
                    
                        onChange={({target: {name: name, value:value}}) => {
                            handleValueChange(name, value);
                        }}
                    />

                        {( formSubmitted.gp1 === false) && <WarningMessage text={`First Semester GP field`} />} 

                    <input type="number" placeholder='Second Semester GP' className='input-field' 
                        value={values.gp2}
                        name="gp2"
                        maxLength={3}
                        onChange={({target: {name: name, value: value}}) => {
                            handleValueChange(name, value);
                        }}
                    />

                    {(formSubmitted.gp2 === false) && <WarningMessage text={`Second Semester GP field`} />}
                </div>

                <button className="w-44 flex gap-1 text-teal-700 bg-white py-2 px-4 hover:shadow-lg hover:shadow-teal-400 rounded transition duration-300">
                    <span>Calculate CGPA</span>
                </button>
            </form>

            <div className="entries md:col-span-2 flex flex-col gap-3">
                <table className={`${borderStyles(values.cgpa)}`}>
                    <thead>
                        <tr>
                            <th className={`${borderStyles(values.cgpa)}`}>First Semester GP</th>
                            <th className={`${borderStyles(values.cgpa)}`}>Second Semester GP</th>
                            <th className={`${borderStyles(values.cgpa)}`}>CGPA</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className={`${borderStyles(values.cgpa)}`}>{values.gp1}</td>
                            <td className={`${borderStyles(values.cgpa)}`}>{values.gp2}</td>
                            <td className={`${borderStyles(values.cgpa)}`}>{values.cgpa}</td>
                        </tr>
                    </tbody>
                </table>

                {
                    (values.gp1 && values.gp2) && 
                    <div className="flex gap-3">
                        <ClearButton 
                            text={`Clear values`}
                            clickFunction={() => clearValues()}  
                        />
                    </div> 
                }
            </div>

            {values.cgpa && <Result text={`Cumulative Grade Point Average(CGPA)`} result={values.cgpa} resultClass={resultClass} />}
        </div>
    </div>
  )
}

export default CgpaForm;