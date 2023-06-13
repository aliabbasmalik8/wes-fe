import axios from "axios"
import { TDeleteNoteService } from "../types/services";
import { getToken } from './../utils/token';

const deleteNote: TDeleteNoteService = async(id) => {
    const { data } = await axios.delete(`/api/notes/${id}`, { headers: { Authorization: getToken() } })
    return data
}

export default deleteNote