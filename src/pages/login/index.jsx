import React, { useContext } from 'react';
import CustomForm from '../../components/customForm';
import { AuthContext } from '../../context/authContext';
import { loginFields, loginInitialValues } from './loginFields';

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <CustomForm
      initialValues={loginInitialValues}
      onSubmit={login}
      fields={loginFields}
    />
  );
};

export default Login;
