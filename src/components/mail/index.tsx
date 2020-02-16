import React, { FC } from "react";

import { AppContainer, Heading } from "components/shared";
import Composer from "components/mail/components/composer";

const Mail: FC = () => {
  return (
    <AppContainer>
      <Heading level="one">Compose new mail</Heading>
      <Composer />
    </AppContainer>
  );
};

export default Mail;
