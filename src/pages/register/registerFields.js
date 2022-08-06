import Input from '../../components/input';

export const registerInitialValues = {
  name: '',
  email: '',
  password: '',
  confirm_password: '',
  age: 0,
};

export const registerFields = [
  {
    name: 'name',
    id: 'name',
    autoComplete: 'name',
    placeholder: 'Name',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'email',
    id: 'email-address',
    autoComplete: 'email',
    type: 'email',
    placeholder: 'Email address',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'age',
    id: 'age',
    type: 'number',
    placeholder: 'Age',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'password',
    id: 'password',
    autoComplete: 'new-password',
    placeholder: 'Password',
    type: 'password',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'confirm_password',
    id: 'confirm-password',
    autoComplete: 'new-password',
    placeholder: 'Confrim Password',
    type: 'password',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      if (value !== password.value) {
        return 'password should match confirm password...';
      }
      return '';
    },
  },
];
