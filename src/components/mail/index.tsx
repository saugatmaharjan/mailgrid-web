import React, { FC } from "react";

import { AppContainer } from "components/shared";
import Composer from "components/mail/components/composer";

const Mail: FC = () => {
  return (
    <AppContainer>
      <h1>Compose new mail</h1>
      <Composer />
    </AppContainer>
  );
};

export default Mail;
