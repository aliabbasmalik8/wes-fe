import { getToken } from './../utils/token';
import { TCreateNoteService } from './../types/services';
import axios from "axios"

const createNote: TCreateNoteService = async(payload) => {
    const { data } = await axios.post("/api/notes/createNote", payload, { headers: { Authorization: getToken() } })
    return data
}

export default createNote