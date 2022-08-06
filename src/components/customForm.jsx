import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';

const CustomForm = ({ fields, ...props }) => (
  <Formik {...props}>
    {({ isValid, dirty, isSubmitting }) => (
      <Form className="mt-8 space-y-6">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          {fields.map(x => (
            <Field key={x.name} {...x} />
          ))}
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting || !(dirty && isValid)}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-slate-400 disabled:cursor-not-allowed"
          >
            Sign in
          </button>
        </div>
      </Form>
    )}
  </Formik>
);

CustomForm.propTypes = {};

export default CustomForm;
