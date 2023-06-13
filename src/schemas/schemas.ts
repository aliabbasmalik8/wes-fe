import * as yup from "yup"

const loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
})

const signupSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required()
})

const updateUserSchema = yup.object({
    firstName: yup.string().min(3).max(100),
    lastName: yup.string().min(3).max(100)
})

const createNoteSchema = yup.object({
    description: yup.string().required(),
    title: yup.string().required()
})

const updateNoteSchema = yup.object({
    description: yup.string(),
    status: yup.string(),
    title: yup.string()
})

export {
    loginSchema,
    signupSchema,
    updateUserSchema,
    createNoteSchema,
    updateNoteSchema
}