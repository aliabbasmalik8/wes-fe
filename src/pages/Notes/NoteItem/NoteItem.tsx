import { Box } from '@mui/material'
import React from 'react'
import { INote } from '../../../types/services'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDeleteNote } from '../../../hooks/note'
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom'

import "./note-item.scss"

const NoteItem: React.FC<INote> = (note) => {
  const { deleteNote } = useDeleteNote()
  const navigate = useNavigate()

  const handleDelete = async() => deleteNote(note.id)

  const handleUpdate = async() => navigate(`/create-note/${note.id}`)

  return (
    <Box className="note-item-wrapper">
      <Box>{note.title}</Box>
      <Box>{note.description}</Box>
      <Box>{note.status}</Box>
      <Box onClick={handleUpdate} className="update-icon">
        <EditIcon />
      </Box>
      <Box onClick={handleDelete} className="delete-icon">
        <DeleteIcon />
      </Box>
    </Box>
  )
}

export default NoteItem