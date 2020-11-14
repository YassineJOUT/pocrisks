import React, { useReducer } from "react";
import { Segment, Form, Button, Message } from "semantic-ui-react";
import { register } from "../../../service/repository";
import { Formik } from "formik";
import Notification from "../../shared/notification";
import { registrationSchema } from "../../../util/validationSchemas";

// formik dependencies
/**
 *
 */
const formInitialValues = {
  email: "",
  username: "",
  name: "",
  password: "",
};
// Register form user reducer dependencies
/**
 * State inital values
 */
const initialState = {
  isLoading: false,
  message: null,
  error: null,
};
/**
 * Reducer
 * @param {*} state registration form state
 * @param {*} action dispatched actions {type, payload}
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "request":
      return { isLoading: true };
    case "success":
      return {
        isLoading: false,
        error: null,
        message: action.payload,
      };
    default:
      return {
        isLoading: false,
        error: action.payload,
        message: null,
      };
  }
};

const RegisterForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFormSubmit = (values, { resetForm }) => {
    dispatch({ type: "request" });
    register(values)
      .then((res) => {
        if (res.data.success) {
          dispatch({
            type: "success",
            payload: res.data.message,
          });
          resetForm();
        } else dispatch({ type: "failure", payload: res.data.message });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "failure", payload: "Something wnt wrong!" });
      });
  };

  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={handleFormSubmit}
      validationSchema={registrationSchema}
    >
      {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
        <Form size="large" onSubmit={handleSubmit}>
          {(state.message || state.error) && (
            <Notification
              isVisible={true}
              isSuccess={state.message !== null}
              message={state.message}
              error={state.error}
            />
          )}
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              {...(errors.email && {
                error: {
                  content: errors.email,
                  pointing: "below",
                },
              })}
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              {...(errors.name && {
                error: {
                  content: errors.name,
                  pointing: "below",
                },
              })}
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              {...(errors.username && {
                error: {
                  content: errors.username,
                  pointing: "below",
                },
              })}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              {...(errors.password && {
                error: {
                  content: errors.password,
                  pointing: "below",
                },
              })}
            />
            <Button type="submit" color="teal" fluid size="large">
              {state.isLoading ? "Loading..." : "Create account"}
            </Button>
          </Segment>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
