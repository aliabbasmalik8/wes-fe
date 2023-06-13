import axios from "axios"
import { TSignupService } from "../types/services"

const signup: TSignupService = async(payload) => {
    const { data } = await axios.post("/api/users/signup", payload)
    return data
}

export default signup