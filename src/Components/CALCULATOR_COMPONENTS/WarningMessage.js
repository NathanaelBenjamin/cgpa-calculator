import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const WarningMessage = ({ text, warning=` cannot be blank` }) => {
  return (
    <small className='text-red-200 flex items-end mb-4'>
        <span>{text}{warning}</span> 
        <span className='-mt-4'>{<ErrorOutlineIcon />}</span>
    </small>
  )
}

export default WarningMessage;
