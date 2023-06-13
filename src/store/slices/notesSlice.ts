import { INotesState } from './../../types/slices';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { NotesStatus } from '../../constants/constants';

const initialState: INotesState = {
    search: null,
    noteStatus: null,
    createdAfter: null,
    createdBefore: null,
    updatedAfter: null,
    updatedBefore: null
}

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        clearSearch: (state) => {
            state.search = null
        },
        setNoteStatus: (state, action: PayloadAction<NotesStatus>) => {
            state.noteStatus = action.payload
        },
        setCreatedAfter: (state, action: PayloadAction<string>) => {
            state.createdAfter = action.payload
        },
        setCreatedBefore: (state, action: PayloadAction<string>) => {
            state.createdBefore = action.payload
        },
        setUpdatedAfter: (state, action: PayloadAction<string>) => {
            state.updatedAfter = action.payload
        },
        setUpdatedBefore: (state, action: PayloadAction<string>) => {
            state.updatedBefore = action.payload
        },
    }
})

export const {
    setSearch,
    clearSearch,
    setNoteStatus,
    setCreatedAfter,
    setCreatedBefore,
    setUpdatedAfter,
    setUpdatedBefore
} = notesSlice.actions
export default notesSlice