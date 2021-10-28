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
    >
      {({ isSubmitting }) => (
        <StyledForm>
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
            <StyledTextArea
              as="textarea"
              name="message"
              id="message"
              placeholder="Enter your message here..."
            />
            <StyledErrorMessage name="message" component="div" />
          </InputWrapper>
        </StyledForm>
      )}
    </Formik>
  );
}

const StyledErrorMessage = styled(ErrorMessage)`
  position: relative;
  font-size: 1.5em;
  color: rgb(233, 23, 23);
  padding-top: 0.2em;
`;

const StyledTextArea = styled(Field)`
  appearance: none;
  resize: none;
  width: 100%;
  height: 20em;
  border: 2px solid white;
  border-radius: 10px;
  font-family: 'Prompt', sans-serif;
  font-weight: 400;
  font-size: 1.7em;
  text-align: center;
  background-color: transparent;
  color: white;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #3c31dd;
    transform: scale(1.01);
  }

  @media (min-width: 767px) {
    font-size: 2em;
  }
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
  margin: 0 auto 15em;
`;