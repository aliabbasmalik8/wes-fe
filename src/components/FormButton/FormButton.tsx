import { Button } from '@mui/material'
import { useFormikContext } from 'formik'
import React from 'react'
import { IFormikContext } from '../../types/common'
import { IFormButtonProps } from '../../types/components'

const FormButton: React.FC<IFormButtonProps> = ({ children, ...rest }) => {
    const { handleSubmit } = useFormikContext<IFormikContext>()
    return (
        <Button {...rest} onClick={() => handleSubmit()} variant="contained">{children}</Button>
    )
}

export default FormButton