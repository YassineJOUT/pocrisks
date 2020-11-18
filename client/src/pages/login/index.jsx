import React, { useContext, useEffect } from "react";
import LoginForm from "../../components/login/form";
import UserFormContainer from "../../containers/userforms";
import { history } from "../../util/history";
import { Context } from "../../util/useAuth";

const LoginPage = () => {
  const { contextState, setContext } = useContext(Context);
  // open dashboard if user is logged in
  useEffect(() => {
    if (contextState.isLogged) {
      history.push("/");
    }
  }, []);
  return (
    <>
      {!contextState.isLogged && (
        <UserFormContainer>
          <LoginForm />
        </UserFormContainer>
      )}
    </>
  );
};

export default LoginPage;
