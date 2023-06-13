import axios from "axios"
import { TUpdateNoteService } from "../types/services"
import { getToken } from "../utils/token"

const updateNote: TUpdateNoteService = async(payload) => {
    const { data } = await axios.put("/api/notes/updateNote", payload, { headers: { Authorization: getToken() } })
    return data
}

export default updateNote