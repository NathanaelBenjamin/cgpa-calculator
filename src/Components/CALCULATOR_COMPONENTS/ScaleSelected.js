import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { pink } from '@mui/material/colors';

const ScaleSelected = ({ scaleText }) => {
  return (
    <div>
        <small>
            <span>{scaleText} Scale activated</span>
            <span className="icon">
            <CheckCircleIcon sx={{ color: pink[500] }} />
            </span>
        </small>
    </div>
  )
}

export default ScaleSelected