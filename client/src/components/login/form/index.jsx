import React, { useReducer } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { login } from "../../../service/repository";

const initialState = {
  isLoading: false,
  user: {
    id: "",
    name: "",
  },
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "request":
      return { isLoading: true };
    case "success":
      return { isLoading: false, user: action.payload, error: "" };
    default:
      return { isLoading: false, error: action.payload, user: null };
  }
};

const LoginForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    dispatch({ type: "request" });
    login()
      .then((res) =>
        dispatch({ type: "success", payload: { id: "1", name: "yassine" } })
      )
      .catch((err) =>
        dispatch({ type: "failure", payload: "Something wnt wrong!" })
      );
  };

  return (
    <Form size="large">
      <Segment stacked>
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="E-mail address"
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
        />
        <Button onClick={handleSubmit} color="teal" fluid size="large">
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default LoginForm;
