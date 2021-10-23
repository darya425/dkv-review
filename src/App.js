import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { sendPostRequest } from './reviewsApi';
import { CustomTextInput } from './shared/CustomTextInput';
import { CustomTextarea } from './shared/CustomTextarea';
import { Elements } from './shared/Elements';
import { Footer } from './shared/Footer';

import { Styles } from './Styles';

function App() {
  return (
    <Styles>
      <div className="container">
        <Elements />
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(3, 'Must be at least 3 characters')
              .max(20, 'Must be 20 characters or less')
              .required('Field must be filled'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Field must be filled'),
            message: Yup.string()
              .min(10, 'Must be at least 10 characters')
              .max(200, 'Must be 100 characters or less')
              .required('Field must be filled'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            sendPostRequest(values);
            resetForm();
            setSubmitting(false);
          }}
        >
          {props => (
            <Form className="form" autocomplete="off">
              <h1 className="title">Reach out to us!</h1>
              <CustomTextInput
                label="Name"
                name="name"
                type="text"
                placeholder="Davoria Paori"
              />
              <CustomTextInput
                autocomplete="off"
                label="Email"
                name="email"
                type="email"
                placeholder="davoria@gmail.com"
              />
              <CustomTextarea
                label="Message"
                name="message"
                type="text"
                placeholder="Write your review here..."
              />
              <button className="button" type="submit">
                {props.isSubmitting ? 'Loading...' : 'Submit'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </Styles>
  );
}

export default App;
