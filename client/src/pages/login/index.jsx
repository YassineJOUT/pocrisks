import React from "react";
import LoginForm from "../../components/login/form";
import UserFormContainer from "../../containers/userforms";


const LoginPage = () => {
  return (
    <>
      <UserFormContainer>
        <LoginForm />
      </UserFormContainer>
    </>
  );
};

export default LoginPage;
