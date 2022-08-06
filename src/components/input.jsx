import React from 'react';

const Input = ({ field, form: { touched, errors }, ...props }) => (
  <div>
    <label htmlFor={props.id} className="sr-only">
      {props.placeholder}
    </label>
    <input
      type="text"
      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      {...field}
      {...props}
    />
    {touched[field.name] && errors[field.name] && (
      <span className="text-red-500 text-sm py-1">{errors[field.name]}</span>
    )}
  </div>
);

export default Input;
