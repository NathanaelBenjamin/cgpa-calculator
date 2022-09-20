import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { pink } from '@mui/material/colors';

const ScaleSelected = ({ scaleText }) => {
  return (
    <div>
        <small className="text-gray-700 dark:text-gray-50">
            <span>{scaleText} Scale activated</span>
            <span className="icon">
            <CheckCircleIcon sx={{ color: pink[500] }} />
            </span>
        </small>
    </div>
  )
}

export default ScaleSelected