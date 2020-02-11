import React from "react";

import AppRouter from "components/routes";
import Theme from "components/theme";

const App = () => {
  const sendEmail = () => {
    fetch("http://localhost:4000/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        to: "maharjansaugat@gmail.com",
        from: "Excited user <example@test.com>",
        subject: "testing from client app",
        text: "this is a test email from client react app"
      })
    });
  };
  return (
    <Theme>
      <AppRouter />
    </Theme>
  );
};

export default App;
