import { TLoginService } from "../types/services"
import axios from "axios"

const login: TLoginService = async(payload) => {
    const { data } = await axios.post(`/api/users/login`, payload)
    return data
}

export default login