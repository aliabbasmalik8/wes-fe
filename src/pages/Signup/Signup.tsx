import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/Form/Form';
import FormButton from '../../components/FormButton/FormButton';
import FormInput from '../../components/FormInput/FormInput';
import Page from '../../components/Page/Page';
import { useSignup } from '../../hooks/user';
import { signupSchema } from '../../schemas/schemas';
import { ISignupPayload } from '../../types/services';

import './signup.scss';

const Signup = () => {
  const { signup, isSigningUp } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = async (values: ISignupPayload) => signup(values);

  const handleNavigate = () => navigate('/login');

  return (
    <Page className="page-styles" showNavbar={false}>
      <Form
        initialValues={{ email: '', password: '', firstName: '', lastName: '' }}
        validationSchema={signupSchema}
        className="form-wrapper"
        onSubmit={handleSubmit}
      >
        <Box className="heading">Signup</Box>
        <FormInput fieldName="firstName" label="First Name" fullWidth />
        <FormInput fieldName="lastName" label="Last Name" fullWidth />
        <FormInput fieldName="email" label="Email" fullWidth />
        <FormInput
          fieldName="password"
          label="Password"
          fullWidth
          type="password"
        />
        <FormButton disabled={isSigningUp} variant="contained">
          Signup
        </FormButton>
        <Button onClick={handleNavigate} disabled={isSigningUp} variant="text">
          Login
        </Button>
      </Form>
    </Page>
  );
};

export default Signup;
