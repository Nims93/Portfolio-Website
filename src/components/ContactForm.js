import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const VALIDATIONSCHEMA = {
  email: Yup.string().required('Enter a valid e-mail address'),
  name: Yup.string()
    .min(2, 'Must be at least 2 characters')
    .required('Enter a name'),
  message: Yup.string()
    .min(10, 'Enter a message at least 10 characters long')
    .required('Enter a message'),
};

const onSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 500);
};

export default function ContactForm() {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={Yup.object(VALIDATIONSCHEMA)}
      onSubmit={onSubmit}
    ></Formik>
  );
}

const StyledField = styled(Field)`
  position: relative;
  appearance: none;
  border: none;
  font-size: 1.7em;
  font-weight: 400;
  text-align: center;
  height: 2em;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  transition: transform 0.3s ease-in-out;

  & + span.input-bottom-border::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 99%;
    height: 2px;
    background-color: white;
  }

  &:focus {
    outline: none;
    border: 2px solid #3c31dd;
    transform: scale(1.01);

    & + .input-bottom-border::after {
      background-color: transparent;
    }
  }

  @media (min-width: 767px) {
    font-size: 2em;
  }
`;

const Label = styled.label`
  font-size: 1.7em;
  margin-top: 1em;

  @media (min-width: 767px) {
    font-size: 2.2em;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const StyledForm = styled(Form)`
  width: 90%;
  margin: 0 auto 15em;
`;
