import Input from '../../components/input';

export const loginInitialValues = {
  email: '',
  password: '',
};

export const loginFields = [
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
];
