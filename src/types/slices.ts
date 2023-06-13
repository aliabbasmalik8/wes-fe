import { NotesStatus } from "../constants/constants";

export interface INotesState {
    search: string | null;
    noteStatus: NotesStatus | null;
    createdAfter: string | null;
    createdBefore: string | null;
    updatedAfter: string | null;
    updatedBefore: string | null;
}