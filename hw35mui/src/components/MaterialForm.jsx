import React from "react";
import { Button, Box, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { boolean, object, string } from "yup";

const initialValues = {
  email: "",
  name: "",
  password: "",
  registration: "",
};

const MaterialForm = ({ onTodoChange }) => {
  return (
    <div className="MaterialForm">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          formikHelpers.resetForm();
          onTodoChange(values.todo);
        }}
        validationSchema={object({
          email: string().email("Invalid email").required("Please enter email"),
          name: string()
            .min(10, "Name too short, should be minimum 10 characters")
            .max(100, "Name so large, should be maximum 100 characters")
            .required("Please enter name"),
          password: string()
            .min(10, "Password should be minimum 10 characters")
            .max(100, "Password so large, should be maximum 100 characters")
            .required("Please enter password"),
        })}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form>
            <Field
              name="email"
              type="email"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Email"
              fullWidth
              error={Boolean(errors.email) && Boolean(touched.email)}
              helperText={Boolean(touched.email) && errors.email}
            />
            <Box height={14} />
            <Field
              name="name"
              type="name"
              as={TextField}
              variant="outlined"
              color="primary"
              label="name"
              fullWidth
              error={Boolean(errors.name) && Boolean(touched.name)}
              helperText={Boolean(touched.name) && errors.name}
            />
            <Box height={14} />
            <Field
              name="password"
              type="password"
              as={TextField}
              variant="outlined"
              color="primary"
              label="password"
              fullWidth
              error={Boolean(errors.password) && Boolean(touched.password)}
              helperText={Boolean(touched.password) && errors.password}
            />
            <Box height={14} />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={!dirty || !isValid}
            >
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MaterialForm;
