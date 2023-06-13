import React from 'react'
import { Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

import "./add-note.scss"

const AddNote = () => {
  const navigate = useNavigate()

  const handleClick = () => navigate("/create-note")

  return (
    <Box onClick={handleClick} className="add-note-wrapper">
        <AddIcon />
        <Box>Create Notes</Box>
    </Box>
  )
}

export default AddNote