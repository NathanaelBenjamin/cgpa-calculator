import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const WarningMessage = ({ text, warning=` cannot be blank` }) => {
  return (
    <small className='text-rose-200 font-bold flex items-end'>
        <span>{text}{warning}</span> 
        <span className='-mt-4'>{<ErrorOutlineIcon />}</span>
    </small>
  )
}

export default WarningMessage;
