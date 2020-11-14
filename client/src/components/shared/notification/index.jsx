import React, { useEffect, useState } from "react";
import { Message } from "semantic-ui-react";

const Notification = ({ isSuccess, message, isVisible, error }) => {
  const [visible, setVisible] = useState(isVisible);
  useEffect(() => {
    setVisible(isVisible);
  }, []);
  const handleDismiss = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <Message
          floating
          onDismiss={handleDismiss}
          positive={isSuccess}
          negative={!isSuccess}
        >
          {isSuccess ? message : error}
        </Message>
      )}
    </>
  );
};

export default Notification;
