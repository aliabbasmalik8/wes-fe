import axios from "axios"
import { getToken } from './../utils/token';
import { TGetNotesService } from './../types/services';

const getNotes: TGetNotesService = async({ title, status, updatedBefore, updatedAfter, createdBefore, createdAfter }) => {
    let BASEURL = '/api/notes/search?'
    if(title) BASEURL += `title=${title}`
    if(status) BASEURL += `&status=${status}`
    if(updatedBefore) BASEURL += `&updatedBefore=${updatedBefore}`
    if(updatedAfter) BASEURL += `&updatedAfter=${updatedAfter}`
    if(createdBefore) BASEURL += `&createdBefore=${createdBefore}`
    if(createdAfter) BASEURL += `&createdAfter=${createdAfter}`
    const { data } = await axios.post(BASEURL, {},  { headers: { Authorization: getToken() } })
    return data
}

export default getNotes