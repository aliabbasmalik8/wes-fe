import { IMessageResponse } from './../types/common';
import { setToken, removeToken } from './../utils/token';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import getUser from "../services/getUser"
import login from "../services/login"
import signup from "../services/signup"
import updateUser from '../services/updateUser';

export const useUser = () => {
    const { data, isFetching } = useQuery(["getUser"], getUser)
    return { user: data, isGettingUser: isFetching }
}

export const useLogin = () => {
    const client = useQueryClient()

    const onError = (error: any) => toast.error(error?.response?.data?.error)

    const onSuccess = (token: string) => {
        setToken(token)
        client.invalidateQueries(["getUser"])
    }

    const { mutateAsync, isLoading } = useMutation(login, { onError, onSuccess })
    return { login: mutateAsync, isLoggingIn: isLoading }
}

export const useSignup = () => {
    const client = useQueryClient()

    const onError = (error: any) => toast.error(error?.response?.data?.error)

    const onSuccess = (token: string) => {
        setToken(token)
        client.invalidateQueries(["getUser"])
    }

    const { mutateAsync, isLoading } = useMutation(signup, { onError, onSuccess })
    return { signup: mutateAsync, isSigningUp: isLoading }
}

export const useUpdateUser = () => {
    const client = useQueryClient()

    const onError = (error: any) => toast.error(error?.response?.data?.error)

    const onSuccess = (response: IMessageResponse) => {
        toast.success(response.message)
        client.invalidateQueries(["getUser"])
    }

    const { mutateAsync, isLoading } = useMutation(updateUser, { onError, onSuccess })
    return { updateUser: mutateAsync, isUpdating: isLoading }
}

export const useLogout = () => {
    const client = useQueryClient()
    const logout = async () => {
        removeToken()
        await client.removeQueries()
    }
    return { logout }
}