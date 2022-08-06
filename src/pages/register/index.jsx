import React, { useContext } from 'react';
import { registerFields, registerInitialValues } from './registerFields';
import CustomForm from '../../components/customForm';
import { AuthContext } from '../../context/authContext';

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  return (
    <CustomForm
      initialValues={registerInitialValues}
      onSubmit={registerUser}
      fields={registerFields}
    />
  );
};

export default Register;
