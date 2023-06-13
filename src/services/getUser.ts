import axios from "axios"
import { TGetUserService } from "../types/services"
import { getToken } from "../utils/token"

const getUser: TGetUserService = async() => {
    const token = getToken()
    if(!token) throw new Error("no token present");
    const { data } = await axios.get("/api/users/getUser", { headers: { Authorization: getToken() } })
    return data
}

export default getUser