import React, { FC } from "react";

import { AppContainer } from "components/shared";
import Editor from "components/mail/components/editor";

const Mail: FC = () => {
  return (
    <AppContainer>
      <h1>Compose new mail</h1>
      <Editor />
    </AppContainer>
  );
};

export default Mail;
