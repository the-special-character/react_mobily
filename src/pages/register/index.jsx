import React from 'react';
import { registerFields, registerInitialValues } from './registerFields';
import CustomForm from '../../components/customForm';

const Register = () => (
  <CustomForm
    initialValues={registerInitialValues}
    onSubmit={values => {
      console.log(values);
    }}
    fields={registerFields}
  />
);

export default Register;
