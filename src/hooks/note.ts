import { IMessageResponse } from './../types/common';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { useUser } from './user';
import getNotes from '../services/getNotes';
import deleteNote from '../services/deleteNote';
import toast from 'react-hot-toast';
import createNote from '../services/createNote';
import { INote } from '../types/services';
import updateNote from '../services/updateNote';
import { useAppSelector } from './redux';
import { NotesStatus } from '../constants/constants';

export const useNotes = () => {
    const { user } = useUser()
    const { search, noteStatus, createdAfter, createdBefore, updatedAfter, updatedBefore } = useAppSelector(state => state.notes)
    const { data, isFetching, refetch } = useQuery(["notes", search, noteStatus, createdAfter, createdBefore, updatedAfter, updatedBefore], 
        ({ queryKey }) => getNotes({  
            title: queryKey[1]!,
            status: queryKey[2]! as NotesStatus,
            createdAfter: queryKey[3]!, 
            createdBefore: queryKey[4]!, 
            updatedAfter: queryKey[5]!, 
            updatedBefore: queryKey[6]!
        }), 
        { enabled: !!user?.id })
    return { notes: data, isGettingNotes: isFetching, refetch }
}

export const useDeleteNote = () => {
    const client = useQueryClient()

    const onError = (error: any) => toast.error(error?.response?.data?.error)

    const onSuccess = (response: IMessageResponse) => {
        toast.success(response.message)
        client.invalidateQueries(["notes"])
    }

    const { mutateAsync, isLoading } = useMutation(deleteNote, { onSuccess, onError })
    return { deleteNote: mutateAsync, isDeletingNote: isLoading }
}

export const useCreateNote = () => {
    const client = useQueryClient()

    const onError = (error: any) => toast.error(error?.response?.data?.error)

    const onSuccess = async(note: INote) => client.setQueryData<INote[]>(["notes"], (notes: INote[] | undefined) => {
        if(notes?.length) return [...notes, note]
    })

    const { mutateAsync, isLoading } = useMutation(createNote, { onSuccess, onError })
    return { createNote: mutateAsync, isCreatingNote: isLoading }
}

export const useUpdateNote = () => {
    const client = useQueryClient()

    const onError = (error: any) => toast.error(error?.response?.data?.error)

    const onSuccess = async(response: IMessageResponse) => {
        client.invalidateQueries(["notes"])
    }

    const { mutateAsync, isLoading } = useMutation(updateNote, { onSuccess, onError })
    return { updateNote: mutateAsync, isUpadingNote: isLoading }
}