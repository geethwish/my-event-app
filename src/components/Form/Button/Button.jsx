import React from 'react'
import MaterialButton from '@mui/material/Button';

const Button = ({ label, ...rest }) => {
    return (
        <>
            <MaterialButton variant="contained" {...rest}>
                {label}
            </MaterialButton>

        </>
    )
}

export default Button