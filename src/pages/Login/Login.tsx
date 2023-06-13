import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/Form/Form';
import FormButton from '../../components/FormButton/FormButton';
import FormInput from '../../components/FormInput/FormInput';
import Page from '../../components/Page/Page';
import { useLogin } from '../../hooks/user';
import { loginSchema } from '../../schemas/schemas';
import { ILoginPaylaod } from '../../types/services';

import './login.scss';

const Login = () => {
  const { login, isLoggingIn } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (values: ILoginPaylaod) => login(values);

  const handleNavigate = () => navigate('/signup');

  return (
    <Page className="page-styles" showNavbar={false}>
      <Form
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        className="form-wrapper"
        onSubmit={handleSubmit}
      >
        <Box className="heading">Login</Box>
        <FormInput fieldName="email" label="Email" fullWidth />
        <FormInput
          fieldName="password"
          label="Password"
          fullWidth
          type="password"
        />
        <FormButton disabled={isLoggingIn} variant="contained">
          Login
        </FormButton>
        <Button onClick={handleNavigate} disabled={isLoggingIn} variant="text">
          Signup
        </Button>
      </Form>
    </Page>
  );
};

export default Login;
