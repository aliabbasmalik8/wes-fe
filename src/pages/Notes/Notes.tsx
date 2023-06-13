import React from 'react'
import { Box } from '@mui/material'
import Page from '../../components/Page/Page'
import SearchBox from './SearchBox/SearchBox'
import { useNotes } from '../../hooks/note'
import NoteItem from './NoteItem/NoteItem'
import AddNote from './AddNote/AddNote'

import "./notes.scss"

const Notes = () => {
  const { notes } = useNotes()
  return (
    <Page className="notes-wrapper">
        <SearchBox />
        <Box className="notes-container">
          {notes?.map(note => <NoteItem key={note.id} {...note} />)}
          <AddNote />
        </Box>
    </Page>
  )
}

export default Notes