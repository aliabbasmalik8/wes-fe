import axios from "axios"
import { getToken } from './../utils/token';
import { TUpdateUserService } from "../types/services"

const updateUser: TUpdateUserService = async(payload) => {
    const { data } = await axios.put("/api/users/updateUser", payload, { headers: { Authorization: getToken() } })
    return data
}

export default updateUser