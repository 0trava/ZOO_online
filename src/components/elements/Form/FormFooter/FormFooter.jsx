import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import style from './FormFooter.module.css';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const FormFooter = () => {
  return (
    <div className={style.body}>
      <h3 className={style.title}>Contact us</h3>
      <Formik
        initialValues={{
          firstName: '',
          message: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={style.form}>
            {/* Name */}
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            {/* Email */}
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}

            {/* Message */}
            <Field name="message" type="textarea" />
            {errors.message && touched.message ? (
              <div>{errors.message}</div>
            ) : null}

            {/* button */}
            <button type="submit" className={style.button}>
              Send 
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="8" viewBox="0 0 49 8" fill="none">
                <path d="M48.3536 4.35355C48.5488 4.15829 48.5488 3.84171 48.3536 3.64645L45.1716 0.464466C44.9763 0.269204 44.6597 0.269204 44.4645 0.464466C44.2692 0.659728 44.2692 0.976311 44.4645 1.17157L47.2929 4L44.4645 6.82843C44.2692 7.02369 44.2692 7.34027 44.4645 7.53553C44.6597 7.7308 44.9763 7.7308 45.1716 7.53553L48.3536 4.35355ZM0 4.5L48 4.5V3.5L0 3.5L0 4.5Z" fill="#FEFEFE"/>
                </svg>
              </span>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormFooter;
