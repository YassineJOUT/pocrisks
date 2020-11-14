import React from "react";
import RegisterForm from "../../components/register/form";
import UserFormContainer from "../../containers/userforms";

const RegistrationPage = () => {
  return (
    <>
      <UserFormContainer isRegister={true}>
          <RegisterForm />
      </UserFormContainer>
    </>
  );
};

export default RegistrationPage;
