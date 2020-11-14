import React from "react";
import { Grid, Header, Message } from "semantic-ui-react";

const UserFormContainer = ({ children, isRegister }) => {
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Welcome to lookup city
        </Header>
        {children}
        <Message>
          {isRegister ?<span>Already registred? <a href="#">Sign In</a></span> : <span>New to us? <a href="#">Sign Up</a></span> } 
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default UserFormContainer;
