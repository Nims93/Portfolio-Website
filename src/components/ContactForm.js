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

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const onSubmit = (values, { setSubmitting, resetForm }) => {
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': 'contact', ...values }),
  })
    .then(() => {
      alert('Success');
      resetForm();
    })
    .catch(() => {
      alert('Error');
    })
    .finally(() => setSubmitting(false));
};

// const onSubmit = (values, { setSubmitting }) => {
//   setTimeout(() => {
//     alert(JSON.stringify(values, null, 2));
//     setSubmitting(false);
//   }, 500);
// };

export default function ContactForm() {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={Yup.object(VALIDATIONSCHEMA)}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <StyledForm name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
          <Field type="hidden" name="form-name" />
          <Field type="hidden" name="bot-field" />
          
          <InputWrapper id="name-wrapper">
            <Label htmlFor="name">Name / Organisation</Label>
            <StyledField
              name="name"
              id="name"
              placeholder="e.g. Kieran Cyprien"
            ></StyledField>
            <FieldBottomBorder />
            <StyledErrorMessage name="name" component="div" />
          </InputWrapper>

          <InputWrapper id="email-wrapper">
            <Label htmlFor="email">E-mail</Label>
            <StyledField
              type="email"
              name="email"
              id="emial"
              placeholder="example@example.com"
            ></StyledField>
            <FieldBottomBorder />
            <StyledErrorMessage name="email" component="div" />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="message">Message</Label>
            <Field
              as="textarea"
              name="message"
              id="message"
              placeholder="Enter your message here..."
            />
            <StyledErrorMessage name="message" component="div" />
          </InputWrapper>

          <SubmitBtn type="submit" disabled={isSubmitting}>
            Submit!
          </SubmitBtn>
        </StyledForm>
      )}
    </Formik>
  );
}

const SubmitBtn = styled.button`
  appearance: none;
  margin-top: 3em;
  padding: 0.2em 1em;
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: white;
  font-family: 'Prompt', sans-serif;
  font-size: 1.7em;
  transition: background-color 0.2s ease-in 0.1s, transform 0.2s ease-in;

  @media (min-width: 767px) {
    font-size: 2em;
  }

  &:focus {
    border: 2px solid #3c31dd;
    background-color: rgba(255, 255, 255, 0.527);
  }
  &:hover {
    background-color: rgba(23, 190, 113, 0.637);
    transform: translateY(-2px) scale(1.1) rotate(5deg);
  }
`;

const StyledErrorMessage = styled(ErrorMessage)`
  position: relative;
  font-size: 1.5em;
  color: rgb(233, 23, 23);
  padding-top: 0.2em;
`;

const FieldBottomBorder = styled.span`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 99%;
    height: 2px;
    background-color: white;
  }
`;

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

  &:focus {
    outline: none;
    border: 2px solid #3c31dd;
    transform: scale(1.01);

    & + span:after {
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
    margin-top: 1.5em;
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
  margin: 0 auto 5em;
`;
