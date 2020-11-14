import React, { useReducer } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { Formik } from "formik";
import { login } from "../../../service/repository";
import { loginValidationSchema } from "../../../util/validationSchemas";
import Notification from "../../shared/notification";

// formik dependencies
/**
 *
 */
const formInitialValues = {
  email: "",
  password: "",
};
// login form user reducer dependencies
/**
 * State inital values
 */
const initialState = {
  isLoading: false,
  user: null,
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
      return { isLoading: false, user: action.payload, error: null };
    default:
      return { isLoading: false, error: action.payload, user: null };
  }
};

const LoginForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFormSubmit = (values, { resetForm }) => {
    dispatch({ type: "request" });
    login(values)
      .then((res) => {
        if (res.data.success) {
          dispatch({
            type: "success",
            payload: res.data.data,
          });
          resetForm();
        } else dispatch({ type: "failure", payload: res.data.message });
      })
      .catch((err) => {
        dispatch({ type: "failure", payload: "Something wnt wrong!" });
      });
  };

  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={handleFormSubmit}
      validationSchema={loginValidationSchema}
    >
      {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
        <Form size="large" onSubmit={handleSubmit}>
          {state.error && (
            <Notification
              isVisible={true}
              isSuccess={false}
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
              {state.isLoading ? "Loading..." : "Login"}
            </Button>
          </Segment>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
