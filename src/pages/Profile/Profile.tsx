import React from 'react'
import { Box } from '@mui/material'
import Page from '../../components/Page/Page'
import Form from '../../components/Form/Form'
import { updateUserSchema } from '../../schemas/schemas'
import { IUpdateUserPayload } from '../../types/services'
import { useUpdateUser, useUser } from '../../hooks/user'
import FormInput from '../../components/FormInput/FormInput'
import FormButton from '../../components/FormButton/FormButton'

import "./profile.scss"

const Profile = () => {
  const { user, isGettingUser } = useUser()
  const { updateUser, isUpdating } = useUpdateUser()

  const handleSubmit = async(values: IUpdateUserPayload) => updateUser(values)

  return (
    <Page className="profile-wrapper">
        <Form
            initialValues={{ firstName: user?.firstName, lastName: user?.lastName }}
            className="profile-form"
            onSubmit={handleSubmit}
            validationSchema={updateUserSchema}
        >
            <Box className="heading">Edit Account Information</Box>
            <FormInput disabled={isUpdating || isGettingUser} fieldName='firstName' label="First Name" fullWidth />
            <FormInput disabled={isUpdating || isGettingUser} fieldName='lastName' label="Last Name" fullWidth />
            <FormButton disabled={isUpdating || isGettingUser} variant="contained">Update Account</FormButton>
        </Form>
    </Page>
  )
}

export default Profile