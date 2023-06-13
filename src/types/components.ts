import { ButtonProps, TextFieldProps } from "@mui/material";
import { FormikValues } from "formik";
import React from "react"

export interface IFormProps extends React.PropsWithChildren {
    initialValues: FormikValues;
    onSubmit: (...args: any[]) => Promise<any>;
    validationSchema?: any;
    className?: string;
}

export interface IFormInputProps extends Partial<TextFieldProps<"outlined">> {
    fieldName: string;
}

export interface IPageProps extends React.PropsWithChildren {
    className?: string;
    showNavbar?: boolean;
}

export interface IFormButtonProps extends ButtonProps {
}

export interface INavItemProps {
    label: string;
    Icon: React.FC;
    path: string;
}

export interface IFormSelectProps {
    fieldName: string
}