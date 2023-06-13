import React from "react"
import { IFormProps } from "../../types/components"
import { Formik } from "formik"
import { Box } from "@mui/material"

const Form: React.FC<IFormProps> = ({ children, initialValues, onSubmit, className, validationSchema }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={onSubmit}
        >
            {() => <Box className={className}>{children}</Box>}
        </Formik>
    )
}

export default Form