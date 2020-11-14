import React from "react";
import { Grid, Header, Message } from "semantic-ui-react";
import LoginForm from "../../components/login/form";

const LoginContainer = () => {

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Welcome to lookup city
        </Header>
        <LoginForm />
        <Message>
          New to us? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginContainer;
