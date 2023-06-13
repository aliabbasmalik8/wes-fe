import React from 'react'
import { useFormikContext } from 'formik'
import { NotesStatus } from '../../constants/constants'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { IFormSelectProps } from '../../types/components'
import { IFormikContext } from '../../types/common'

const FormSelect: React.FC<IFormSelectProps> = ({ fieldName }) => {
  const { values, handleChange, setFieldTouched, touched, errors } = useFormikContext<IFormikContext>()
  return (
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Note-Status</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label='Note-Status'
            value={values[fieldName]}
            onChange={handleChange(fieldName) as any}
            onBlur={() => setFieldTouched(fieldName)}
            error={touched[fieldName] && !!errors[fieldName]}
            classes={{ select: 'select-class' }}
        >
            {Object.values(NotesStatus).map(status => <MenuItem key={status} value={status}>{status}</MenuItem>)}
        </Select>
    </FormControl>
  )
}

export default FormSelect