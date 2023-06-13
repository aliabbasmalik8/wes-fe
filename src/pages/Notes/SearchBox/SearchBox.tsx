import React from 'react'
import { Box, Select, SelectChangeEvent, TextField, MenuItem, FormControl, InputLabel } from '@mui/material'
import { NotesStatus } from '../../../constants/constants'
import { setCreatedAfter, setCreatedBefore, setNoteStatus, setSearch, setUpdatedAfter, setUpdatedBefore } from '../../../store/slices/notesSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import "./search-box.scss"

const SearchBox = () => {
  const { search } = useAppSelector(state => state.notes)
  const dispatch = useAppDispatch()

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setSearch(e.currentTarget.value))
  }

  const handleStatusChange = (e: SelectChangeEvent<string>) => {
    dispatch(setNoteStatus(e.target.value as NotesStatus))
  }

  return (
    <Box className="search-box">
        <TextField value={search} onChange={handleChange}  label="Search for notes" fullWidth />
        <Box className="note-status-select">
          <Box>
            <Box>Created Before</Box>
            <input onChange={(e) => dispatch(setCreatedBefore(e.currentTarget.value))} type="date" />
          </Box>
          <Box>
            <Box>Created After</Box>
            <input onChange={(e) => dispatch(setCreatedAfter(e.currentTarget.value))}  type="date" />
          </Box>
          <Box>
            <Box>Updated Before</Box>
            <input onChange={(e) => dispatch(setUpdatedBefore(e.currentTarget.value))}  type="date" />
          </Box>
          <Box>
            <Box>Updated After</Box>
            <input onChange={(e) => dispatch(setUpdatedAfter(e.currentTarget.value))}  type="date" />
          </Box>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Note-Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label='Note-Status'
              onChange={handleStatusChange}
              classes={{ select: 'select-class' }}
            >
              {Object.values(NotesStatus).map(status => <MenuItem key={status} value={status}>{status}</MenuItem>)}
            </Select>
          </FormControl>
        </Box>
    </Box>
  )
}

export default SearchBox