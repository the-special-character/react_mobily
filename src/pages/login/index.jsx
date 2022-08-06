import React from 'react';
import CustomForm from '../../components/customForm';
import { loginFields, loginInitialValues } from './loginFields';

const Login = () => (
  <CustomForm
    initialValues={loginInitialValues}
    onSubmit={values => {
      console.log(values);
    }}
    fields={loginFields}
  />
);

export default Login;
