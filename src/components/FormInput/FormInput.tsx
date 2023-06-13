import React from 'react'
import { TextField } from "@mui/material"
import { useFormikContext } from 'formik'
import { IFormikContext } from '../../types/common'
import { IFormInputProps } from '../../types/components'

const FormInput: React.FC<IFormInputProps> = ({ variant = "outlined", fieldName, ...rest }) => {
  const { values, touched, errors, setFieldTouched, handleChange } = useFormikContext<IFormikContext>()
  return (
    <TextField 
        variant={variant}
        {...rest}
        value={values[fieldName]}
        error={touched[fieldName] && !!errors[fieldName]}
        helperText={touched[fieldName] ? errors[fieldName] as string : undefined}
        onBlur={() => setFieldTouched(fieldName)}
        onChange={handleChange(fieldName)}
    />
  )
}

export default FormInput